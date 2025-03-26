let colori = ["red","black","white","green","yellow","pink"];

let arrayImmagini = ["cammello.jpeg","giraffa.jpeg","gufo.jpeg"];

let contenitore = document.getElementById("contenitore");


for (let index = 0; index < colori.length; index++) {
    const elemento = colori[index];
    const coloreTesto = colori[colori.length-1 - index]
    console.log(elemento);

    const nuovoParagrafo = document.createElement("p");
    nuovoParagrafo.textContent = elemento;
    nuovoParagrafo.style.backgroundColor = elemento;
    nuovoParagrafo.style.color = coloreTesto;
    nuovoParagrafo.style.textAlign = "center";
    nuovoParagrafo.style.marginRight = index * 5 + "%";
    nuovoParagrafo.style.marginLeft = index * 5 + "%";
    nuovoParagrafo.style.fontSize = (index+1)*10  + "px";
    nuovoParagrafo.style.padding = index + "%";


    contenitore.appendChild(nuovoParagrafo);
}



for (let index = 0; index < arrayImmagini.length; index++) {
    const nuovaImmagine = document.createElement("img");
    nuovaImmagine.src = arrayImmagini[index];
    nuovaImmagine.alt = arrayImmagini[index];
    contenitore.appendChild(nuovaImmagine);
}


