const sumAll = function(num1, num2) 
{
  let sum = 0;
  if(num1 < 0 || num2 < 0)
  {
    return 'ERROR'
  }
  if(typeof num1 != "number" || typeof num2 != "number")
  {
    return 'ERROR';
  }
  if (num2 > num1)
  {
    for(num2; num2 > num1; num2--)
    {
      sum += num2;
    }
    sum += num2;
    return sum;
  }
  else if(num1 > num2)
  {
    for(num1; num1 > num2; num1--)
    {
      sum += num1;
    }
    sum += num2;
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
