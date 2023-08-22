const reverseString = function(string) {
  let stringReversed = ''
  for (let i=1; i<=string.length;i++) {
    stringReversed += string.charAt(string.length - i);
  }
  return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
