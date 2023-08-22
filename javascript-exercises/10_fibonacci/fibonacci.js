const fibonacci = function(position) {
  position = parseInt(position);
  if (Math.sign(position) === -1) return 'OOPS';
  if (position === 0) return 0;
  if (position === 1) return 1;
  else {
    num = fibonacci(position - 1) + fibonacci(position - 2);
  }
  return num;

};

// Do not edit below this line
module.exports = fibonacci;
