const apiUrl = "https://breakingbadapi.com/api/characters";

const gallery = document.getElementById("gallery");

async function getCharacters() {
  try {
    const response = await fetch(apiUrl);
    const characters = await response.json();
    
    characters.forEach(character => {
      const card = document.createElement("div");
      card.classList.add("card");
      
      const image = document.createElement("img");
      image.src = character.img;
      image.alt = character.name;
      card.appendChild(image);
      
      const title = document.createElement("h2");
      title.textContent = character.name;
      card.appendChild(title);
      
      gallery.appendChild(card);
    });
  } catch (error) {
    console.error(error);
  }
}

getCharacters();
