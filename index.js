// index.js
//
// node style require() statements
// var moment = require('moment');
// use ES2015 import statement instead
import moment from 'moment';
import dompurify from 'dompurify';
import { apiKey, apiVendors, sayWhatUp } from './src/config';
import User, { createURL, gravatar } from './src/user';

/* eslint-disable */


// MODULE CREATION EXERCISES
// MODULE CREATION EXERCISES
// MODULE CREATION EXERCISES
console.log(apiKey, apiVendors);
sayWhatUp();

// here we create a new object named jakee
// from the function User imported from user.js
// User() is a function that accepts 3 parameters
//  and returns an Object with 3 properties
//  we then use our new jakee Object to call
//  other functions passing values to them
const jakee = new User('Jake Salazarr', 'jake.salazar@gmail.com', 'jakesalazar.com');
console.log(jakee);

const jakeeURL = createURL(jakee.name);
const jakeeGravatar = gravatar(jakee.email);
console.log(jakeeURL);
console.log(jakeeGravatar);





console.log('Hello JAKE!');
console.log(moment().startOf('day').fromNow());

const herName = 'Ana Maria Ruiz';
const time = 'today';
console.log(`Hello ${herName}, how are you ${time}?`);


// ========================================
// VARIABLES
// var and let and const
// let and const create '{}' block scope
// you cannot access a variable until it is declared/defined

// LET
// let variable values can be updated
// unlike var, you cannot redeclare let and const variables
// hence, you cannot use the same variable name more than once

// CONST
// const variable values cannot be updated once declared
// properties of a const variable OBJECT CAN be changed

// create an object using const
// if you want to make the properties of
// a const object immutable, apply Object.freeze(person)
// const jake = Object.freeze(person);
const person = {
  name: 'Jake',
  age: 44,
  favColor: 'blue',
};


const taco = {
  ingredients: ['beef', 'chicken', 'fish'],
  tacoName: [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
  ],
  tortilla: 'flour',
  makeTaco: function() {
    // alert('..taco has been made...');
  },
  cheese: 'cheddar',
};

console.log('Ingredients: ' + taco.ingredients[0]);
console.log('taco names:: ' + taco.tacoName[2][2]);
console.log('MAKE TACO: ' + taco.makeTaco());


console.log('person name: ' + person.name);

const alien = person;
console.log('alien name: ' + alien.name);

alien.name = 'Rafael';
console.log('new alien name: ' + alien.name);

// apply freeze and it should complain
// const alien2 = Object.freeze(person);
// alien2.name = 'Rafael';
// console.log('alien name: ' + alien2.name);


// you can't use const in a loop because the value requires updating
for (let a = 0; a < 10; a++) {
  console.log(a);
  setTimeout(() => {
    // console.log('the value is ' + a);
  }, 1000);
}


// =======================================================
// ARROW FUNCTIONS
// arrow functions are always anonymous functions,
// BUT you can name them if you want

// when NOT to use arrow functions (usual solution: just use a regular anonymous function instead)
//  - when you really need 'this'
//  (reason: unless properly scoped, it may inherit 'this' from somewhere else)
//  - when you need a method to bind to an object (reason: lose access to block scoped 'this')
//  - when you need to add a prototype method (reason: lose access to 'this' - )

const familyNames = ['jake', 'ana', 'marina', 'gabriela'];

const fullFamilyNames = familyNames.map(function(name) {
    return `${name} salazar`;
});

// same as above using an arrow functions
const fullFamilyNames2 = familyNames.map((name) => {
    return `${name} salazar`;
});
// using an arrow functions WITHOUT parenthesis
const fullFamilyNames3 = familyNames.map(name => {
    return `${name} salazar`;
});
// using an arrow functions with implicit return (not explicit return)
// you can remove the braces
// you can remove the return statement
const fullFamilyNames4 = familyNames.map((name) => `${name} salazar`);

// using an arrow functions without argurments
const fullFamilyNames5 = familyNames.map(() => `awesome SALAZAR`);

console.log(fullFamilyNames4);

// arrow function as a NAMED Function format
const sayMyName = (name) => {
    console.log(`Hello ${name}!`)
};
sayMyName('Jakester');



// arrow functions passing Object literals back
//
const race = '100m Dash';
const winners = ['Jake', 'Ana', 'Marina', 'Gabriela'];

const theFinish = winners.map((winner, i) => ({
  name: winner, race: race, place: i + 1
}));

console.log(theFinish);


// another example of arrow functions
const ages = [12, 23, 44, 33, 66, 55, 77, 88, 21, 81, 11, 29];

// create another object of values based on a filter
const olderThan33 = ages.filter(age => age >= 33);
console.log(olderThan33);


// handler for box animation
// need to put this inside window.onload so webpack/babel don't complain
window.onload = function() {

    const box1 = document.querySelector('.box');
    box1.addEventListener('click', function() {
        let first = 'opening';
        let second = 'open';

        if (this.classList.contains(first)) {
            // destructuring ala ES6
            [first, second] = [second, first];
        }

        this.classList.toggle(first);

        // here we use an arrow function (instead of anon function)because
        // the value of THIS is inherited from parent
        // which is the click handler
        // otherwise, if we use a regular anon function
        // THIS comes from global window parent
        // you dont have to teleport THIS like in old days
        // var that = this; to pass scope around
        // the arrow function in this case create/maintains scope for you
        setTimeout(() => {
            console.log(this);
            this.classList.toggle(second);
        }, 500);

    });

}; // ENDS: window.onload()


// ES6 allows for default argument values
// just define them in the parameters
function calculateBill(total, tax = .08, tip = .20) {
    return total + (total*tax) + (total*tip);
}
//assume our bill is $100
const totalBill = calculateBill(100);
console.log(`Total bill: $${totalBill}`);






// 1. Given this array: `[3,62,234,7,23,74,23,76,92]`,
  // use the array filter method and an arrow function
  // to create an array of the numbers greater than `70`
  const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];

  const numsGreaterThan70 = numbers.filter((number) => number > 70);
  console.log(numsGreaterThan70);






// Select all the list items on the page and convert to array
  const videoList = Array.from(document.querySelectorAll('li'));
  // const items = Array.from(document.querySelectorAll('[data-time]'));

  console.log(videoList);


  // Filter for only the elements that contain the word 'Flexbox'
  const flexboxVideos = videoList.filter(currentName => currentName.textContent.includes('Flexbox'));
  console.log('flex videos: ' + flexboxVideos.length);


  // map down to a list of time strings
  // const videoTimes = videoList.map((videoTime) => videoTime.getAttribute('data-time'));
  // in this version we use the dataset Object; getAttribute is also fine
  const videoTimes = flexboxVideos.map((videoTime) => videoTime.dataset.time);
  console.log(videoTimes);



  // map to an array of seconds
  function minutesToSeconds(min) {
    const timeParts = min.split(':');
    // here we use the unary operator shortcut to convert strings to numbers
    // we can also use Math.floor(timeParts[0]) for similar results
    const singleVideoSeconds = (+timeParts[0] * 60) + +timeParts[1];
    return singleVideoSeconds;
  }
  const videoSeconds = videoTimes.map(minutesToSeconds);
  console.log(videoSeconds);

  // reduce to get total
  // const totalVideoSeconds = videoSeconds.reduce(function(accumulator, theseSeconds) {
  //   return accumulator + theseSeconds;
  // }, 0);

  // using arrow functions
  const totalVideoSeconds = videoSeconds.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log('Total Video Seconds: ' + totalVideoSeconds);



// =======================================================
// TEMPLATE STRINGS
//
const dogName = 'Ranger';
const dogAge = 2;
const dogSentence = `My dog ${dogName} is ${dogAge * 7} years old.`;
console.log(dogSentence);




// create an object literal called dude
// and add its values to an HTML fragment

const dude = {
    name: 'Jake',
    job: 'Web Developer',
    city: 'San Antonio',
    bio: 'Jake is potentially the coolest person on the planet.'
};

const dudeTemplate = `
<div class="dude">
    <h2>${dude.name} <span>${dude.job}</span></h2>
    <p class="city">${dude.city}</p>
    <p class="bio">${dude.bio}</p>
</div>
`;
console.log(dudeTemplate);





// using html fragments and template strings
// to loop over an array of objects

const dogs = [
    {name: 'snickers', age: 2},
    {name: 'hugo', age: 8},
    {name: 'sunny', age: 14}
];

// we add the join() to remove the trailing comma after each list item
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
const dogsMarkup = `
    <ul class="dogs">
        ${dogs.map(dog => `<li>${dog.name} is ${dog.age * 7}</li>`).join('')}
    </ul>
`;
console.log(dogsMarkup);



// using ternary IF statements within HTML fragment
const song = {
    name: 'Dying to Live',
    artist: 'Tupac',
    featuring: 'Biggie Smalls'
};
const songMarkup = `
    <div class="song">
        <p>
            ${song.name} - ${song.artist}
            ${song.featuring ? `Featuring ${song.featuring}` : ``}
        </p>
    </div>
`;
console.log(songMarkup);





// passing functions within template literals
const beer = {
    name: 'Dos XX',
    brewery: 'Steam Whistle Brewery',
    keywords : ['pale', 'cloudy', 'spiced', 'crisp']
};

function renderKeywords(keywords) {
    return `
        <ul>
            ${keywords.map(keyword => `<li>${keyword}</li>`).join('')}
        </ul>
    `;
}

const beerMarkup = `
    <div class="beer">
        <h2>${beer.name}</h2>
        <p class="brewery">${beer.brewery}</p>
        ${renderKeywords(beer.keywords)}
    </div>
`;
console.log(beerMarkup);




// cool - tagged template strings
// I'm calling these a tagged functions
// This means we can run the template string through a function
// and have more control over how the template is converted to string representation.
// in a tagged function the 'strings' argument comes as an array
// and the rest '...' operator values comes as an array
// you can specify the arguments by name, but it is not necessary
function highlightPet(strings, ...values) {
    let str = '';
    strings.forEach((string, i) => {
        // str += string + (values[i] || '');
        str += `${string} <span class="hlight">${values[i] || ''}</span>`;
    });
    return str;
}

const petName = 'Ranger';
const petAge = 100;
const petSentence = highlightPet`My dog's name is ${petName} and he is ${petAge} years old.`;
console.log(petSentence)
document.getElementById('junk').innerHTML = petSentence;







const dict = {
    HTML: 'Hyper Text Markup Language',
    CSS: 'Cascading Style Sheets',
    JS: 'Javascript'
};

function addAbbreviations(strings, ...values) {
    const abbreviated = values.map(value => {
        if(dict[value]) {
            return `<abbr title="${dict[value]}">${value}</abbr>`;
        }
        else {
            return value;
        }
    });

    return strings.reduce((accumulator, currentValue, i) => {
        return `${accumulator}${currentValue}${abbreviated[i] || ''}`;
    }, '');
}

const firstName = 'Jake';
const lastname = 'Salazar';
const dictMarkup = addAbbreviations`Hello my name is ${firstName} ${lastname} and I love to code ${'HTML'}, ${'CSS'} and ${'JS'}.`;

const tempBio = document.querySelector('#junk');
const p = document.createElement('p');
p.innerHTML = dictMarkup;
tempBio.appendChild(p);

console.log(dictMarkup);







// sanitize and purify data withing tagged template literals
function sanitize(strings, ...values) {
    const dirty = strings.reduce((accumulator, currentValue, i) => `${accumulator}${currentValue}${values[i] || ''}`, '');
    return dompurify.sanitize(dirty);
}

const dirtyName = 'Jake';
const dirtyBio = `I love to do evil <img src="http://unsplash.it/100/100?random" onload="alert('you got hacked');">`;

const dirtyMarkup = sanitize`
    <h2>${dirtyName}</h2>
    <p>${dirtyBio}</p>`;

const tempDirtyBio = document.querySelector('#junk');
const bioContainer = document.createElement('p');
bioContainer.innerHTML = dirtyMarkup;
tempDirtyBio.appendChild(bioContainer);
console.log(dirtyMarkup);













// =======================================================
// NEW STRINGS METHODS


const course = 'RFB2';
const flightNumber = '20-AC2018-JZ';
const accountNumber = '825242631RT0001';

// ================================================
// .startsWith()
console.log(course.startsWith('RF'));
//it is not case sensitive
console.log(course.toLowerCase().startsWith('rf'));
// skip first 3 chars
console.log(flightNumber.startsWith('AC', 3));


// ================================================
// .endsWith()
console.log(flightNumber.endsWith('JZ'));
console.log(accountNumber.endsWith('RT', 11));


// ================================================
// .includes()
console.log(flightNumber.includes('JZ'));

// ================================================
// .repeat()
console.log(accountNumber.repeat(5));












// =======================================================
// DESTRUCTURING Assignment Syntax (OBJECTS, ARRAYS, SWAPPING VARIABLES)
// allows you to extract properties, values, elements
// from data structure above and also Maps and Sets

const personOne = {
    first: 'Jake',
    last: 'Salazar',
    country: 'US',
    city: 'San Antonio',
    twitter: '@kodezilla'
};

// old way, grab properies from object by typical variable assignment
// const nFirst = personOne.first;
// const nLast = personOne.last;

// new ES6 way
// this says: create two const variables called first and last
// and get values from person with same properties names
const {first, last} = personOne;

console.log(`${first} ${last}`);



const jake = {
    first: 'Jake',
    last: 'Salazar',
    links: {
      social: {
        twitter: 'https://twitter.com/kodezilla',
        facebook: 'https://facebook.com/jake.developer',
      },
      web: {
        blog: 'https://jakesalazar.com'
      }
    }
  };

// old way
// const twits = jake.links.social.twitter;
// with destructuring
const {twitter, facebook} = jake.links.social;
// you can also rename the variables
// you still provide matches for property names,
// but you new variable names come after the colon
const {twitter:twits, facebook:fb} = jake.links.social;

console.log(fb);

// using default values
// height, fontSize are missing, so we can create default values
// to prevent undefined errors
const settings = { width: 300, color: 'black' }
// we declare the defaults in the const declaration
// if these values dont exist in our settings
// object, the default value created are used
// the values are de-structured from the settings object
const { width = 100, height = 100, color = 'blue', fontSize = 25} = settings;

console.log(fontSize);



// DESTRUCTURING ARRAYS
// when destructuring array, use [] and NOT {} for your variable names

// basic example
const myDetails = ['Jake Salazar', 100, 'jakesalazar.com'];
const [name, id, website] = myDetails;
console.log(name, id, website);

// when dealing with non-array formatted data,
// or unstructured data, you can use some string methods to assist
const randomData = 'Basketball,Sports,78228,23,wes,bos,cool';
const [itemName, category, sku, inventory] = randomData.split(',');
console.log(itemName, category, sku, inventory);


// introduinc the REST operator '...varName'
// when dealing with an unknown number
// of elements/parameters/argurments
// you can pass the '...' rest operator
// to automatically grab everything that follows
const theSquad = ['Wes', 'Harry', 'Sarah', 'Keegan', 'Riker'];
const [captain, assistant, ...players] = theSquad;
console.log(captain, assistant, ...players);




// SWAPPING Variables
// you can swap variable values easily with destructuring

let inRing = 'Hulk Hogan';
let onSide = 'The Rock';

console.log(inRing, onSide);
[inRing, onSide] = [onSide, inRing];
console.log(inRing, onSide);







// destructuring Functions
function convertCurrency(amount) {
    const converted = {
      USD: amount * 0.76,
      GPB: amount * 0.53,
      AUD: amount * 1.01,
      MEX: amount * 13.30
    };
    return converted;
  }
const hundo = convertCurrency(100);
console.log(hundo);
// old way of extracting values from function returning an object
console.log(hundo.MEX);

// using destructuring assignment
const {USD, GPB, AUD, MEX} = convertCurrency(100);
console.log(USD, GPB, AUD, MEX);




// destructuring functions WITH Named defaults listed as parameters
// this expects an object to be passed in
// if no object is passed we have a default object
// passed in with = {}
// remember the same rules for destructuring apply
// to destructuring parameters for a functions
function tipCalc({total = 100, tip = .15, tax = .13} = {}) {
    return total + (tip * total) + (tax * total);
}

// when you call the function, you can
// pass in all or some of the arguments
// if you don't pass in any arguments or no object
// the default destructured assignment is an empty object in the function above
const bill = tipCalc({total: 200, tip: .20, tax: .13});
// const bill = tipCalc();
console.log(bill);









// =======================================================
// ITERABLES & LOOPING

const cuts = ['chuck', 'brisket', 'shank', 'short rib'];

// option 1
for(let i = 0; i < cuts.length; i++) {
    console.log(cuts[i]);
}

// option 2
cuts.forEach((cut) => {
    console.log(cut);
});

// option 3
for(const j in cuts) {
    console.log('BEEF: ' + cuts[j]);
}


// FOR-OF loop options
for(const cut of cuts) {
    // skip disply of brisket
    if(cut === 'brisket') {
        continue;
    }
    console.log('carne: ' + cut);
}

// The entries() method returns a new Array Iterator object
// that contains the key/value pairs for each index in the array.
// You can access the ArrayIterator{}
// by calling entries() on the array you are working with.
// You can apply destructuring assignments using this iterator.

for(const [i, cut] of cuts.entries()) {
    // console.log(cut);
    console.log(`${cut} is the ${i + 1} item.`);
}




// arguments is a special keyword
// arguments returns an array-like object of data
function addUpNumbers() {
    // console.log([1,2,3,4,5]);
    // console.log(arguments);
    let total = 0;
    // let num = 0;

    for(const num of arguments) {
        total += num;
    }

    // const num = arguments.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(total);
    return total;
}
// here we are assuming or passing an unknow number of arguments
addUpNumbers(1,2,3,4,5,6,7,8,4);


//iterating over DOM nodelist
const lis = document.querySelectorAll('li');
for(const listitems of lis) {
    listitems.addEventListener('click', function() {
        console.log(this.textContent);
    });
}



// USING FOR-OF LOOPS WITH OBJECTS
const apple = {
    color: 'Red',
    size: 'Medium',
    weight: 50,
    sugar: 10
  };

for(const prop in apple) {
    const value = apple[prop];
    console.log(value, prop);
}

for(const prop of Object.keys(apple)) {
    let value = apple[prop];
    console.log(value, prop);
  }




// ARRAY FROM & ARRAY TO

// ARRAY-FROM
const theFam = document.querySelectorAll('.people p');
console.log(theFam);

// convert array-like nodelist to array
// Array.from takes a second argument like MAP
const theFamArr = Array.from(theFam, name => {
    return name.textContent;
});
// map out the values for each p element
// const famNames = theFamArr.map((name) => name.textContent);
console.log(theFamArr);



function sumAll() {
  // console.log(arguments);
  const numz = Array.from(arguments);
  return numz.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sumAll(1,2,3,4,5));


// ARRAY-OF
// creates an array-OF data that you pass to it
const famAges = Array.of(1,2,3,4,5);
console.log(famAges);






// ARRAY FIND() & FINDINDEX()
const posts = [
 {
    "code":"BAcyDyQwcXX",
    "caption":"Lunch #hamont",
    "likes":56,
    "id":"1161022966406956503",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg"
 },
 {
    "code":"BAcJeJrQca9",
    "caption":"Snow! ⛄️🌨❄️ #lifewithsnickers",
    "likes":59,
    "id":"1160844458347054781",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg"
 },
 {
    "code":"BAF_KY4wcRY",
    "caption":"Cleaned my office and mounted my recording gear overhead. Stoked for 2016!",
    "likes":79,
    "id":"1154606670337393752",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e35/923995_1704188643150533_1383710275_n.jpg"
 },
 {
    "code":"BAPIPRjQce9",
    "caption":"Making baby pancakes for one early rising baby. ☕️🍴",
    "likes":47,
    "id":"1157179863266871229",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12407480_1654828594805097_152207166_n.jpg"
 },
 {
    "code":"hZh6IQcfN",
    "caption":"New Stickers just came in. I'll do another mailing in a few weeks if you want some. #javascript",
    "likes":66,
    "id":"1126293663140399053",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/11875511_1562439187344831_813588280_n.jpg"
 },
 {
    "code":"B3eiIwcYV",
    "caption":"Tacos for breakfast. I love you Austin. 🇺🇸",
    "likes":33,
    "id":"1117418173361145365",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e35/11917950_927755223968499_1198055371_n.jpg"
 },
 {
    "code":"BAhvZrRwcfu",
    "caption":"Tried poke for the first time at @pokehbar. Delicious! It's like a bowl of sushi",
    "likes":30,
    "id":"1162418651480049646",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e35/12501993_1504179163220771_2060674913_n.jpg"
 },
 {
    "code":"BAAJqbOQcW5",
    "caption":"Brunchin'",
    "likes":40,
    "id":"1152964002473690553",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/1516572_445736812276082_2116173059_n.jpg"
 },
 {
    "code":"_4jHytwcUA",
    "caption":"2015 can be summed up with one baby and a many lines of code. And sometimes a coding baby. 👶🏼⌨",
    "likes":62,
    "id":"1150824171912152320",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e35/10723795_1149927178351091_1859033096_n.jpg"
 },
 {
    "code":"_zbaOlQcbn",
    "caption":"Lekker Chocoladeletter",
    "likes":52,
    "id":"1149382879529256679",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12346073_1035047523184672_768982339_n.jpg"
 },
 {
    "code":"_rmvQfQce8",
    "caption":"Just discovered the #hamont farmers market has a new ramen place! 🍜",
    "likes":35,
    "id":"1147180903383025596",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12331739_1671776806423597_995664526_n.jpg"
 },
 {
    "code":"_ep9kiQcVy",
    "caption":"⛄️",
    "likes":64,
    "id":"1143535906423162226",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12354078_447337935474115_1484398925_n.jpg"
 },
 {
    "code":"_XpJcrwcSn",
    "caption":"6 page spread on flexbox in this months netmag!",
    "likes":74,
    "id":"1141561999742846119",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12362588_1688046211438811_1395882545_n.jpg"
 },
 {
    "code":"_KnU7MwceA",
    "caption":"Hanging out in my office waiting for 5:00 beers to come around.",
    "likes":54,
    "id":"1137894817632733056",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12301208_1533749386944985_1334730917_n.jpg"
 },
 {
    "code":"_HMejJQcY5",
    "caption":"Today I learned that a long pull espresso is called a 'lungo'",
    "likes":18,
    "id":"1136932306813044281",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12357319_493317964181479_310198908_n.jpg"
 },
 {
    "code":"_Fq2zmwcaz",
    "caption":"Awesome hand lettered gift from @eunibae and the HackerYou crew.",
    "likes":48,
    "id":"1136502965197194931",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12317458_1692845870986430_331905833_n.jpg"
 },
 {
    "code":"_A2r0aQcfD",
    "caption":"Some serious hardware meet JavaScript hacks going down this week at hackeryou. Excited for demo day!",
    "likes":57,
    "id":"1135147611821557699",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12276809_750065668431999_184252508_n.jpg"
 },
 {
    "code":"1rhFawccs",
    "caption":"Some major audio upgrades coming to my next videos 😍",
    "likes":39,
    "id":"1132002270913873708",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12331333_1650987978502155_1162510634_n.jpg"
 },
 {
    "code":"pjx-gQcVi",
    "caption":"My baby and me. Thanks to @bearandsparrow for this one.",
    "likes":81,
    "id":"1128590547628442978",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e35/12298962_863814057068027_460827278_n.jpg"
 },
 {
    "code":"oTZ0zQcWt",
    "caption":"It's too early. Send coffee.",
    "likes":81,
    "id":"1128237044221461933",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e35/12328347_990748230999662_1512917342_n.jpg"
 },
 {
    "code":"mxKQoQcQh",
    "caption":"They both have figured it out. #lifewithsnickers",
    "likes":47,
    "id":"1127804966031967265",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/e35/12256736_1758525004381641_1136705181_n.jpg"
 },
 {
    "code":"fasqlQceO",
    "caption":"Kaitlin decorated the house for the Christmas. So gezellig! #casabos",
    "likes":46,
    "id":"1125735850454402958",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e35/12277581_1028556737218368_1184190781_n.jpg"
 },
 {
    "code":"VBgtGQcSf",
    "caption":"Trying the new Hamilton Brewery beer. Big fan.",
    "likes":27,
    "id":"1122810327591928991",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12224456_175248682823294_1558707223_n.jpg"
 },
 {
    "code":"FpTyHQcau",
    "caption":"I'm in Austin for a conference and doing some training. Enjoying some local brew with my baby.",
    "likes":82,
    "id":"1118481761857291950",
    "display_src":"https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e35/11326072_550275398458202_1726754023_n.jpg"
 }
];

// const post = posts.find(post => {
//   if (post.code === 'VBgtGQcSf') {
//     console.log(post.code);
//   }
//   return false;
// });

// Array.find() will iterate True/False and return an Object
// here we loop thru an Array of Objects that
// we can't reference with a Key, because it is Index based
const post = posts.find(post => post.code === 'VBgtGQcSf');
// const post = posts.filter(post => post.code === 'VBgtGQcSf');
console.log(post);

const code = 'VBgtGQcSf';
// const postIndex = posts.findIndex((post) => {
//   if (post.code === code) {
//     return true;
//   }
//   return false;
// });

// The findIndex() method returns the index of the first element
// in the array that satisfies the provided testing function.
// Otherwise, it returns -1, indicating no element passed the test.
const postIndex = posts.findIndex((post) => post.code === code);
console.log(postIndex);


// ARRAY SOME() & EVERY()
// these are not part of ES6, but still useful

const ages1 = [32, 15, 19, 12];

// check if ANY value in the array is greater than 18
const adultPresent = ages1.some(age => age >= 18);
console.log(adultPresent);

// check if ALL values in array are over 19
const allOldEnough = ages1.every(age => age >= 19);
console.log(allOldEnough);


// SPREAD OPERATOR
// Spread syntax allows an iterable such as an array expression
// or string to be expanded AND passed to another function, object, elements etc
// useful for combining arrays, passing arrays values to functions
// NOT to be confused with ...rest operator which collects
// all remaining elements into an array or the remaining function parameters
const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

const pizzas = [...featured, 'veggie', ...specialty];
// easily copy an array
const fridayPizza = [...pizzas];
fridayPizza.push('Mexican');

console.log(fridayPizza);


const names9 = [ 'Jon', 'Jacob', 'Jeff' ];

const copy1 = names9.slice();
const copy2 = [].concat(names9);
const copy3 = Object.values(names9);
const copy4 = [...names9];
const copy5 = Array.of(...names9);
const copy6 = JSON.parse(JSON.stringify(names9));
const copy7 = names9.map(i => i);
const copy8 = Object.assign([], names9);

console.log(copy7);

// spreading a string
// use
// map, a spread, querySelectorAll
// replace each char with <span>a</span>

// grab element
const jumpText = document.querySelector('.jump');
const jumpContent = jumpText.textContent;
// grab letters
console.log(jumpContent);
// we join() them at the end to remove the commas separating them
const jumpSpans = [...jumpContent].map(letter => '<span>' + letter + '</span>').join('');
console.log(jumpSpans);

jumpText.innerHTML = jumpSpans;


// create variable to hold all p's in .people
// because a nodeList is an iterable, you can use
// Array.from() or a spread operator ... to generate
// an array from this query
const gente = [...document.querySelectorAll('.people p')];
console.log(gente);
const genteName = gente.map((persona) => persona.textContent);
console.log(genteName);

const deepDish = {
  pizzaName: 'Deep Dish',
  size: 'Medium',
  ingredients: ['Marinara', 'Sausage', 'Dough', 'Cheese']
};

// example of spreading an Object Array into a new array
// using a spread operator creates a true copy of the array
// elements and is not simply a reference (symbolic link)
const shoppingList = ['Milk', 'Flour', ...deepDish.ingredients];
console.log(shoppingList);

// The entries() method returns a new Array Iterator object
// that contains the key/value pairs for each index in the array.
console.log([...deepDish.ingredients.entries()]);



const comments = [
    { id: 209384, text: 'I love your dog!' },
    { id: 523423, text: 'Cuuute! 🐐' },
    { id: 632429, text: 'You are so dumb' },
    { id: 192834, text: 'Nice work on this wes!' },
  ];

// how do we remove an Object and its properties from an array
// lets assume we want to remove ID 632429
// The findIndex() method returns the index of the first element
// in the array that satisfies the provided testing function.
// Otherwise, it returns -1, indicating no element passed the test.

const nastyID = 632429;
const nastyIndex = comments.findIndex((comment) => comment.id === nastyID);
console.log(nastyIndex);
// here we spread the array objects and apply the slice() method
// to grab all objects before and after our bad comment index
const newComments = [...comments.slice(0, nastyIndex), ...comments.slice(nastyIndex + 1)];
console.log(newComments);


// SPREADING INTO FUNCTIONS
// lets add the values of newInventors to inventors Array
const inventors = ['Einstein', 'Newton', 'Galileo'];
const newInventors = ['Musk', 'Jobs'];

// old way
// inventors.push.apply(inventors, newInventors);

// new way with spread operator
inventors.push(...newInventors);
console.log(inventors);



// another example of spreading into a Function
function sayHola(first, last) {
  console.log(`Hola ${first} ${last}`);
}
// temmp data
const him = ['jacobo', 'salazar'];

// old way
sayHola(him[0], him[1]);

// new way - notice no array brackets wrapping spread
sayHola(...him);


// REST Operator
// the parameters being 'rested' must come last in
// the order of parameters
function convertDinero(rate, ...amounts) {
  // console.log(rate, amounts);
  // lets map over amountz to calculate the conversion
  return amounts.map((dollarz) => dollarz * rate);
}

const amountz = convertDinero(1.5, 10, 23, 52, 1, 56);
console.log(amountz);


// more spread operator examples
const runner = ['Jake', 123, 5.5, 5, 3, 6, 35];
// create 3 new variables from the runner array
const [name4, id4, ...runs4] = runner;
console.log(name4, id4, runs4);



// OBJECT LITERALS IN ES6
// when you are creating or referencing properties with
// the SAME name, you dont have to write it again

const robby = 'thisRobby';
const bobby = 'thisBobby';
const ricky = 'thisRicky';

// when creating a new object with same names
const newEdition = {
  bandName: 'New Edition',
  robby,
  bobby,
  ricky,
  homies: ['Jose', 'Miguel']
}

console.log(newEdition);
console.log(newEdition.homies[0]);
console.log(...newEdition.homies);


// a new way to write methods in Objects
// you dont need the colon and word function
const modal = {
  create(man) {
    console.log(man);
  },
  open: function() {
    console.log('open!!!');
  },
  close: function() {
    console.log('close!!!');
  }
};
modal.create(bobby);
modal.open();
modal.close();


// COMPUTED PROPERTY NAMES or Computed Property Keys
// aka, dynamically created key variable names
// you can build them directly inside of an Object
// by concatenating variable values and strings
// Starting with ECMAScript 2015, the object initializer
// syntax also supports computed property names. That
// allows you to put an expression in brackets [], that
// will be computed and used as the property name.
function invertColor(color) {
      return '#' + ("000000" + (0xFFFFFF ^ parseInt(color.substring(1),16)).toString(16)).slice(-6);
  }

const shirtKey = 'pocketColor';
const shirtValue = '#ffcb05';

const shirt = {
  [shirtKey]: shirtValue,
  [`${shirtKey}Opposite`]: invertColor(shirtValue)
};

console.log(shirt);

// old way
// create a variable,
// then use its value to create
// a new property within an object
// you would have to create it OUTSIDE of the object
const key = 'hello';
const things = {};
things[key] = 'world';

// another example of computed property names/keys
const keys5 = ['size', 'color', 'weight'];
const values5 = ['medium', 'blue', 100];

// now you want to create a new object
// and dynamically create key names & values
// shift removes the first element of an array and returns it
const myShirt = {
  [keys5.shift()]: values5.shift(),
  [keys5.shift()]: values5.shift(),
  [keys5.shift()]: values5.shift(),
};
console.log(myShirt);





// =======================================================
// PROMISES

// you can use fetch which is like jqueru $.ajax
// to retrieve data
// many services that provide data, return a promise, which
// we must then handle on our end with (resolve, reject)

// const postPromise = fetch('https://www.govtrack.us/api/v2/role?current=true&role_type=representative&limit=438');

// postPromise
//   .then((data) => data.json())
//   .then((data) => {console.log(data)})
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(postPromise);


// creating our own promises
const posts1 = [
    { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
    { title: 'CSS!', author: 'Chris Coyier', id: 2 },
    { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
  ];

  const authors = [
    { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
    { name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen' },
    { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
  ];



function getPostById(id) {
  // create and return a new promise
  return new Promise((resolve, reject) => {
    // find post within Posts[array] of Objects
    // using argument ID passed in
    const post = posts1.find(post => post.id === id);
    // if (TRUE) a post was found, the promise has been resolved (data was returned)
    // resolve it and RETURN the value back to this function call
    if (post) {
      resolve(post);
    }
    else {
      // the promise has been rejected (data was not returned or connection error, etc)
      // return an Error() object to help debugging by viewing the stacktrace
      reject(Error('No post was found...'));
    }
  });
}

function hydrateAuthor(post) {
  // create and return a new promise
  return new Promise((resolve, reject) => {
    const authorDetails = authors.find(author => author.name === post.author);
    // if (TRUE) a match was found
    // overwrite post.author property with authors Object
    if (authorDetails) {
      post.author = authorDetails;
      // resolve it and RETURN it back to this function call
      resolve(post);
    }
    else {
      reject(Error('Can not find author...'));
    }
  });
}

console.log('PROMISES PROMISES PROMISES');
// call our function and begin chaining
getPostById(3)
  .then(post => {
    return hydrateAuthor(post);
  })
  .then(post => {
    console.log(post);
  })
  .catch(error => {
    console.log(error);
  });


// MORE EXAMPLES
const weather = new Promise((resolve) => {
  setTimeout(() => {
    resolve({temp: 29, conditions: 'Sunny with clouds'});
  }, 2000);
});

const tweets = new Promise((resolve) => {
  setTimeout(() => {
    resolve(['I like cake', 'BBQ is good']);
  });
});

// we use Promise.all() to manage
// all the asynchronous Promises created in parallel
// Promise.all(takes in an array of Promise names)
// and will output a single Promise that is fullfilled
// with an Array of results
// then we apply destructuring assignment of variables
// using the responses returned
Promise
  .all([weather, tweets])
  .then(responses => {
    const [weatherData, tweetData] = responses;
    console.log(weatherData, tweetData);
  });

console.log('PROMISES USING REAL DATA -- PROMISES USING REAL DATA');
const postPromise = fetch('https://www.govtrack.us/api/v2/role?current=true&role_type=representative&limit=438');
// const postPromise = fetch('https://wesbos.com/wp-json/wp/v2/posts');
const streetCarsPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');

Promise
  .all([postPromise, streetCarsPromise])
  .then(responses => {
    // because Promise.all() returns an Array of responses
    // we can Map over each Array response, convert it to JSON
    // and Map returns Arrays back to the Promise.all() it is wrapped in
    return Promise.all(responses.map(res => res.json()));
  })
  .then(responsesJSON => {
    // console.log(responsesJSON);
    // console.log(responsesJSON[0]);
    // const democrats = responsesJSON[0].map(dems => dems.party === 'Democrat');
    // const post = posts.find(post => post.code === 'VBgtGQcSf');
    // const post = posts.filter(post => post.code === 'VBgtGQcSf');

    // first we set a var to the incoming Array of Objects
    const govData = responsesJSON[0].objects;
    // then we filter this data to extract all democrat entries
    const democrats = govData.filter(rep => rep.party === 'Democrat');
    // then we map over the democrat entries to grab each of their names
    const democratNames = democrats.map(rep => rep = rep.person.name);
    // here we build a string using reduce()
    const dTextName = democratNames.reduce((accumulator, currentValue) => `${accumulator}<p>${currentValue}</p>`, '');
    // console.log(dTextName);
    // you can also chain the statements above:
    // const democratNames = govData.filter(rep => rep.party === 'Democrat').map(rep => rep = rep.person.name);

    const d = document.createElement('div');
    d.innerHTML = dTextName;
    document.getElementById('junk').appendChild(d);

  })





// SYMBOLS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
// The latest ECMAScript standard defines seven data types:
// Six data types that are primitives:
//    Boolean
//    Null
//    Undefined
//    Number
//    String
//    Symbol (new in ECMAScript 6)
// and Object





// PROTOTYPAL INHERITANCE AND CLASSES
// old way with fake classes and prototype inheritance

// function Dog(name, breed) {
//   this.name = name;
//   this.breed = breed;
// }

// const pupperz = new Dog('Ranger', 'BorderCollie Lab');
// const lilpup = new Dog('Smelly', 'Kickme');
// console.log(pupperz);

// Dog.prototype.bark = function() {
//   console.log(`Bark bark, my name is ${this.name} and I'm a ${this.breed} dog.`);
// };

// pupperz.bark();
// lilpup.bark();



// new way
// CLASS DECLARATION
// a class declaration (statement) is like a
// function declaration which stands alone without
// being assigned to a variable (which then becomes an expression as it evaluates to a mathematical value due to = operator)
// Like a function constructor- the behavior we mimic when calling/creating a new instance
//  it comes with a constructor statement
//  that can be used/runs on Object creation; helpful for any Object initialization logic

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    console.log(`Bark bark, my name is ${this.name} and I'm a ${this.breed} dog.`);
  }

  cuddle() {
    console.log(`I love you human.`);
  }

  // STATIC METHOD
  // Only accessible by the Class.
  // Can not be called by any New Objects created with this Class.
  // Can only be called by the Class itself (like Array.of method)
  // as in: Dog.info();
  static info() {
    console.log('I am a static method...');
  }

  // GETTERS & SETTERS
  // new syntax for working with reading and writing Object properties
  // The GET syntax binds an object property (pseudo-property) to a function
  // that will be called when that property is looked up.
  // A getter is an Object property
  //  returns a dynamically computed value
  //  acts as internal variable that does not require a method call
  //  must have exactly 0 zero parameters and return a value
  // The SET syntax binds an object property to a function to be called
  // when there is an attempt to set that property.
  // A setter changes an Object (pseudo) property
  //  must have exactly one parameter
  //  can NOT hold a value, can only assign or change a value
  //  Getter and Setters can be removed using the delete operator syntax: delete obj.latest;
  //  The delete operator removes a property from an object.

  get description() {
    return `${this.name} is a ${this.breed}`;
  }

  set nicknames(value) {
    this.nick = value.trim();
  }
  get nicknames() {
    return `${this.nick}`;
  }
}

const pupperz = new Dog('Ranger', 'BorderCollie Lab');
const lilpup = new Dog('Smelly', 'Kickme');

pupperz.bark();
lilpup.bark();
pupperz.cuddle();
lilpup.cuddle();
// static method
Dog.info();
// SETTER
pupperz.nicknames = 'Raingee';
// GETTER
console.log(pupperz.nicknames);

// CLASS EXPRESSION
// like a function expression, it is assigned to a
// variable.
// const Dog = class {

// }



// EXTENDING CLASSES
class Animal {
  constructor(name) {
    this.name = name;
    this.thirst = 100;
    this.belly = [];
  }
  drink() {
    this.thirst -= 10;
    return this.thirst;
  }
  eat(food) {
    this.belly.push(food);
    return this.belly;
  }
}

const rhino = new Animal('Rhinee');
console.log(rhino);
console.log(rhino.drink());
console.log(rhino.drink());
console.log(rhino.eat('steak'));
console.log(rhino.eat('lettuce'));

// USING SUPER()
// Pupz will now inherit all the props and methods from Animal class
class Pupz extends Animal {
  // since we are extending, we assume the constructor of the Extended (parent) Class
  // so we must user SUPER() to call it before we can use this Pupz class
  constructor(name, breed) {
    // The super keyword is used to access and call functions on an object's parent.
    // When used in a constructor, the super keyword appears alone and must be used before the this keyword is used.
    // pass necessary parameter to Extended Class
    super(name);
    // proceed with unique props/methods for our Pupz class
    this.breed = breed;

  }
}

const collie = new Pupz('Ralphie', 'Border Collie');
console.log(`pupName: ${collie.name}`);
console.log(`pupBreed: ${collie.breed}`);
console.log(collie.drink());
console.log(collie.drink());
console.log(collie.drink());
console.log(collie.drink());
console.log(collie.eat('shrimp'));
console.log(collie.eat('shrimp'));
console.log(collie.eat('shrimp'));


// EXTENDING ARRAYS WITH CLASSES FOR CUSTOM COLLECTIONS
class MovieCollection extends Array {
  // we ...rest into the constructor AND ...spread into super()
  constructor(firElem, ...rest) {
    super(...rest);
    this.name = firElem;
  }
  add(movie) {
    this.push(movie);
  }
  topRated(limit = 10) {
    return this.sort((a, b) => (a.stars > b.stars ? -1 : 1)).slice(0, limit);
  }
}

// this Array is created using the 'new' constructor operator
const movies = new MovieCollection('Jake\'s Fav Movies',
    { name: 'Bee Movie', stars: 10 },
    { name: 'Star Wars Trek', stars: 1 },
    { name: 'Virgin Suicides', stars: 7 },
    { name: 'King of the Road', stars: 8 }
  );


console.log(movies);
console.log(movies.name);
movies.add({name: 'The Matrix', stars: 5});

console.table(movies.topRated());
//for in loop
for(const mvee in movies) {
  console.log(mvee);
}

//for of loop
for (const movie of movies) {
  console.log(movie.name);
}


// GENERATOR FUNCTIONS
// The 'yield' keyword is used to pause and resume a generator function*
// It can be thought of as a generator-based version of the 'return' keyword.
// The yield keyword actually returns an IteratorResult object with
// two properties, value and done.
// The value property is the result of evaluating the yield expression
// done is false indicating that the generator function has not fully completed.
// done becomes true when function has finished iterating thru data

// a sample array of objects to work with as data
const inventors5 = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

// create a generator function called loop
// and yield the result
function* loop(arr) {
  for(const ventee of arr) {
    yield ventee;
  }
}

// call the generator loop function with next() and next().value;
const vents = loop(inventors5);
console.log(vents);
console.log(vents.next());
console.log(vents.next());
console.log(vents.next().value);
console.log(vents.next().value.first);
console.log(vents.next().value.last);
console.log(vents.next().value.year);


// another example that can be used to fetch data
// in a specific order to mimic async process

// this function will make an ajax fetch() call
// and then make Generator calls dataGen.next(data) to keep running the Generator
// the data in dataGen.next(data) is what
// yield returns and is set to const beers, etc
function ajax(url) {
    fetch(url)
    .then(data => data.json())
    .then(data => dataGen.next(data))
  }

  function* steps() {
    console.log('fetching beers');
    const beers = yield ajax('http://api.react.beer/v2/search?q=hops&type=beer');
    console.log(beers);

    console.log('fetching wes');
    const wes = yield ajax('https://api.github.com/users/wesbos');
    console.log(wes);

    console.log('fetching fat joe');
    const fatJoe = yield ajax('https://api.discogs.com/artists/51988');
    console.log(fatJoe);
  }
  // set up the Generator
  const dataGen = steps();
  dataGen.next(); // kick it off


// another example
// you can use the FOR-OF loop instead of next()
// to iterate thru generator yields
//
   function* lyrics() {
    yield `But don't tell my heart`;
    yield `My achy breaky heart`;
    yield `I just don't think he'd understand`;
    yield `And if you tell my heart`;
    yield `My achy breaky heart`;
    yield `He might blow up and kill this man`;
  }

  const achy = lyrics();

  for (const line of achy) {
    console.log(line);
  }




  // The Proxy object is used to define custom behavior for fundamental operations
  // (e.g. property lookup, assignment, enumeration, function invocation, etc).
  // HANDLER
  // Placeholder object which contains traps.
  // TRAPS
  // The methods that provide property access. This is analogous to the concept of traps in operating systems.
  // TARGET
  // Object which the proxy virtualizes. It is often used as storage backend for the proxy. Invariants (semantics that remain unchanged) regarding object non-extensibility or non-configurable properties are verified against the target.
  // syntax: var p = new Proxy(target, handler);

const dudeTarget = { namez: 'Jake', age: 44 };
// the dudeProxy below will act as
// a Proxy for the dude Object above
const dudeProxy = new Proxy(dudeTarget, {
  // handler traps
  get(target, prop) {
    // we access the object prop using
    // computed property syntax obj[prop] or dudeTarget[namez]
    // - similar to accessing array elements
    return target[prop].toUpperCase();
  },
  set(target, prop, value) {
    if(typeof value === 'string') {
      target[prop] = value.trim().toUpperCase();
      console.log('property set: ' + prop + ' = ' + value);
      return true;
    }
  }
});

console.log(dudeProxy.namez = 'Jacobo');
console.table(dudeTarget);
console.log(dudeProxy.cool = 'Yes');
console.table(dudeTarget);


// MORE PROXY examples
// using a handler that has been created separately

const phoneHandler = {
  set(target, prop, value) {
    target[prop] = value.match(/[0-9]/g).join('');
    console.log('property set: ' + prop + ' = ' + value);
    return true;
  },
  get(target, prop) {
    return target[prop].replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }
}

// lets create our Proxy
const phoneNumbers = new Proxy({}, phoneHandler);

// lets add some data to our empty object
phoneNumbers.home = '210 330-6004';
phoneNumbers.cell = '(210) 911-8888';
phoneNumbers.work = '210- 433 - 2244';
console.table(phoneNumbers);
console.log(phoneNumbers.home);
console.log(phoneNumbers.cell);
console.log(phoneNumbers.work);


// MORE PROXY examples

const safeHandler = {
    set(target, prop, value) {
      // Object.keys() method returns an array of a given objects own property names,
      // in the same order as we get with a normal loop
      // find() method returns the value of the first element in the array that
      // satisfies the testing function provided; or returns undefined if nothing is found
      const likeKey = Object.keys(target).find(k => k.toLowerCase() === prop.toLowerCase());

      // the IN operator returns true if the specified property is in the specified object or its prototype chain
      //  likekey has a value, this means a similar prop name was found with a different case
      //  ie: firstName, firstname,
      if (!(prop in target) && likeKey) {
        // throw new Error(`Oops! Looks like like we already have a(n) ${prop} property but with the case of ${likeKey}.`);
        console.log(`Oops! Looks like like we already have a(n) ${prop} property but with the case of ${likeKey}.`);
      }
      target[prop] = value;
      return true;
    }
  };

  const safety = new Proxy({ id: 100 }, safeHandler);

  safety.ID = 200;
  console.log(safety.id);








// SETS AND WEAK SETS
// The Set object lets you store unique values of any type, whether primitive values or object references.
// Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.
// syntax
const boards = new Set();

// add values to this board set
// Appends a new element with the given value to the Set object. Returns the Set object.
boards.add('Hosoi');
boards.add('Guerrero');
boards.add('Caballero');

// list the set
console.log(boards);

// get the size
console.log(boards.size);




// list values
console.log('list values...');
console.log(boards.values());

// list keys
console.log('list keys...');
console.log(boards.keys());

// list entries
console.log('list entries...');
console.log(boards.entries());




// you can iterate over a set with a FOR OF loop
const boardValues = boards.values();

console.log('using a FOR OF loop...');
for(const bv of boardValues) {
  console.log(bv);
}


// set.has() Returns a boolean asserting whether an element is present with the given value in the Set object or not.
console.log('is Hosoi present?');
console.log(boards.has('Hosoi'));


// you can iterate over a set like a generator with next()
const boardGenValues = boards.values();

console.log('next value...');
console.log(boardGenValues.next());
console.log('next value...');
console.log(boardGenValues.next());
console.log('next value...');
console.log(boardGenValues.next());




// delete a value
console.log('deleting Hosoi...');
console.log(boards.delete('Hosoi'));
console.log(boards);

// clear the set
// Removes all elements from the Set object.
console.log('clearing the set...');
boards.clear();
console.log(boards);



// another example
// we can prepopulate a set with an array of values

const doggies = ['scrappy', 'max', 'chuy'];
// create our new set
const doggieSet = new Set(doggies);
const doggieValues = doggieSet.values();

console.log(doggieSet);
console.log(doggieSet.size);
// get value using generator next() method
console.log(doggieValues);
console.log(doggieValues.next().value);



// working with WEAK SETS
// The WeakSet object lets you store weakly held objects in a collection.
// WeakSet objects are collections of objects (can only contain objects).
// An object in the WeakSet may occur only once; it is unique in the WeakSet's collection.
// is populated with a array of objects: new WeakSet([obj1, obj2]);
// is not iterable
// does not have a clear() method, because it is served by automatic Garbage collection
// so, as objects that were used to populate the WeakSet are removed, they are automatically removed from the WeakSet

// Has the following methods:
// add an object with weakset.add(objName)
// delete an object with weakset.delete(objName)
// check for elements with weakset.has(objName)

// SYNTAX

let food = { name: 'Tacos', count: 3 };
let pop = { name: 'Dr. Pepper', count: 6 };
let beer4 = { name: 'Dos XX', count: 10 };

const partyWS = new WeakSet([food, pop]);
console.log(partyWS);

partyWS.delete(pop);
console.log(partyWS);

partyWS.add(beer4);
console.log(partyWS);

console.log(partyWS.has(pop));



// MAP AND WEAK MAP
// The Map object holds key-value pairs and remembers
// the original insertion order of the keys.
// Any value (functions, objects and primitive values) may be
// used as either a key or a value.
//
// can use methods:
//  has(key), set(key, val), get(key), delete(key), size, clear(), entries(), keys(), values(), etc
//
// can iterate over using:
//  obj.forEach()
//  obj.for(of){}
// syntax
// new Map([[ 1, 'one' ],[ 2, 'two' ]])

const myMap = new Map();
myMap.set('a string', "value associated with 'a string'");
myMap.set({}, "value associated with object");
myMap.set(function(){}, "value associated with function");
myMap.set('koolKey', 'my kool value');
myMap.set(0, 'zero');
myMap.set(1, 'one');

console.log(myMap);
console.log(myMap.size);
console.log(myMap.get('koolKey'));

// iterate using FOR OF loop
for(let [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}

// next using FOR OF with keys() and values()
console.log('GET MAP KEYS::::');
for(let key of myMap.keys()) {
  console.log(key);
}

console.log('GET MAP VALUES::::');
for(let val of myMap.values()) {
  console.log(val);
}

// iterating over a map with FOR EACH
console.log('using FOR EACH ---- ');
myMap.forEach((value, key) => console.log(`${key} = ${value}`));

// maps can also be CLONED/copied like Arrays
// that is a shadow or reference to the original


// maps can be merged, maintaining key uniqueness
// the last repeated key wins
//

// another practical example
// of using maps to collect meta-data

const clicksMap = new Map();
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  console.log(button.textContent);
  // add key/value pairs to clicksMap map with a value of 0
  clicksMap.set(button.textContent, 0);
  // add event listener for each one
  button.addEventListener('click', function() {
    const buttonKey = this.textContent;
    // get value for each button
    // we can use 'this' because we also
    // use it as the key to create the key/value pair
    const val = clicksMap.get(buttonKey);

    // update val count
    clicksMap.set(buttonKey, val + 1);
    console.log(clicksMap);

  });
});

