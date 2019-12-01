// start with strings, numbers and booleans
// number
let year = 2019;
let thisYear = year;
year = 1999;

console.log(year, thisYear);

// string
let greeting = 'hello';
let greetAgain = greeting;
greetAgain = 'hi';

console.log(greeting, greetAgain);

// boolean
let isTrue = true;
let itsTrue = isTrue;
itsTrue = false;

console.log(isTrue, itsTrue);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(team);

// You might think we can just do something like this:
// however what happens when we update that array?
// team[0] = 'John';
// console.log(team, players)

// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. 
// They both point to the same array!
// So, how do we fix this? We take a copy instead!
// one way
const copyArr1 = players.slice();

// or create a new array and concat the old one in
const copyArr2 = [].concat(players);

// or use the new ES6 Spread
const copyArr3 = [...players];

const copyArr4 = Array.from(players);

copyArr1[0] = 'hello';
copyArr2[0] = 'hey';
copyArr3[0] = 'ho';
copyArr4[0] = 'oook';

console.log(copyArr1, copyArr2, copyArr3, copyArr4, players);
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
// how do we take a copy instead?
const copyObj1 = Object.assign({}, person);
copyObj1.name = 'nono';

const copyObj2 = Object.assign({}, person, { number: 99 });

console.log(copyObj1, copyObj2, person);

// We will hopefully soon see the object ...spread
// const copyObj3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects. 
// lodash has a cloneDeep method, but you should think twice before using it.
const cat = {
  name: 'huchu',
  age: 5,
  siblings: {
    brother: 'nabi',
    sister: 'tux'
  }
}

const cat2 = JSON.parse(JSON.stringify(cat));
cat2.siblings.brother = 'hoho';

console.log(cat, cat2);
