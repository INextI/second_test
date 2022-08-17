"use strict";

//alert('hell');
//const result = confirm("ok?");
//const answer = prompt("OK?", "")

//document.write(answers);


let numberOfFilms = prompt("Сколко фильмов?", "");

const DB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let naame = prompt("film?", "");
let rate = prompt("rate?", "");

DB.movies[naame] = rate;

naame = prompt("film?", "");
rate = prompt("rate?", "");

DB.movies[naame] = rate;

console.log(DB);
