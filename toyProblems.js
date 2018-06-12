//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: str => {
    return str.split('').reverse().join('');
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: arr => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
      if(!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: str => {
    let split = str.split(' ');
    console.log("Split: ", split)
    for(let i = 0; i < split.length; i++) {
      // console.log('Split[i][0]: ', split[i][0])
      split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
      console.log('after: ', split[i])
    }
    return split.join(' ');
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: str => {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i < str.length; i++) {
      if(vowels.includes(str.charAt(i).toLowerCase())) {
        count++
      }
    }
    return count;
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: num => {
    // loop through all numbers two and above, checking to see if num % i is equal to 0.
    for(let i = 2; i < num; i++) {
      // If num % i IS equal to zero, return false, because that means num and i are not the only divisible numbers.
      if(num % i === 0) {
        return false;
      }
    }
    // Any number that makes it past this if statement will be prime, except 1
    return num > 1;
  }

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  //foo:

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  // log1:
  // log2:
}
