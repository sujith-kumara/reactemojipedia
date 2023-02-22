import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));


// var numbers = [3, 56, 2, 48, 5];

// const newNumbers = numbers.map(x =>  x*x);

// console.log(newNumbers);


// const newNumbers = numbers.map(function (x){
//     return x*x;
// });
// console.log(newNumbers);

// function square(x){
//     return x*x;
// }
// const newNumbers = numbers.map(square);
// conx=sole.log(newNumbers);

// var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

//Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(x => x < 10);
// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumbers = numbers.reduce((accumulator, currentNumber) => (accumulator + currentNumber));
// console.log(newNumbers);

////Find - find the first item that matches from an array.
// const newNumbers = numbers.find(x => (x>10));
// console.log(newNumbers);

////FindIndex - find the index of the first item that matches.
// const newNumbers = numbers.findIndex(x => (x>10));

// console.log(newNumbers);