// Function declaration
"use strict";

function add(x, y) {
  return x + y;
}

// Assign to a variable
var addAlias = add;

// Assign an anonymous function expression
var multiply = function multiply(x, y) {
  return x * y;
};

// Functions have properties
console.log(add.name); // 'add'
console.log(addAlias.name); // 'add'
console.log(multiply.name); // ''