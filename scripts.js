const form = document.getElementById("form");

function handleSumit(event){
    event.preventDefault();
    
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;

    const result = name + " "+email + " " + message;
    const result2 = `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}\n`;


    alert(result2)
}

form.addEventListener("submit", handleSumit)