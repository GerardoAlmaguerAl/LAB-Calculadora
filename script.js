//Javascript code for a Basic FUnctions of a Calculator

//Function to perform addition
function sum(a,b)
{
  let num1 = parseFloat(a)
  let num2 = parseFloat(b)
  return num1 + num2;
}
//Function to perform subtraction, 

function subtract(a,b)
{
  let num1 = parseFloat(a)
  let num2 = parseFloat(b)
  return num1 - num2;
}
//Function to perform multiplication 
function multiply(a,b)
{
  let num1 = parseFloat(a)
  let num2 = parseFloat(b)
  return num1 * num2;
}
// Function to perform division
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

// Test cases
let resultado = subtract(5,2)
let resultado2 = divide("2","0")
console.log(resultado)
console.log(resultado2)