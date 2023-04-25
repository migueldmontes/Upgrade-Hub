const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div = document.querySelector('[data-function="printHere"]')
document.body.appendChild(div)
const ul =document.createElement("ul")
div.appendChild(ul)

for (const car of cars) {
  const li = document.createElement("li")
  ul.appendChild(li)
  li.textContent = car
}