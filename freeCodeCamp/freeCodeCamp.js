let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;

const lastName1 = "Lovelace";

const thirdLetterOfLastName = lastName1[2];

const lastName2 = "Lovelace";

const lastLetterOfLastName = lastName2[lastName2.length - 1];

const myArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

const myArray1 = [
	["John", 23],
	["cat", 2],
];

myArray1.push(["dog", 3]);

const myArray2 = [
	["John", 23],
	["cat", 2],
];
const removedFromMyArray2 = myArray2.pop();

const myArray3 = [
	["John", 23],
	["dog", 3],
];
const removedFromMyArray = myArray3.shift();

const myArray4 = [
	["John", 23],
	["dog", 3],
];
myArray4.shift();
myArray4.unshift(["Paul", 35]);

function myLocalScope() {
	let myVar;

	console.log("inside myLocalScope", myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
// console.log('outside myLocalScope is undefined ', myVar === undefined);

const outerWear = "T-Shirt";

function myOutfit() {
	const outerWear = "sweater";

	return outerWear;
}

myOutfit();

let sum = 0;

function addThree() {
	sum = sum + 3;
}

function addFive() {
	sum += 5;
}

addThree();
addFive();

let processed = 0;

function processArg(num) {
	return (num + 3) / 5;
}

processArg(7);
processed = processArg(7);

//  Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

// Add the number to the end of the array, then remove the first element of the array.

// The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
	arr.push(item);
	item = arr.shift();
	return item;
}

let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function trueOrFalse(wasThatTrue) {
	if (wasThatTrue) {
		return "Yes, that was true";
	}
	return "No, that was false";
}

function testEqual(val) {
	if (val == 12) {
		return "Equal";
	}
	return "Not Equal";
}

testEqual(10);

function testLogicalAnd(val) {
	if (val >= 25 && val <= 50) {
		return "Yes";
	}

	return "No";
}

testLogicalAnd(10);

function testLogicalOr(val) {
	if (val < 10 || val > 20) {
		return "Outside";
	}

	return "Inside";
}

testLogicalOr(15);

function caseInSwitch(val) {
	let answer = "";

	switch (val) {
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

	return answer;
}

caseInSwitch(1);

function switchOfStuff(val) {
	let answer = "";

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

	return answer;
}

switchOfStuff(1);

function chainToSwitch(val) {
	let answer = "";

	switch (val) {
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

let count = 0;

function cc(card) {
	switch (card) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			count++;
			break;
		case 10:
		case "J":
		case "Q":
		case "K":
		case "A":
			count--;
			break;
	}
	if (count > 0) {
		return count + " Bet";
	} else {
		return count + " Hold";
	}
}
// OBJECTS

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
console.log(cc(10, "J", "Q", "K", "A"));

const testObj = {
	12: "Namath",
	16: "Montana",
	19: "Unitas",
};

const playerNumber = 16;
const player = testObj[playerNumber];

function phoneticLookup(val) {
	let result = "";

	let lookup = {
		alpha: "Adams",
		bravo: "Boston",
		charlie: "Chicago",
		delta: "Denver",
		echo: "Easy",
		foxtrot: "Frank",
	};

	result = lookup[val];
	return result;
}

console.log(phoneticLookup("bravo"));

function checkObj(obj, checkProp) {
	if (obj.hasOwnProperty(checkProp)) {
		return obj[checkProp];
	}
	return "Not Found";
}

checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" });
console.log(checkObj("gift", "pony"));

const myMusic = [
	{
		artist: "Bob Marley",
		title: "Song",
		release_year: 1290,
		formats: ["CD", "8T", "LP"],
	},
	{
		artist: "Billy Joel",
		title: "Piano Man",
		release_year: 1973,
		formats: ["CD", "8T", "LP"],
		gold: true,
	},
];

const myStorage = {
	car: {
		inside: {
			"glove box": "maps",
			"passenger seat": "crumbs",
		},
		outside: {
			trunk: "jack",
		},
	},
};

const gloveBoxContents = myStorage.car.inside["glove box"];

const myPlants = [
	{
		type: "flowers",
		list: ["rose", "tulip", "dandelion"],
	},
	{
		type: "trees",
		list: ["fir", "pine", "birch"],
	},
];

const secondTree = myPlants[1].list[1];

// Setup
const recordCollection = {
	2548: {
		albumTitle: "Slippery When Wet",
		artist: "Bon Jovi",
		tracks: ["Let It Rock", "You Give Love a Bad Name"],
	},
	2468: {
		albumTitle: "1999",
		artist: "Prince",
		tracks: ["1999", "Little Red Corvette"],
	},
	1245: {
		artist: "Robert Palmer",
		tracks: [],
	},
	5439: {
		albumTitle: "ABBA Gold",
	},
};

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   if (prop != tracks || value != ''){
//     prop = value;
//   }
//   if (prop == tracks && id.hasOwnProperty(tracks) == false) {
//     let arr = new Array();
//     arr.push(value);
//   }
//   if (prop == tracks || value !== "") {
//     recordCollection.id.tracks[-1].push(value);
//   } else if (value === "") {
//     pop(prop);
//   }
//   return records;
// }

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');

const descendingArray = [];
let i = 5;

while (i >= 0) {
	descendingArray.push(i);
	i--;
}
console.log(descendingArray);

const increasingArray = [];
for (let i = 0; i < 6; i++) {
	increasingArray.push(i);
}
console.log(increasingArray);

const oddIncreasingArray = [];
for (let i = 1; i < 10; i += 2) {
	oddIncreasingArray.push(i);
}
console.log(oddIncreasingArray);

const oddDescendingArray = [];
for (let i = 9; i > 0; i -= 2) {
	oddDescendingArray.push(i);
}
console.log(oddDescendingArray);

const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
	total += myArr[i];
	console.log(total);
}

function multiplyAll(arr) {
	let product = 1;

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			product *= arr[i][j];
			console.log(product);
		}
	}

	return product;
}

multiplyAll([
	[1, 2],
	[3, 4],
	[5, 6, 7],
]);
console.log(
	multiplyAll([
		[1, 2],
		[3, 4],
		[5, 6, 7],
	])
);

const newArray = [];
let a = 10;

do {
	myArray.push(a);
	a++;
} while (a < 5);

console.log(myArray);

// RECURSION (sum value from arr)
function newSum(arr, n) {
	return n <= 0 ? 0 : newSum(arr, n - 1) + arr[n - 1];
}

console.log(newSum([2, 3, 4], 1));

// recursion (find 3!)
function fact(n) {
	return n <= 0 ? 1 : n * fact(n - 1);
}
console.log(fact(3));

// Profile Lookup
const contacts = [
	{
		firstName: "Akira",
		lastName: "Laine",
		number: "0543236543",
		likes: ["Pizza", "Coding", "Brownie Points"],
	},
	{
		firstName: "Harry",
		lastName: "Potter",
		number: "0994372684",
		likes: ["Hogwarts", "Magic", "Hagrid"],
	},
	{
		firstName: "Sherlock",
		lastName: "Holmes",
		number: "0487345643",
		likes: ["Intriguing Cases", "Violin"],
	},
	{
		firstName: "Kristian",
		lastName: "Vos",
		number: "unknown",
		likes: ["JavaScript", "Gaming", "Foxes"],
	},
];

function lookUpProfile(name, prop) {
	for (let i = 0; i < contacts.length; i++) {
		// loop through arrays
		if (contacts[i].firstName === name) {
			if (contacts[i].hasOwnProperty(prop)) {
				return contacts[i][prop]; // what is the difference between contacts[i][prop] and contacts[i]["prop"] ?
			} else {
				return "No such property";
			}
		}
	}
	return "No such contact";
}

lookUpProfile("Akira", "likes");

function randomFraction() {
	return Math.random();
}
console.log(randomFraction());

function randomWholeNum() {
	return Math.floor(Math.random() * 10); // return random whole number between 0 and 9 (10 won't be included)
}

function randomRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomRange());

function convertToInteger(str) {
	return parseInt(str); // converts an int to str
}

convertToInteger("56");

function convertToInteger(str) {
	return parseInt(str, 2); // base = 2 means it is a binary number
}

convertToInteger("10011");

// RECURSION countup

function countup(n) {
	if (n < 1) {
		return [];
	} else {
		let downArray = countup(n - 1);
		downArray.push(n);
		return downArray;
	}
}
console.log(countup(2)); // [1,2]

// recursion find a factorial n!
function fact(n){
	if(n<=1){
		
		return 1;
	} else {
		n * fact(n-1); //  n =3; 3-1 =2, 
					   //   n=2; 2-1 =1,
					   //  n=1; 
					   // 1*2=2
					   // 2*3 =6
	}

}
console.log(fact(3));

// recursion countdown [5,4,3,2,1]
function countdown(n){
  if (n < 1) {
	// debugger
    return [];
  } else {
	// debugger
    const output = [n];
    return output.concat(countdown(n - 1));
  }
}
console.log(countdown(5));

// recursion create an array with the numbers in range from startNum to endNum
function rangeOfNumbers(startNum, endNum) {
  if(startNum === endNum){
  return [startNum];
  } else {
    return rangeOfNumbers(startNum, endNum - 1).concat([endNum])
  }
};
console.log(rangeOfNumbers(1, 5)); // [1,2,3,4,5]


function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i); //Block scope i is: block scope
  }
  console.log('Function scope i is: ', i); // Function scope i is: function scop
  return i;
}

