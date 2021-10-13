import pokemonTeam from "./team.js"
console.log("linked");
window.onload = () =>{

    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')

    .then(response => response.json())
    .then(data => getPokemonsData(data.results))
  }

  function getPokemonsData(pokemons){
      console.log(pokemons);


  pokemons.forEach(pokemon => 

    fetch(pokemon.url)
    .then(response => response.json())
    .then(data => printHtml(data))
    )

  }

function printHtml(pokemonData){

  console.log(pokemonData);

  let type = new Array();

  pokemonData.types.forEach(element => {
    console.log(element.type.name)
    type.push(element.type.name)
  })

  document.getElementById('list').innerHTML += `
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${pokemonData.sprites.front_default}" alt="img">
  <div class="card-body">
          <h5 class="card-title">${pokemonData.id}</h5>
          <h5 class="card-title">${pokemonData.name}</h5>
          <h5 class="card-title">${[...type]}</h5>
        </div>
      </div>`

}
