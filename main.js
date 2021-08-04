#!/usr/bin/node


const arg = process.argv;

//console.log(arg);
class movies {

  constructor(title, director, year) {

    this.title = arg[2];
    this.director = arg[3];
    this.year =  arg[4];

  }

}

const test = new movies(arg[2], arg[3], arg[4]);
console.log(test);

//module.exports = movies;
