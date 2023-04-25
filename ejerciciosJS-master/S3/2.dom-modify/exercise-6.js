const ul =document.createElement("ul");
document.body.appendChild(ul);
for (let i = 0; i < apps.length; i++) {
    const app = apps[i];
    const li = document.createElement("li")
    li.textContent= app
    ul.appendChild(li)
    
}
