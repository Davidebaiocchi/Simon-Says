// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt
//  alla volta i numeri che ha visto precedentemente. 
// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri da indovinare sono stati individuati

var randomNumbers = [];
var numeriEstratti = 5;

// var numeroRandom = numeriRandom(1,100);
// console.log(numeroRandom);

while(randomNumbers.length < numeriEstratti){
    var numeroRandom = numeriRandom(1,6);
    if(!randomNumbers.includes(numeroRandom)){
        randomNumbers.push(numeroRandom);
    }
    
}
console.log(randomNumbers);

alert(randomNumbers);

setTimeout(inserisciNumeri, 30000);

function inserisciNumeri(){


    var risultato = indovinaNumeri(randomNumbers);
    console.log(risultato);
        
    
    if(risultato.length == 0) {
        console.log('non hai indovinato nessun numero');
    } else {
        console.log('hai indovinato ' + risultato.length + ' numeri e sono : ' + risultato);
    }
}

function indovinaNumeri(arrayRandom){
    var users = [];
    
        for(var i = 0; i < 5; i++){
            var numeroUtente = parseInt(prompt('Dammi un numero'));
            if(arrayRandom.includes(numeroUtente) && !users.includes(numeroUtente)){
                users.push(numeroUtente);
            }
        }
        return users;
}

// console.log('fuori da timeout', users);//da err undefined

function numeriRandom(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
