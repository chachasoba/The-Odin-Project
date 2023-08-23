const convertToCelsius = function(tempInFahrenheit) {
  let tempInCelcius = (tempInFahrenheit - 32) * (5/9);
  if (Number.isInteger(tempInCelcius)) {
    return tempInCelcius;
  }
  else {

    return parseFloat(tempInCelcius.toFixed(1));
  }
};

const convertToFahrenheit = function(tempInCelcius) {
  let tempInFahrenheit = (tempInCelcius * (9/5)) + 32;
  if (Number.isInteger(tempInFahrenheit)) {
    return tempInFahrenheit;
  }
  else {

    return parseFloat(tempInFahrenheit.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
