// // // "use strict";
// // // // if (4==4){
// // // //   console.log ('ok!');
// // // // }
// // const num = 50;
// // switch (num) {
// //     case 49:
// //       console.log('неверно');
// //       break;
// //     case 100:
// //       console.log('неверно');
// //       break;
// //     case 50:
// //       console.log('в точку');
// //       break;  
// //     default:
// //       console.log('done!') ;
// //       break;   
// // }
// // // // console.log ('ggg' && 0);
// // // // console.log (0 && 5);
// // // // console.log (5 && 6);
// // // // console.log (null && 7);
  
// // // let hamburger;
// // // const fries =NaN;
// // // const cola =0;
// // // const nuggets = 2;

// // // if (hamburger && cola || fries===3 && nuggets) {
// // //     console.log('all good');
// // // } else {
// // //     console.log('all bad');
// // // }
// // // console.log(hamburger ===3 && (cola===2 || fries===3) && nuggets);


// // // let johnReport, alexReport, samreprot,mariaReport = 'done';
// // // console.log (johnReport || alexReport || samreprot || mariaReport);

// // // console.log(!0);

// // // console.log (NaN || 2);
 
// // // console.log( NaN && 2 && undefined );
// // // console.log (1 && 2 && 3);
// // // console.log( !1 && 2 || !3 );
// // // console.log( 25 || null && !3 );
// // // console.log( NaN || null || !3 || undefined || 5);
// // // console.log( NaN || null && !3 && undefined || 5);
// // // console.log( 5 === 5 && 3 > 1 || 5);



// // let num =50;
// // // while(num <=55){
// // //     console.log(num);
// // //     num++;
// // // }

// // do{
// //   console.log(num);
// //   num++;
// // } while (num<55);

// // for (let i = 1; i <=10; i++) {
// //   if (i==6){
// //       // break;
// //       continue;
// //   }
// //   console.log(i);
// // }


// // for (let i=0; i<3; i++){
// //   console.log (i);
// //   for (let j=0; j<3; j++){
// //       console.log (j);
// //   }
// // }



// // // *
// // // **
// // // ***
// // // ****
// // // *****
// // // ******


// // let result = '';
// // const length= 7;

// // for (let i =1; i< length; i++){

// //     for (let j=0; j < i; j++){
// //         result += "*";
// //     }
// //   result += '\n';
// // }
// // console.log(result);


// // first: for (let i=0; i<3; i++){
// //   console.log (`First level: ${i}`);
// //   for (let j=0; j<3; j++){
// //     console.log (`Second level: ${j}`);
// //     for (let k=0; k<5; k++){
// //       if (k===2) break first;
// //       console.log (`Third level: ${k}`);
// //     }
// //   } 
// // }

// // for (let i = 2; i <= 16; i++) {
// //   if (i % 2 === 0) {
// //       continue;
// //   } else {
// //       console.log(i);
// //   }
// // }
// // const arr = [3, 5, 8, 16, 20, 23, 50];
// // const result = [];

// // for (let i = 0; i < arr.length; i++) {
// //     result[i] = arr[i];
// // }

// // console.log(result);
// // return result;

// const lines = 5;
// let result = '';
//     for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
// result +='\n';
// }
// console.log(result);

// // function calc (a,b){
// //     return(a+b);
// // }
// // console.log(calc(4,6));
// // console.log(calc(6,34));

// function ret (){
//     let num =50;
//     return num;

// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function(){
// console.log ("hello");
// }; 
// logger ();

// const cacl =(a,b) => {
//     console.log ('1');
//     return a+b;
// };
// const usdCurr =28;
// const discount =0.9;

// function convert (amount, curr){
//      return curr * amount;
// }
// function promotion(result) {
//     console.log(result *discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);

// function test (){
// for (let i = 0; i<5; i++){
//     console.log (i);
//     if (i===3) return
// }
// console.log('Done');
// }
// test();

// function sayHello (name){
//     return `Hello, ${name}!`;

// }
// sayHello ('Yare');

// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

// let str = '';

// for (let i = 1; i <= times; i++) {
//     if (i === times) {
//         str += `${num * i}`;
//         // Тут без черточек в конце
//     } else {
//         str += `${num * i}---`;
//         // Это тоже самое, что и
//         // str = str + num * i + "---"
//     }
// }

//     return str;
// }
