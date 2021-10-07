console.log("linked");
window.onload = () =>{
function fetchPokemonApi(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(function(data){

        
    data.results.forEach(function(pokemon){
        fetchPokemonData(pokemon); 
      })
     })
  }
}