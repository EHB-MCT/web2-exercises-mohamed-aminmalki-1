let baseurl = 'http://www.omdbapi.com/?i=tt3896198&apikey=';
let apikey = '647ae3a3'

window.onload = () =>{
    console.log(`linked`)

fetch(baseurl + apikey)
    .then(response => response.json())
    .then(data => console.log(data))


    
}