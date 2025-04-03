function lazzariSaluta(){
    alert("Ciao da Lazzari");
}

function lazzariGetMusica(){
    console.log("Ciao sono Lazzari, i miei autori preferiti sono:.....");
}

function lazzariGetClasse(){
    console.log("La mia classe è la 1c");
}


function lazzariCasuale(x,y){
    let numeroCasuale = Math.floor(Math.random() * x) + y;   ;
    console.log("numero casuale: " + numeroCasuale);
}



function lazzariAggiungiTitolo(a){
    for (let index = 0; index < a; index++) {
        const contenitore2 = document.getElementById("contenitore");
        const nuovoTitolo = document.createElement("h1");
        nuovoTitolo.textContent = "Ciao" + index;
        contenitore2.appendChild(nuovoTitolo);
    }
}





