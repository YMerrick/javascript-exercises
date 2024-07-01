function round(num) {
  return Math.round(num * 10) / 10;
}

const convertToCelsius = function(temperature) {
  const convertedTemp = (temperature-32) * 5 / 9;
  return round(convertedTemp);
};

const convertToFahrenheit = function(temperature) {
  const convertedTemp = (temperature * 9 / 5) + 32;
  return round(convertedTemp);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
