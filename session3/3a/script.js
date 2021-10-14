window.onload = () =>{

    let randomNumber = Math.floor(Math.random() * 21)

    document.getElementById('form')
    .addEventListener('submit', () => {
    
        let inputNumber = document.getElementById('inputNumber').value;
        console.log(inputNumber);

        if (randomNumber < inputNumber){
            console.log(`The mystery number is lower. Guess again!`)
        }else if(randomNumber > inputNumber){
            console.log(`The mystery number is higher. Guess again!`)
        }else if(randomNumber == inputNumber){
            console.log(`You have guessed the mystery number!`)
        }
    });
}