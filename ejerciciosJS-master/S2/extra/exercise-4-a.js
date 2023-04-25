// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
// posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

// Sugerencia de función:


function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (text.towercase() == element.towercase()) {
            
            return i;
        }
    }
    return "El elemento no se encuentra";
}
let respuesta = findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], "mosquito");
console.log(respuesta);


