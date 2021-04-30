
var personajes = []
const select = document.getElementById('select-personaje')
const table = document.getElementById('table')
const div_datos = document.getElementById('datos')
var btns = document.getElementById('btnS')
var btna = document.getElementById('btnA')
var id = 0
var contador = 1

//https://pokeapi.co/api/v2/pokemon?limit=13&offset=20
//

function getPersonajes() {
    return fetch('http://hp-api.herokuapp.com/api/characters/students')
}

function tablaPerso(personajes) {

    for (var p in personajes) {
        const data = document.createElement('td')
        data.setAttribute('id', id++)
        data.classList.add('data')
        table.appendChild(data)
        data.textContent = personajes[p].name

    }

}

function mostrar(i, personajes) {
    var varita = (personajes[i].wand)
    var wand =  varita.wood +' wood, ' + varita.core + ' core, ' + varita.length + ' cm'
    console.log(wand)
    div_datos.innerHTML = `
                <p>Name: ${personajes[i].name}</p>`
    div_datos.innerHTML = `
                <p>House: ${personajes[i].house}</p>
                <p>Birth: ${personajes[i].dateOfBirth}</p>
                <p>Ancestry: ${personajes[i].ancestry}</p>
                <p>Wand: ${wand}</p>
                <p>Patronus: ${personajes[i].patronus}</p>
                <p>Gender: ${personajes[i].gender}</p>
                <p>Eyes: ${personajes[i].eyeColour}</p>
                <p>Hair: ${personajes[i].hairColour}</p>
                <p>Actor: ${personajes[i].actor}</p>
                <img id="imagen" src="${personajes[i].image}" height="200">
                `
}
function celdasColor() {
    var celdas = document.querySelectorAll('td')
    console.log()
    for (var celda of celdas) {
        var id = celda.getAttribute('id')
        if (contador == id) {
            celda.style.background = 'grey'
        } else {
            celda.style.background = 'rgb(26, 25, 31)'
        }
    }
}
function mostrarDiv(personajes) {

    btns.addEventListener('click', () => {
        console.log(contador)

        mostrar(contador, personajes)
        if (contador <= personajes.length - 2) {
            contador++
        } else {
            contador = personajes.length - 1
        }
        celdasColor()
    })

    btna.addEventListener('click', () => {
        console.log(contador)
        mostrar(contador, personajes)
        if (contador <= 0) {
            contador = 0
        } else {
            contador--

        }
        celdasColor()

    })

}

getPersonajes().then(response => response.json())
    .then(data => {
        personajes = data
        console.log(personajes)
        //selectPersonaje(data.results)
        //getPerso(data.results)
        mostrar(0, data)
        mostrarDiv(data)
        tablaPerso(data)
        // var celda = document.querySelector('td')
        // console.log(celda)
        // celda[0].style.background = 'red'


    })

/*
function getPerso(personajes) {
    select.addEventListener('change', function () {

        for (var p in personajes) {
            if (select.value === personajes[p].name) {
                console.log(personajes[p].name)
                //const p = document.createElement('p')
                div_datos.innerHTML = `
                <p>Name: ${personajes[p].name}</p>
                <p>Height: ${personajes[p].height}</p>
                <p>Mass: ${personajes[p].mass}</p>
                <p>Color hair: ${personajes[p].hair_color}</p>
                <p>Color eyes: ${personajes[p].eye_color}</p>
                <p>Birth year: ${personajes[p].birth_year}</p>
                <p>Gender: ${personajes[p].gender}</p>
                `
            }
        }
    })
}
*/

/*
function selectPersonaje(personajes) {
    for (var p in personajes) {
        const option = document.createElement('option')
        option.textContent = personajes[p].name
        select.appendChild(option) 
    }
}
*/
