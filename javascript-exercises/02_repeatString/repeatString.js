const repeatString = function(string, num) {
  let repeatString = ''
  if (Math.sign(num) === -1) {
    return "ERROR"
  }
  else {
    for (let i=0; i<num; i++) {
      repeatString += string;
    }
    return repeatString;
  }
};

// Do not edit below this line
module.exports = repeatString;
