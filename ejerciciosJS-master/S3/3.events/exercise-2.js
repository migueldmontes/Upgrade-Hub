const input = document.querySelector("input");
const mostrarValor = (event) =>{
    console.log(event.target.value);   
}
input.addEventListener("focus", mostrarValor)