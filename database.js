#!/usr/bin/node
//
const arg = process.argv;
const movies = require('./main');

const test = new movies(arg[2], arg[3], arg[4]);

defaultMovies.push(test);

let defaultMovies = [
    {
    title: 'Jurassic Park',
    director: 'John Doe',
    year: '1990'
    },
    {
    title: 'The Dead Pool',
    director: 'Mathew Albison',
    year: '2014'
    }
]

cosole.log(defaultMovies);
