#!/usr/bin/node


const arg = process.argv;

//console.log(arg);
class movies {

  constructor(title, director, year) {

    this.title = arg[2];
    this.director = arg[3];
    this.year =  arg[4];
  }

    add () {
     // let new_array = [];
      hola = hola.concat(movies);
      return (new_array);
    }
}

let hola = [
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

];
const test = new movies(arg[2], arg[3], arg[4]);
	console.log (test);

//if ()
//const test = new movies(arg[2], arg[3], arg[4]);

/*let new_array = [];
//console.log(test);

new_array = hola.concat(test);


console.log(new_array);
*/
//module.exports = movies;
