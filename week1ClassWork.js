// Week 1 Session 1 Classwork

// Write a function that checks a lists of numbers if a value is a
// prime number but stops checking if a non-positive value is discovered.
// Write this function in both function declaration and function
// expression style.

const test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const test2 = [24, 12, 32, 13, 22, 23, 21];
const test3 = [0, 1, 4, 6, 7, 11, 55, 1001, 19];

// Function Declaration
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  if (number == 2) {
    return true;
  }

  return number % 2 != 0;
}

checkNonPositive(test3);
function checkNonPositive(arr) {
  for (p of test3) {
    if (p < 0 || p == undefined || p == null) {
      console.log(p, "Naah not going to continue");
      return;
    } else {
      console.log(p, isPrime(p));
    }
  }
}

checkNonPositive_(test3);
let checkNonPositive_ = function (arr) {
  for (p of test3) {
    if (p < 0 || p == undefined || p == null) {
      console.log(p, "Naah not going to continue");
      return;
    } else {
      console.log(p, isPrime(p));
    }
  }
};
// Function expression Style
