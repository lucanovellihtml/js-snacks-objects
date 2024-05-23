"use strict";

//DICHIARAZIONE DELL'ARRAY DI OGGETTI
const person = [
    { nome: 'Tizio', cognome: 'Caio', eta: 20 },
    { nome: 'Pippo', cognome: 'pluto', eta: 15 }
];

//DICHIARAZIONE DELL'ARRAY DI PERSONE CHE POSSONO GUIDARE O NON
const people = [];



/*
 - METODO DI POPOLAZIONE DELL'ARRAY DI MAMMIFERI;
 - DALL'ARRAY ESTRAGGO OGNI SINGOLO OGGETTI E CONTROLLO LA SUA KEY "CLASSE";
 - SE LA KEY RISPETTA LA CONDIZIONE, VIENE POPOLATO L'ARRAY NUOVO;
*/
for (let i = 0; i < person.length; i++) {

    const currentPerson = person[i];

    //console.log(typeof (currentPerson.eta));
    if (currentPerson.eta > 17)
        currentPerson.info = currentPerson.nome + " " + currentPerson.cognome + " puo' guidare";
    else
        currentPerson.info = currentPerson.nome + " " + currentPerson.cognome + " NON puo' guidare";

    people.push(currentPerson);
}


console.log("-*-*-*- ARRAY PERSONE -*-*-*-");
console.log(people);