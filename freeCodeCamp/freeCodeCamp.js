// Setup 
let lastNameLength = 0;
const lastName = "Lovelace";

//  Only change code below this line 
lastNameLength = lastName.length;


 // Setup 
const lastName1 = "Lovelace";

 // Only change code below this line 
const thirdLetterOfLastName = lastName1[2]; 

 // Setup 
const lastName2 = "Lovelace";

 // Only change code below this line 
const lastLetterOfLastName = lastName2[lastName2.length-1]; // Change this line

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1]; 
 

 // Setup 
const myArray1 = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray1.push(["dog", 3]);


 // Setup 
const myArray2 = [["John", 23], ["cat", 2]];
const removedFromMyArray2 = myArray2.pop();

 // Setup 
const myArray3 = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray3.shift();

 // Setup 
const myArray4 = [["John", 23], ["dog", 3]];
myArray4.shift();
myArray4.unshift( ["Paul", 35]);




function myLocalScope() {
// Only change code below this line
let myVar;

console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
// console.log('outside myLocalScope is undefined ', myVar === undefined);

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
// Only change code below this line
const outerWear = "sweater"
// Only change code above this line
return outerWear;
}

myOutfit();

// Setup
let sum = 0;

function addThree() {
sum = sum + 3;
}

// Only change code below this line
function addFive(){
sum += 5;
}

// Only change code above this line

addThree();
addFive();

// Setup
let processed = 0;

function processArg(num) {
return (num + 3) / 5;
}

// Only change code below this line
processArg(7);
processed = processArg(7);

//  Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

// Add the number to the end of the array, then remove the first element of the array.

// The nextInLine function should then return the element that was removed. 


function nextInLine(arr, item) {
// Only change code below this line
arr.push(item);
item = arr.shift();
return item;
// Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function trueOrFalse(wasThatTrue) {
// Only change code below this line
if (wasThatTrue){
return "Yes, that was true";
}
return "No, that was false";


// Only change code above this line

}

// Setup
function testEqual(val) {
  if (val==12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);


function testLogicalAnd(val) {
  // Only change code below this line

  if ( val >=25 && val<=50) {
      return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

function testLogicalOr(val) {
  // Only change code below this line

  if (val <10 || val >20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch(val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
}

  // Only change code above this line
  return answer;
}

caseInSwitch(1);

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case "a":
    answer = "apple";
    break;
  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    answer = "stuff";
}
  // Only change code above this line
  return answer;
}

switchOfStuff(1);

function chainToSwitch(val) {
let answer = "";
// Only change code below this line

switch(val) {
case "bob":
answer = "Marley";
break;
case 42:
answer = "The Answer";
break;
case 1:
answer = "There is no #1";
break;
case 99:
answer = "Missed me by this much!";
break;
case 7:
answer = "Ate Nine";
break;
}

// Only change code above this line
return answer;
}

chainToSwitch(7);


function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
}

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);
console.log(abTest(-2, 2));


