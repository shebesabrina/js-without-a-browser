
ES5 vs ES6
Slides

Lesson objectives:
By the end of the lesson, you will

Be familiar with some of ES6 syntax and know how it relates to ES5
Know how inheritance works and be able to explain it
Vocabulary
Scope Where variables and functions are accessible
Prototypal Inheritance Inheritance by means of delegating message passing through a chain of objects (aka prototypes)
The differences between ES5 and ES6
Up until now, you’ve mostly been writing ECMAScript 5. (You can read more about ECMAScript here.)

ES5 is comfortable and familiar, but we ES6 gives us a lot of great new features, which we’ll start learning about here.

Block Scope
We’re familiar with global and function scope. Scope, in a nutshell, refers to where variables and functions are accessible, and in what context it is being executed.

We already know that variables declared (using the keyword var) inside of a function will remain scoped to that function. In other words, it won’t be accessible outside of the function.

ES6 gives us two new variable keywords: let and const. These two variable keywords introduce block scope.

What is a block? The most common ones that you will be familiar with are if statements and for loops. You can read more about block statements here.

Previously, when we wanted a variable to remain scoped to a block, we had to wrap the contents of the block in a function.

Consider the following example: let’s set up a for loop to create a bunch of functions that return the value of i multiplied by 2, and then push those functions into an array.

Here’s how we would achieve that in ES5:

// es5 block scope
var callbacks = [];

for (var i = 0; i <= 2; i++) {
  (function (i) {
    callbacks[i] = function () {
      return i * 2;
    };
  })(i);
}

callbacks[0]() === 0;
callbacks[1]() === 2;
callbacks[2]() === 4;
(If we did not wrap the contents of the for loop in a function, when we executed callbacks[0], callbacks[1], and callbacks[2] they would all return 4, because i would be hoisted out of the for loop block and defined in the global scope. The for loop would increment it up, so each of the functions would reference that global variable. Hence wrapping the contents of the for loop in a function.)

And here’s how we would do it with ES6 syntax:

// es6 block scope
var callbacks = []

for (let i = 0; i <= 2; i++) {

  callbacks[i] = function () {
    return i * 2
  }

}

callbacks[0]() === 0
callbacks[1]() === 2
callbacks[2]() === 4
The major differences are:

using the keyword let instead of var in the for loop, which will remain scoped to that block
not needing to wrap the contents of the loop in a function, because the i is no longer referencing a hoisted global variable
The differences between let and const:

Variables declared with let can be reassigned, whereas variables declared with const cannot.

If an array or object is declared using the keyword const, the contents of that array or object can be changed, but that variable name will always point to that same piece of memory.

Arrow Functions
ES6 gives us another way to write functions. They’re called arrow functions because they have an arrow in them. Neat!

Let’s look at the synctactic differences first:

Say we have an array of even numbers: var evens = [0, 2, 4, 6, 8];

We can map over that array to create new arrays of odds, pairs, and nums:

// es5 syntax examples
var odds = evens.map(function (v) {
  return v + 1;
});

var pairs = evens.map(function (v) {
  return { even: v, odd: v + 1 };
});

var nums = evens.map(function (v, i) {
  return v + i;
});

var fives = [];
nums.forEach(function (v) {
  if (v % 5 === 0) {
    fives.push(v);
  }
});
Compare that to arrow function syntax:

var odds = evens.map(v =>
  v + 1
);

var pairs = evens.map(v =>
  ({ even: v, odd: v + 1 })
);

var nums = evens.map((v, i) =>
  v + i
);

var fives = [];
nums.forEach(v => {
  if (v % 5 === 0) {
    fives.push(v)
  }
});
Here are some features arrow functions give you:

implicit return
the curly braces and keyword return can be eliminated and the remaining expression will be evaluated and returned
only make use of this when a single expression is written
multiple lines or expressions in an arrow function require the curly braces and the keyword return
return an object
surround the object with parentheses
you can still also use syntax from ES5 instead of parentheses if more semantic/readable
drop the parentheses around a single parameter
if using multiple parameters or no paremeters, the parentheses must be used
To name an arrow function, you must save it as a variable.

// es5 syntax
function sayHi() {
  console.log('Hi!');
}

// es6 syntax
const sayHi = () => console.log('Hi!');
Handling Parameters
ES6 gives us more ways to handle parameters.

Default parameters:

If you want to give some parameters default values, ES6 allows you to do that with much less syntax than ES5.

Consider the following code:

// es5
function f (x, y, z) {
    if (y === undefined) {
        y = 7;
    }
    if (z === undefined) {
        z = 42;
    }
    return x + y + z;
};

f(1) // 50

// es6
function f (x, y = 7, z = 42) {
    return x + y + z
}

f(1) // 50
Spread operator:

The spread operator has many more applications.

var arr = [4, 5, 6];

// es5
var completeArr = [1, 2, 3].concat(arr2); // [1, 2, 3, 4, 5, 6]

// es6
var completeArr = [1, 2, 3, ...arr]; // [1, 2, 3, 4, 5, 6]
The spread operator took the individual values from the array and added them into the new array.

var string = 'hello';

// es5
var characters = string.split(''); // ['h', 'e', 'l', 'l', 'o']

// es6
var characters = [...string]; // ['h', 'e', 'l', 'l', 'o']
In this case, the split method is not terribly complex, but using the spread operator makes the code more readable at a glance; you can see that the result is an array.

Destructuring
Importing:

// es5
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

// es6
import { assert, expect } from 'chai';
ES6 shortens up the importing syntax. Destructuring helps us define variables pulled out of datasets, as in the following code:

Creating variables based on key value pairs:

const dog = {
  name: 'Spot',
  breed: 'corgi',
  tricksLearned: {
    sit: true,
    stay: true,
    rollOver: false,
    beg: true,
    speak: false
  }
}

let { name, breed } = dog;
let { sit, stay, speak } = dog.tricksLearned;

console.log(name); // 'Spot'
console.log(stay); // true



const strings = ['one', 'two', 'three'];
let [one, two, three] = strings;

console.log(two); // 'two'
