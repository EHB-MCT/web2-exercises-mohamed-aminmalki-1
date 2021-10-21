window.onload = () =>{
    console.log(`linked`)

    let submitForm = document.getElementById("searchform").addEventListener("submit", e => {
        e.preventDefault();
        let inputPlayer = document.getElementById("inputTitle").value;
        document.getElementById("result").innerHTML = ""
        searchPlayer(inputPlayer);

    })
}

function searchPlayer(inputPlayer){
    fetch(`https://soccer.sportmonks.com/api/v2.0/players/search/${inputPlayer}?api_token=5LS9YnR3wOZ5E4SKmwJVhO7NmgWGa1Ds5HTP4CarHChCJhRGwbcbmrG2TWm8`)
    
    .then(response => response.json())
    .then(data => data.data.forEach(playerResult=>{

        console.log(playerResult)
        
        // document.getElementById('poster').src =  playerResult.image_path;
        // document.getElementById('title').innerText = playerResult.display_name;


        document.getElementById("result").innerHTML += `
        <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src="${playerResult.image_path}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${playerResult.display_name}</h5>
            <p class="card-text">${playerResult.nationality}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        </div>`
        })
    )
    function playerResult(){
      //playerresult.limit = 20
    }

    }
