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

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

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

