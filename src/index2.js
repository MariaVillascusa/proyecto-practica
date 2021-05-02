
var personajes = [];
const select = document.getElementById('select-personaje');
const table = document.getElementById('table');
const div_datos = document.getElementById('datos');
var btns = document.getElementById('btnS');
var btna = document.getElementById('btnA');
var id = 0;
var contador = 0;

getPersonajes().then(response => response.json())
    .then(data => {
        personajes = data;
        tablaPerso(data);
        mostrarInfo(contador, data);
        cambioBoton(data);
        cambioTeclas(data);
        cambioClick(data);
    })

function getPersonajes() {
    return fetch('http://hp-api.herokuapp.com/api/characters/students');
}

function tablaPerso(personajes) {
    for (var p in personajes) {
        const data = document.createElement('td');
        data.setAttribute('id', id++);
        data.classList.add('data');
        table.appendChild(data);
        data.textContent = personajes[p].name;
    }
    var primeraCelda = document.querySelector('td');
    primeraCelda.style.background = 'grey';
}

function mostrarInfo(i, personajes) {
    var varita = (personajes[i].wand);
    var wand = varita.wood + ' wood, ' + varita.core + ' core, ' + varita.length + ' cm';
    div_datos.innerHTML = `
                <p>Name: ${personajes[i].name}
                <p>House: ${personajes[i].house}</p>
                <p>Birth: ${personajes[i].dateOfBirth}</p>
                <p>Ancestry: ${personajes[i].ancestry}</p>
                <p>Wand: ${wand}</p>
                <p>Patronus: ${personajes[i].patronus}</p>
                <p>Gender: ${personajes[i].gender}</p>
                <p>Actor: ${personajes[i].actor}</p>
                <img id="imagen" src="${personajes[i].image}" height="200">
                `;
}

function celdasColor() {
    var celdas = document.querySelectorAll('td');
    for (var celda of celdas) {
        var id = celda.getAttribute('id');
        if (contador == id) {
            celda.style.background = 'grey';
        } else {
            celda.style.background = 'rgb(26, 25, 31)';
        }
    }
}

function cambioBoton(personajes) {
    var personajes = personajes;

    btns.addEventListener('click', () => {
        der(personajes);
    })
    btna.addEventListener('click', () => {
        izq(personajes);
    })
}

function cambioTeclas(personajes) {
    var personajes = personajes;
    document.onkeydown = (tecla) => {

        var teclaPulsada = tecla.keyCode;
        if (teclaPulsada == 39) {
            der(personajes);
        }
        else if (teclaPulsada == 37) {
            izq(personajes);
        }
    }
}

function cambioClick(personajes) {
    var celdas = [];
    for (var i = 0; i < personajes.length; i++) {
        var celda = (document.getElementById(i));
        celdas.push(celda);
    }
    for (var i = 0; i < celdas.length; i++) {
        celdas[i].onclick = (e) => {
            indice = Array.from(celdas).indexOf(e.target);
            mostrarInfo(indice, personajes)
            contador = indice;
            id = indice;
            for (var c of celdas) {
                c.style.background = 'rgb(26, 25, 31)';
            }
            celdas[indice].style.background = 'grey';
        };
    }
}

function der(personajes) {
    if (contador <= personajes.length - 2) {
        contador++;
        mostrarInfo(contador, personajes);
    }
    celdasColor();
}

function izq(personajes) {
    if (contador > 0) {
        contador--;
        mostrarInfo(contador, personajes);
    }
    celdasColor();
}

/*
function selectPersonaje(personajes) {
    for (var p in personajes) {
        const option = document.createElement('option')
        option.textContent = personajes[p].name
        select.appendChild(option)
    }
}
*/
