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

//es6 syntax examples
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

// es5 syntax
function sayHi() {
  console.log('Hi!');
}

// es6 syntax
const sayHi = () => console.log('Hi!');

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

var arr = [4, 5, 6];

// es5
var completeArr = [1, 2, 3].concat(arr2); // [1, 2, 3, 4, 5, 6]

// es6
var completeArr = [1, 2, 3, ...arr]; // [1, 2, 3, 4, 5, 6]

var string = 'hello';

// es5
var characters = string.split(''); // ['h', 'e', 'l', 'l', 'o']

// es6
var characters = [...string]; // ['h', 'e', 'l', 'l', 'o']

//importing chai
// es5
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

// es6
import { assert, expect } from 'chai';

//reassign values

var list = [1, 2, 3];

// es5
temp = list[0];
list[0] = list[2];
list[2] = temp;

// es6
[ list[0], list[2] ] = [ list[2], list[0] ];

console.log(list); // [3, 2, 1]
