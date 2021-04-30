
// https://rickandmortyapi.com/api/character/373
// https://rickandmortyapi.com/api/character
// https://swapi.dev/api/people/


const select = document.getElementById('select-personaje')

const url = 'https://swapi.dev/api/people/'

async function getData() {
    let response = await fetch(url);
    let data = response.json();
    return data;
}
var personajes = []
var data = getData()
    .then(data => {
        personajes = data.results;
        for (var p in personajes) {
            const option = document.createElement('option')
            option.textContent = personajes[p].name
            select.appendChild(option)

            console.log(personajes[p].name)


        }
    })







