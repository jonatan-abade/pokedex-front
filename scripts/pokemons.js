document.addEventListener('DOMContentLoaded', async function () {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10', {
        method: 'GET'
    }).then(async (response) => {
        let responseJSON = await response.json()

        console.log(responseJSON);

        let pokemons = responseJSON.results

        pokemons.map(async (pokemon) => {
            let data = await fetch(pokemon.url)
            let pokemonData = await data.json()


            document.getElementById('main').innerHTML +=
                `<div class="card">
                <img src="${pokemonData.sprites.front_default}" alt="${pokemon.name}">
                <h2>${pokemon.name}</h2>
                <div class="types">${pokemonData.types.map((type) => `<span>${type.type.name}</span>`).join('')}</div>
            </div>
            `
        })
    })

})