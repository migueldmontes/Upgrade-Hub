const boton = document.querySelector("#btnToClick")
document.body.appendChild(boton)
const click =(event) =>{
    console.log(event)
}
boton.addEventListener("click", click)
