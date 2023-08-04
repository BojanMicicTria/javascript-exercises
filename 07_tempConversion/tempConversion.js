const convertToCelsius = function(temp) {
  const converted = ((temp - 32) * 5) / 9;
  let decimal = converted.toString();

  if (decimal.length > 4) {
    let finish = Number(decimal);
    return finish.toFixed(1);
  }
  return converted;
};

const convertToFahrenheit = function(temp) {
  const converted = (temp * 9) / 5 + 32;
  let decimal = converted.toString();

  if (decimal.length > 4) {
    let finish = Number(decimal);
    return finish.toFixed(1);
  }
  return converted;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
