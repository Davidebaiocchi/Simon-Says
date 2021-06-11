// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, 
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// creo due array 
var randomNumbers = [];
var userNumbers = [];


// creo un alert con i 5 numeri random
while (randomNumbers.length < 5) {
    var numeroCasuale = Math.floor(Math.random() * 100 ) +1;

    if (!randomNumbers.includes(numeroCasuale)) {
        randomNumbers.push(numeroCasuale);
    }  
}
alert(randomNumbers);


// timer 30 secondi
var timeleft = 2;
var downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval();
    document.getElementById("countdown").innerHTML = "Finished"
  }
}, 1000);


 // Chiedo i 5 numeri all utente

for(i = 0; i < 5; i++) {
var usNumber = parseInt(prompt('Inserisci un numero che ti ricordi'));
if (!randomNumbers.includes(usNumber)) {
    userNumbers.push(usNumber);
} else {
    alert('Numero precendentemente utilizzato!');
}
}    
    
// Confronto i numeri dell'utente e quelli random, quelli che coincidono li stampo. Segno il punteggio.
for(i = 0; i < 5; i++) {
    if(userNumber[i] == randomNumbers[i]) {
    document.getElementById("countdown").innerHTML = userNumber[i] + 'Hai ottenuto ' + userNumber[i] + 'Punti';
    }
}