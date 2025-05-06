const btn = document.querySelector("#submit");

btn.addEventListener("click", e => {
    e.preventDefault();
    const name = document.querySelector("#nome").value;
    const message = document.querySelector("#mens").value; 
    if(name=== "" || message === ""){
        alert('Preencha todos os campos')
    }else{
        message.replace(" ", "+")
        window.location.assign(`https://wa.me/554599802118?text=Nome:+${name}%0AMensagem:+${message}`)
    }
    
})
