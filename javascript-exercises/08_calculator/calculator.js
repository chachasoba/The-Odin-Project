const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let sum = 0;
  for (let i=0; i<array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let multiples = 1
  for (let i=0; i<array.length;i++) {
    multiples *= array[i];
  }
  return multiples;
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  else {
    let factorial = 1;
    for (let i=1; i<=num; i++) {
      factorial *= i;
    }
    return factorial;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
