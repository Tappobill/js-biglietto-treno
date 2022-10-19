/*Quanti km da percorrere*/

let userKm = parseInt(prompt('Quanti km da percorrere?'));

/*Età del passeggero*/

let userAge = parseInt(prompt('Quanti anni hai?'));

/*Prezzo al km del biglietto*/

let ticketValue = (0.21);

/*Prezzo non scontato*/

let value = userKm * ticketValue;


/*Sconto relativo all'età*/

let under18 = value * (0.2);
let over65 = value * (0.4);

if (userAge < 18) {
    under18;
}
else if (userAge > 65) {
    over65;
}

/*Prezzo scontato*/

let finalunder18 = value - under18;
let finalover65 = value - over65;

/*Fine*/

let first = finalunder18.toFixed(2);
document.getElementById('under18').innerHTML = first;
let second = finalover65.toFixed(2);
document.getElementById('over65').innerHTML = second;