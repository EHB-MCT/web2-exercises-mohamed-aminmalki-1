window.onload = () =>{

    let randomNumber = Math.random() * (20 - 1) + 1;

    document.getElementById('form')
    .addEventListener('submit', () => {
    
        let inputNumber = document.getElementById('inputNumber').value;
        console.log(resultNumber);

        if (randomNumber == inputNumber){
            console.log(`You have guessed the mystery number!`)
        }else {
            console.log(`nice try`)
        }
    });
}