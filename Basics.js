// This code will take you through the basic of functional programming using javascript

/* Functional Programming is a programming paradigm that tries to bind code as mathematical functions. 
These mathematical functions reduce the redudancy in the code without changing the state and mutable data.
The functional programming paradigm differentiates between pure and impure functions.
There are two conditions that are required to be satisfied to be called as a pure function:
  1.The function must return the same value every time for the same sets of inputs. This means that the function must not depend on any mutable state
  2.The function cannot create side-effects
*/

// Following are the basic implementations 

function multiply(a,b){
// The function will return the same output for the same sets of input as it does not depend on any external variable.
// There are no side effects as well.
  return a*b;
}

// Impure implementation because it causes a side-effect by logging to the console.
function multiply(a, b) {
  console.log('Arguments: ', a, b); //Logging to the console.
  return a * b;
}

// Recursion in Functional Programming
function recursiveFactorial(n) {
  // Base case
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
  // Carefully note that it is a pure function satisfying the above mentioned points
}

// Currying: it is a process of breaking down of the problem into smaller and smaller problems and turning each step in the function untill the last function that accepts only one argument
function curriedDot(vector1) {
  return function(vector2) {
    return vector1.reduce((sum, element, index) => sum += element * vector2[index], 0);
  }
}
const sumElements = curriedDot([1, 1, 1]);
// Taking the dot product of any vector with [1, 1, 1]
// is equivalent to summing up the elements of the other vector.
