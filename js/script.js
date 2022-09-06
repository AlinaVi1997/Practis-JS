// let number = 5;
// const leftBorderwidth = 1;

// number =10;
// console.log(number);

// const obj = {
//   name: "Jhon",
//   age: 25,
//   isMarried: false
// };

//   console.log (obj.name);

//   let arr = ['plum', 'orange',];
//   console.log (arr[0]);
   
//   const answer = prompt ("do you have 18 years old","");
//   console.log (typeof(answer));

//   const result = confirm("Are you here?");
// console.log (result);
// const answers = [];

// answers[0] = prompt ('whats your name ?','');
// answers[1] = prompt ('your last name?','');
// answers[2] = prompt ('How old are you?','');


const number0fFilms = +prompt  ("how movies have already you watced?",'');
const personalmovieDB =  {
count: number0fFilms,
movies: {},
actors:{},
genres: [],
privat: false
};

console.log (personalmovieDB);

const a = prompt ('one of the previously movies wachted?',''),
      b = prompt ('Whats mark is movies?',''),
      c = prompt ('one of the previously movies wachted?',''),
      d = prompt ('Whats mark is movies?','');

personalmovieDB.movies[a]=b;
personalmovieDB.movies[c]=d;
console.log(personalmovieDB);
