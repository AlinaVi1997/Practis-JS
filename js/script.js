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


let number0fFilms;

function start() {
   number0fFilms = +prompt  ("how movies have already you watced?",'');
   while (number0fFilms== '' || number0fFilms==null || isNaN(number0fFilms)) {
      number0fFilms = +prompt  ("how movies have already you watced?",'');
   }
}
start();

const personalmovieDB =  {
count: number0fFilms,
movies: {},
actors:{},
genres: [],
privat: false
};

for (let i=0; i<2; i++){
   const a = prompt ('one of the previously movies wachted?',''),
         b = prompt ('Whats mark is movies?','');
   if (a != null && b != null && a !=''&& b !='' && a.length <50){
      personalmovieDB.movies[a] = b;
      console.log('done');
   } else {
      console.log ('error');
      i--;
   }
}

if (personalmovieDB.count <10){
   console.log("watched quite a few films");
} else if (personalmovieDB.count >=10 && personalmovieDB.count <30) {
   console.log ("You are clasic viewer ");
}  else if (personalmovieDB.count >=30){
   console.log("You are like movies");  
} else {
   console.log("Make mistake");  
}
console.log(personalmovieDB);
