
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
  
switch(card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count ++;
    break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
    count --; 
    break;
  }
  if ( count > 0){
    return count + " Bet";
  } else {
    return count + " Hold";
  }
 
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(10, 'J', 'Q', 'K', 'A'));



const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};


const playerNumber = 16;  
const player = testObj[playerNumber];   


function phoneticLookup(val) {
  let result = "";

  let lookup = {
   "alpha":"Adams",
   "bravo":"Boston",
   "charlie":"Chicago",
   "delta":"Denver",
   "echo":"Easy",
   "foxtrot":"Frank"
  }
  
  result = lookup[val];
  return result;
}

console.log(phoneticLookup("bravo")); 


function checkObj(obj, checkProp) {

  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } return "Not Found";
}

checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" });
console.log(checkObj("gift", "pony"));

const myMusic = [
   {
     artist:"Bob Marley",
     title: "Song",
     release_year: 1290,
     formats: [
       "CD",
       "8T",
       "LP"
     ]

   },
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside['glove box'];

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop != tracks || value != ''){
    prop = value;
  } 
  if (prop == tracks && id.hasOwnProperty(tracks) == false) {
    let arr = new Array();
    arr.push(value);
  }
  if (prop == tracks || value !== "") {
    recordCollection.id.tracks[-1].push(value);
  } else if (value === "") {
    pop(prop);
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');