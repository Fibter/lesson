"use strict";

//alert("hello");

//const result = confirm ("are you heare"); 

//const answer = prompt ("rewwffdf", "");   

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
 

for (i=0; i<2; i++) {   
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

          personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);   



(num === 50) ? console.log('ok') : console.log('error');    //тернарный оператор  

const number = 50;        //сравнение

switch (number) { 
        case 49:
            console.log('error');
            break;
        case 45:
            console.log('no');
            break;
         case 50:   
            console.log('yes');
            break;
}


const first = 40;      //сравнение по фложенности

if (first < 30) { 
    console.log('error');
} else if (first >30) {   
    console.log('good');
}



let yet =50;            //циклы

while (yet < 55) {  
    console.log(yet);
    yet++;
}   

do {                     //сначало делать
    console.log(yet);
    yet++;
}   
while (yet < 55)    



for (let i=1; i<8; i++) {          //основа
    console.log(yet);
    yet++;
}



let result = '';
const length = 7;   

for (let i = 1; i<length; i++) {    
    for (let j=0; j<i; j++) {   
        result += "*";
    }   
    result += '\n';
}   

console.log (result);




for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


let boy =10;

function showFirstMessage (text) {  
    console.log(text);  
    boy= 10;
}

showFirstMessage("Hello World");    
console.log(boy);   


function calc (a,b) {   
    return (a + b);
}   

console.log(calc(4,5));



const logger = function () {    
    console.log("hello");
};  

logger();   


const calco = (a,b) => a+b;