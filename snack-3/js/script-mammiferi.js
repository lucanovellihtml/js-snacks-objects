"use strict";

//DICHIARAZIONE DELL'ARRAY DI OGGETTI
const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
];

//DICHIARAZIONE DELL'ARRAY DI MAMMIFERI
const mammal = [];


/*
 - METODO DI POPOLAZIONE DELL'ARRAY DI MAMMIFERI;
 - DALL'ARRAY ESTRAGGO OGNI SINGOLO OGGETTI E CONTROLLO LA SUA KEY "CLASSE";
 - SE LA KEY RISPETTA LA CONDIZIONE, VIENE POPOLATO L'ARRAY NUOVO;
*/
for (let i = 0; i < animals.length; i++) {

    //console.log(animals.length);
    //console.log(i);
    const currentAnimal = animals[i];
    console.log(currentAnimal.classe);

    if (currentAnimal.classe === "mammiferi")
        mammal.push(currentAnimal);

}

console.log("-*-*-*- ARRAY MAMMIFERI -*-*-*-");
console.log(mammal);