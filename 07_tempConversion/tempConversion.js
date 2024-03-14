const convertToCelsius = function(num) 
{
  newNum = (num - 32) * (5 / 9);
  newNum = Math.round(newNum * 10) / 10;
  return newNum;
};

const convertToFahrenheit = function(num) 
{
  newNum = (num * (9 / 5) + 32);
  newNum = Math.round(newNum * 10) / 10;
  return newNum;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
