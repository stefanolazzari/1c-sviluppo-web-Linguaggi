let colori = ["red","black","white","green","yellow","pink"];

let contenitore = document.getElementById("contenitore");


for (let index = 0; index < colori.length; index++) {
    const elemento = colori[index];
    const coloreTesto = colori[colori.length-1 - index]
    console.log(elemento);

    const nuovoParagrafo = document.createElement("p");
    nuovoParagrafo.textContent = elemento;
    nuovoParagrafo.style.backgroundColor = elemento;
    nuovoParagrafo.style.color = coloreTesto;
    nuovoParagrafo.style.marginRight = index + "%";

    contenitore.appendChild(nuovoParagrafo);
}