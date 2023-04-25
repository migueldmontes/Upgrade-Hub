// Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías
// de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse.
// Para filtrar las categorías puedes ayudarte de la función `.includes()`.

categorias = [];
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
for (const movie of movies) {
    for (let i = 0; i < movie.categories.length; i++) {
        const element = movie.categories[i];
        if (!categorias.includes(element)) {
            categorias.push(element)
        }
    }
}
console.log(categorias);