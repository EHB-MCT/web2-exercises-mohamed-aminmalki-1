window.onload = () =>{
    console.log("linked")

    document.getElementById('form')
    .addEventListener('submit', event => {
        event.preventDefault();

        let name =  document.getElementById('nameInput').value
        let email =  document.getElementById('emailInput').value
        let order =  document.getElementById('orderInput').value

        
        return `<p>The order for the customer ${name} is the following:  
        ${order}. The customer may be notified by email: ${email}</p>`;
    });

}