const button = document.querySelector("button")

const get = async()=> {
    let baseUrl = "https://api.nationalize.io?name="
    const input = document.querySelector("input")

    const response = await fetch(baseUrl+input.value)
    const data = await response.json()
    console.log(data)
}
button.addEventListener("click", get)