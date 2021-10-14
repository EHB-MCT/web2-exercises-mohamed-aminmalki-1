window.onload = () =>{

    let randomNumber = Math.random() * (20 - 1) + 1;

    document.getElementById('form')
    .addEventListener('submit', () => {
    
        let resultNumber = document.getElementById('inputNumber').value;
        console.log(resultNumber);


    });
}