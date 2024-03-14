const reverseString = function(string) 
{
  let reversedString = '';
  for (i = 1; i == string.length; i++)
  {
    reversedString = reversedString + string[string.length - i]
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
