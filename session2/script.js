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

  document.getElementById('container').innerHTML += `
  <div><img class="card-img-top" src="${pokemonData.sprites.front_default}" alt="img"></div>`

}