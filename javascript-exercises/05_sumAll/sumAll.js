const sumAll = function(int1, int2) {
  if (typeof(int1) != 'number' || typeof(int2) != 'number'|| Math.sign(int1) === -1 || Math.sign(int2) === -1) {
    return 'ERROR';
  }
  else if (int1 > int2) {
    let temp = int1;
    int1 = int2;
    int2 = temp;
  }
  let sum = 0;
  for (let i = int1; i<=int2; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
