// 1 - reverseArray()

// Using the forEach method
const reverseArray = arr => {
    let reversed = [];
    arr.forEach(item => {
        reversed.unshift(item);
    });
    return reversed;
};

// Alternate solutions:
// Using the .unshift() method
/* const reverseArray = arr => {
    let reversed = [];
    for (let i = 0; i < arr.length; i++) {
        reversed.unshift(arr[i]);
    }
    return reversed
}
// As a function declaration:
   function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
} */

// const sentence = ["sense.", "make", "all", "will", "This"];
console.log(reverseArray(sentence));

// 2 - greetAliens()

const greetAliens = (arr) => {
    for (const str of arr) {
        console.log(
            `Oh powerful ${str}, we humans offer our unconditional surrender!`
        );
    }
};

// const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

// 3 - convertToBaby()

const convertToBaby = arr => {
    const baby = "baby";
    let concat = [];
    arr.forEach((str) => {
        return concat.push(baby.concat(" ", str));
    });
    return concat;
};

// const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];
// console.log(convertToBaby(animals));

// Alternate solution:
const convertToBaby = arr => {
    const babyArray = [];
    for (let i = 0; i < arr.length; i++) {
        babyArray.push('baby ' + arr[i]);
    }
    return babyArray
}
/*
// As a function declaration:
function convertToBaby(arr) {
    const babyArray = [];
    for (let i = 0; i < arr.length; i++) {
          babyArray.push('baby ' + arr[i]);
    }
    return babyArray
}

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) */

// 4 - declineEverything() and acceptEverything()

// const veggies = ["broccoli", "spinach", "cauliflower", "broccoflower"];

const politelyDecline = veg => {
    console.log("No " + veg + " please. I will have pizza with extra cheese.");
};

const declineEverything = arr => {
    arr.forEach(politelyDecline);
};

const acceptEverything = arr => {
    arr.forEach(item => {
        return console.log(`Ok, I guess I will eat some ${item}.`);
    });
};

// 5 - squareNums()

// const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = num => num * num;

const squareNums = arr => {
    return arr.map(num => toSquare(num));
};

// Alternate solution: 
/* function squareNums(arr) {
  const sqrt = [];
  for (i = 0; i < arr.length; i++) {
    sqrt.push(arr[i] * arr[i]);
  }
  return sqrt;
} */

// 6 - shoutGreetings()

const shoutGreetings = arr => {
    return arr.map(str => str.toUpperCase() + "!");
};

// const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
// console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

// 7 - sortYears()
/* Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays. */

const sortYears = arr => arr.sort((x, y) => y - x);

/*
// As a function declaration AND using a named function:
function sortYears(arr) {
      const checkYears = (year1, year2) => year2 - year1
      return arr.sort(checkYears)
}
*/

// const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];
// console.log(sortYears(years));

// 8 - justCoolStuff()
/* Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays. */



const justCoolStuff = (firstArray, secondArray) =>
    firstArray.filter((item) => secondArray.includes(item));

/*
// Alternate solution:
// As a function declaration AND using named function w/ a loop:
function justCoolStuff(firstArray, secondArray) {
      function isInSecondArray(item){
            for(let i = 0; i<secondArray.length; i++){
                  if (secondArray[i] === item){
                        return true
                  }
            }
            return false
      }
      return firstArray.filter(isInSecondArray)
}
*/

/* const coolStuff = [
  "gameboys",
  "skateboards",
  "backwards hats",
  "fruit-by-the-foot",
  "pogs",
  "my room",
  "temporary tattoos",
];

const myStuff = [
  "rules",
  "fruit-by-the-foot",
  "wedgies",
  "sweaters",
  "skateboards",
  "family-night",
  "my room",
  "braces",
  "the information superhighway",
]; */

// console.log(justCoolStuff(myStuff, coolStuff));

// 9 - isTheDinnerVegan()
/* Write a function isTheDinnerVegan() that takes in an array of food objects in the format:
{name: 'cabbage', source: 'plant' }
and returns a boolean value based on whether or not every item in the array has entirely plant-based origins. */

const isTheDinnerVegan = (arr) => arr.every((food) => food.source === "plant");

/*
const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false
*/

// 10 - sortSpeciesByTeeth()
/* Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:
{speciesName: 'shark', numTeeth: 50 }
and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) */

/* const speciesArray = [
    { speciesName: "shark", numTeeth: 50 },
    { speciesName: "dog", numTeeth: 42 },
    { speciesName: "alligator", numTeeth: 80 },
    { speciesName: "human", numTeeth: 32 },
]; */

const sortSpeciesByTeeth = (arr) => arr.sort((a, b) => a.numTeeth > b.numTeeth);

/* console.log(sortSpeciesByTeeth(speciesArray))

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ] */

// 11 - findMyKeys()
/* Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'. If the keys are in the array, your function should return the index at which they can be found. If they’re not in the array, your function should return -1 */

const findMyKeys = (arr) => {
    if (arr.includes("keys")) {
        return arr.indexOf("keys");
    }
    return -1;
};

/*
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
console.log(findMyKeys(randomStuff))
// Should print 4
*/

// 12 - dogFactory()

const dogFactory = (name, breed, weight) => {
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name() {
            return this._name;
        },
        set name(newName) {
            this._name = newName;
        },
        get breed() {
            return this._breed;
        },
        set breed(newBreed) {
            this._breed = newBreed;
        },
        get weight() {
            return this._weight;
        },
        set weight(newWeight) {
            this._weight = newWeight;
        },
        bark() {
            return "ruff! ruff!";
        },
        eatTooManyTreats() {
            this.weight++;
        },
    };
};

// 13 - factorial()
/* Write a function factorial() that takes a number as an argument and returns the factorial of the number. */

const factorial = num => {
    let val = 1;
    for (let i = 2; i <= num; i++)
        val = val * i;
    return val;
}

// 14 - subLength()
/* Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0. */

const subLength = (str, char) => {
    let strChars = str.toLowerCase().split(""),
        found = [],
        length = 0;
    strChars.forEach((val, index) => {
        if (val === char) {
            found.push(index);
        }
    });
    if (found.length != 2) {
        return length;
    }
    return str.slice(found[0], found[1]).length + 1;
}

// 15 - groceries()
/* Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.
Example:
groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni' */

const groceries = list => {
    let listString = ''

    for (let i = 0; i < list.length; i++) {
        listString += list[i].item;
        if (i < list.length - 2) {
            listString += ', ';
        } else if (i == list.length - 2) {
            listString += ' and ';
        }
    }
    return listString;
}