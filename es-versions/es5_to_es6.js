// re-write each function in ES6 syntax:

// function add3(number) {
//   return number + 3;
// }
let add3 = number => number + 3;

// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// }

let addTwoNumbers = (num1, num2) => num1 + num2;

// function averageOfArray(arr) {
//   let total = arr.reduce((total, number) => {
//     return total += number;
//   }, 0)

//   return total / arr.length;
// }

let averageOfArray = arr =>
{let total = arr.reduce ((total, number) =>
  total += number
  ,0)
return total/ arr.length;
}
