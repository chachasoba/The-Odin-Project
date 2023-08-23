const leapYears = function(year) {
// divisible by 4 && not divisible by 100
  if (year%4 === 0 && year%100 !=0) {
    return true;
  }
  //divisible by 100 && 400
  else if (year%100 === 0 && year%400 === 0) {
    return true;
  }
  else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
