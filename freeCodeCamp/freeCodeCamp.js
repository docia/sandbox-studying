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
function fact(n) {
	if (n <= 1) {
		return 1;
	} else {
		n * fact(n - 1); //  n =3; 3-1 =2,
		//   n=2; 2-1 =1,
		//  n=1;
		// 1*2=2
		// 2*3 =6
	}
}
console.log(fact(3));

// recursion countdown [5,4,3,2,1]
function countdown(n) {
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
	if (startNum === endNum) {
		return [startNum];
	} else {
		return rangeOfNumbers(startNum, endNum - 1).concat([endNum]);
	}
}
console.log(rangeOfNumbers(1, 5)); // [1,2,3,4,5]

function checkScope() {
	let i = "function scope";
	if (true) {
		let i = "block scope";
		console.log("Block scope i is: ", i); //Block scope i is: block scope
	}
	console.log("Function scope i is: ", i); // Function scope i is: function scop
	return i;
}

const s = [5, 7, 2];
function editInPlace() {
	s[0] = 2;
	s[1] = 5;
	s[2] = 7;
}
editInPlace(); // [2,5,7]

function freezeObj() {
	const MATH_CONSTANTS = {
		PI: 3.14,
	};
	// Only change code below this line
	Object.freeze(MATH_CONSTANTS);

	// Only change code above this line
	try {
		MATH_CONSTANTS.PI = 99;
	} catch (err) {
		console.log(err);
	}
	return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(freezeObj());
// [TypeError: Cannot assign to read only property 'PI' of object '#<Object>']
// [TypeError: Cannot assign to read only property 'PI' of object '#<Object>']
// 3.14

var magic = function () {
	return new Date();
};
// is simpified to ->
const newMagic = () => new Date();

const doubler = (item) => item * 2;
console.log(doubler(4)); // 8

const increment = (number, value = 1) => number + value;
console.log(increment(1)); // 1+1=2
console.log(increment(1, 3)); // 1+3=4

const pupils = [
	{ name: "Sarah", age: 12, grade: 5, mark: 12 },
	{ name: "Dean", age: 15, grade: 6, mark: 5 },
	{ name: "Bob", age: 8, grade: 4, mark: 7 },
	{ name: "Klara", age: 10, grade: 3 },
	{ name: "Markus", age: 19, grade: 10, mark: 9 },
];
const newPupilsAge = pupils.map((person) => person.age + 1); // map() - modify a current array in a new one by modifying all the values in an array
console.log(newPupilsAge);

const excellentPupils = pupils.filter((person) => person.mark > 6); // filters for pupils whose marks over 6
console.log(excellentPupils);

const totalMark = pupils.reduce((total, person) => total + person.mark, 0); // with each iterration "person" the previousValue
// "total" modifies with the iterrated value "person.mark". 0 - default number.
console.log(totalMark); // sum(12,5,7,3,9)

const newPupilsArr = pupils.filter(({ age }) => age > 9); // 1) filter for pupils with age >10
// .map(pupil => ({
// 	nickname: pupil.name + " yo"
// }))
// .map(pupil => {
// 	pupil['nickname'] = pupil.name + " yo"

// 	return pupil;
// });
// .map(pupil => ({ ...pupil, nickname: `${pupil.name}-yo` }));
// console.log(newPupilsArr);
// .map(({name, ...rest}) => rest);

//----------------------
// DESTRUCTURING example

// .map(pupil => {
// 	const { name, ...rest } = pupil;

// 	return rest;
// });

// 	/**
// 	 * DESTRUCTURING looks clean and easy!
// 	 */
// .map(pupil => {
// 	const { name, age, grade, mark = 1  } = pupil;

// 	const transformedPupil = {
// 		name,
// 		age,
// 		grade,
// 		transformedMark: mark * 15
// 	}

// 	return transformedPupil;
// });
// console.log(newPupilsArr);

//----------------------
//  Spread, rest example

// .map(({ mark = 1, ...rest }) => ({
// 	...rest,
// 	transformedMark: mark * 15,

// }))
//----------------------
// .map(value => ({
// 	age: value.age + 5,
// 	...value,
// }))

// console.log(newPupilsArr);

// const arr1 = [1,2,3]
// const arr2 = [4,5,6]

// console.log(arr1, arr2)

// const commonArr = [...arr1, ...arr2]
// console.log('commonArr', commonArr)

// const car = { color: 'black', width: 2, height: 2, price: 40000 }

// // const price = car.price;
// const { price, ...rest } = car;

// console.log('car full: ', car)
// console.log('car other: ', rest)

const totalSum = (...args) => {
	return args.reduce((a, b) => a + b, 0);
};
console.log(totalSum(1, 2, 3, 4)); //10

const LOCAL_FORECAST = {
	yesterday: { low: 61, high: 75 },
	today: { low: 64, high: 77 },
	tomorrow: { low: 68, high: 80 },
};

const {
	today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;
console.log(highToday); // 77

//----------------------

// let salaries = {
// 	John: 100,
// 	Pete: 300,
// 	Mary: 250,
// };

// function topSalary(salaries) {
// 	return Object.keys(salaries).reduce(
// 		(max, s) => (salaries[max] > salaries[s] ? max : s),
// 		""
// 	);
// }
// alert(topSalary(salaries)); // Pete

//----------------------

// let prices = {
// 	banana: 1,
// 	orange: 2,
// 	meat: 4,
// };

// let doublePrices = Object.fromEntries(
// 	// перетворює масив [[banana],[1]] назад в об’єкт banana: 1
// 	// перетворити ціни на масив, потім застосувати map, щоб перетворити на пари ключ/значення
// 	// а потім fromEntries повертає об’єкт
// 	Object.entries(prices).map((entry) => [entry[0], entry[1] * 2]) //
// );

// alert(doublePrices.meat); // 8

//----------------------

// const stats = {
// 	max: 56.78,
// 	standard_deviation: 4.34,
// 	median: 34.54,
// 	mode: 23.87,
// 	min: -0.75,
// 	average: 35.85,
// };

// const half = ({ max, min }) => (max + min) / 2; // destructuring
// console.log(half(stats)); // 28.015

// //----------------------

// const result = {
// 	success: ["max-length", "no-amd", "prefer-arrow-functions"],
// 	failure: ["no-var", "var-on-top", "linebreak"],
// 	skipped: ["no-extra-semi", "no-dup-keys"],
// };
// function makeList(arr) {
// 	const failureItems = arr.map((item) => `<li class="text-warning">${item}</li>`);
// 	// iteration by item through failure

// 	return failureItems;
// }

// const failuresList = makeList(result.failure);
// // output:
// //<li class="text-warning">no-var</li>,
// //<li class="text-warning">var-on-top</li>,
// //<li class="text-warning">linebreak</li>

// //----------------------

// // EXCERSISES map()
//  function doubleNumbers(arr){
// 	return arr.map(i => i*2);
// }

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// //1----------------------
// function stringItUp(arr){
//   return arr.map(i => i.toString());
// }

// console.log(stringItUp([2, 5, 100]))

// //2----------------------
// function capitalizeNames(arr){
// 	return arr.map(i => i[0].toUpperCase()+i.slice(1).toLowerCase());
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// //3----------------------
// function namesOnly(arr){
// 	return arr.map(({nick}) => nick); // === arr.map(item => item.nick);
// }

// console.log(namesOnly([
//     {
//         nick: "Angelina Jolie",
//         age: 80
//     },
//     {
//         nick: "Eric Jones",
//         age: 2
//     },
//     {
//         nick: "Paris Hilton",
//         age: 5
//     },
//     {
//         nick: "Kayne West",
//         age: 16
//     },
//     {
//         nick: "Bob Ziroll",
//         age: 100
//     }
// ]));

// function doubleArrayNames(arr) {
// 	// return arr.map(innerArr =>  innerArr.map(item => item.nick)).flat()
// 	// return arr.flat().map(item => item.nick)
// 	return arr.reduce((acc, innerArr) => {
// 		innerArr.forEach(item => acc.push(item.nick))

// 		return acc;
// 	}, [])
// }

// const dobuleArray = [[
//     {
//         nick: "Angelina Jolie",
//         age: 80
//     },
//     {
//         nick: "Eric Jones",
//         age: 2
//     },
// ],
// [
//     {
//         nick: "Paris Hilton",
//         age: 5
//     },
//     {
//         nick: "Kayne West",
//         age: 16
//     },
// ],
// [
//     {
//         nick: "Bob Ziroll",
//         age: 100
//     }
// ]];

// console.log(doubleArrayNames(dobuleArray))

// console.log(dobuleArray)
// console.log(dobuleArray.flat()) /// ['Angelina Jolie', 'Eric Jones', 'Paris Hilton', 'Kayne West', 'Bob Ziroll']

//4----------------------
function makeStrings(arr) {
	return arr.map(({ newName, age }) =>
		age >= 80 ? `${newName} can go to The Matrix` : `${newName} is under age!!`
	);
}

console.log(
	makeStrings([
		{
			newName: "Angelina Jolie",
			age: 80,
		},
		{
			newName: "Eric Jones",
			age: 2,
		},
		{
			newName: "Paris Hilton",
			age: 5,
		},
		{
			newName: "Kayne West",
			age: 16,
		},
		{
			newName: "Bob Ziroll",
			age: 100,
		},
	])
);
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

//5----------------------
function readyToPutInTheDOM(arr) {
	// return arr.map(item => `<h1>${item.name}</h1><h2>${item.age}</h2>`);
	return arr.map(
		({ name: namee, age: agee }) => `<h1>${namee}</h1><h2>${agee}</h2>`
	); // with destructing
}
console.log(
	readyToPutInTheDOM([
		{
			name: "Angelina Jolie",
			age: 80,
		},
		{
			name: "Eric Jones",
			age: 2,
		},
		{
			name: "Paris Hilton",
			age: 5,
		},
		{
			name: "Kayne West",
			age: 16,
		},
		{
			name: "Bob Ziroll",
			age: 100,
		},
	])
);
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

//  const sumSalaries = ({key}) => salaries.reduce((sum, person) => sum + person[key], 0);
// console.log(sumSalaries(salaries));

function sumSalaries(obj) {
	sum = 0;
	for (let key in obj) {
		sum += obj[key];
	}
	return sum;
}

function sumSalaries2(people) {
	return Object.values(people).reduce((sum, salary) => sum + salary, 0);
	// return Object.entries(people).reduce((sum, person) => sum + person[1], 0)
}

console.log(sumSalaries2(salaries));

let menu = {
	width: 200,
	height: 300,
	title: "Моє меню",
};

const multiplyValues = ({ width, height, title }) => {
	const changedValues = {
		width: width * 2,
		height: height * 2,
		title,
	};
	return changedValues;
};

console.log(multiplyValues(menu));

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }
