//Javascript code for a Basic FUnctions of a Calculator

//Function to perform addition
function sum(a,b)
{
  let num1 = parseFloat(a)
  let num2 = parseFloat(b)
  return num1 + num2;
}
//Function to performsubtraction, multiplication and division

function subtract(a,b)
{
  let num1 = parseFloat(a)
  let num2 = parseFloat(b)
  return num1 - num2;
}

function multiply(a,b)
{
  let num1 = parseFloat(a)
  let num2 = parseFloat(b)
  return num1 * num2;
}

function divide(a,b)
{
  let num1 = parseFloat(a)
  let num2 = parseFloat(b)  
  if(num2 === 0)
  {
    return "En que estas pensando? No se puede dividir entre cero";
  }
  return a / b; 
}