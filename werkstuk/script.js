window.onload = () =>{
    console.log(`linked`)

    let submitForm = document.getElementById("searchform").addEventListener("submit", e => {
        e.preventDefault();
        let inputPlayer = document.getElementById("inputTitle").value;
        searchPlayer(inputPlayer);

    })
}

function searchPlayer(inputPlayer){
    fetch(`https://soccer.sportmonks.com/api/v2.0/players/search/${inputPlayer}?api_token=5LS9YnR3wOZ5E4SKmwJVhO7NmgWGa1Ds5HTP4CarHChCJhRGwbcbmrG2TWm8`)
    
    .then(response => response.json())
    .then(data => console.log(data))
    
    // document.getElementById('poster').src =  inputPlayer.image_path;
    document.getElementById('title').innerText = inputPlayer.display_name;

    }
