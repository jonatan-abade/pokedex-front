document.addEventListener('DOMContentLoaded', async function () {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20', {
        method: 'GET'
    }).then(async (response) => {
        let responseJSON = await response.json()

        // console.log(responseJSON);

        let pokemons = responseJSON.results

        pokemons.map(async (pokemon) => {
            let data = await fetch(pokemon.url)
            let pokemonData = await data.json()
            // console.log(pokemon);
            // console.log(pokemonData);

            document.getElementById('main').innerHTML +=
                `<div class="card" onclick="getPokemon('${pokemon.name}', '${pokemon.url}')">
                <img src="${pokemonData.sprites.front_default}" alt="${pokemon.name}">
                <h2>${pokemon.name}</h2>
                <div class="types">${pokemonData.types.map((type) => `<span class="${type.type.name}">${type.type.name}</span> | `).join('')}</div>
            </div>
            `
        })
    })

})

function getPokemon(pokemonName, pokemonURL) {
    location = `pokemon.html?name=${pokemonName}&url=${pokemonURL}`
}