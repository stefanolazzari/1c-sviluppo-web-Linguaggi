const bottoneColore = document.getElementById("bottone-colore");//bottone per cambiare il colore
const bottoneMargine = document.getElementById("bottone-margine");//bottone per cambiare il margine
//aggiugere un bottone per il colore del testo

const contenitore = document.getElementById("box"); //contenitore del testo 


//dichiarazione di funzione per cambiare il colore
function cambiaColore(){
    let dado = Math.floor(Math.random()*6);

    let colore = "white";

    if(dado === 0){
        colore = "red";
    }
    else if(dado === 1){
        colore = "green";
    }
    else if(dado === 2){
        colore = "blue";
    }
    else if(dado === 3){
        colore = "pink";
    }
    else if(dado === 4){
        colore = "black";
    }
    else if(dado === 5){
        colore = "purple";
    }

    return colore;

}

//gestore di eventi per cambiare il colore
bottoneColore.addEventListener("click",function(){
    contenitore.style.background = cambiaColore();
})




//dichiarazione di funzione per cambiare il margine
function cambiaMargine(){
    let dado = Math.floor(Math.random()*6);

    let margine = "0%";

    if(dado === 0){
        margine = "1%";
    }
    else if(dado === 1){
        margine = "2%";
    }
    else if(dado === 2){
        margine = "3%";
    }
    else if(dado === 3){
        margine = "4%";
    }
    else if(dado === 4){
        margine = "5%";
    }
    else if(dado === 5){
        margine = "10%";
    }

    return margine;

}

// gestore di eventi per modificare il margine
bottoneMargine.addEventListener("click",function(){
    contenitore.style.margin = cambiaMargine();
})




//aggiugere una funzione simile alle precendenti per modificare il colore del testo (contenitore.style.color)



