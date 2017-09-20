// Madlibs!

// Step 1: Construct an array of company names, like Uber, Lyft, Google, Apple

var coffeeCompanies = ['Peet\'s', 'Starbucks', 'Colectivo', 'Dunkin\' Donuts', 'Dark Matter', 'Metropolis', 'Halfwit'];

// Step 2: Construct a silly array of animals

var animals = ['Dogs', 'Ferrets', 'Iguanas', 'Tigers', 'Monkeys', 'Lemurs', 'Sloths'];

// Step 3: Make a loop that makes a sentence similar to 
// "My company is an Uber for dogs!" Spit out at least 5 sentences to the console.log()

for (i = 0; i < animals.length; i++) {
  console.log(animals[i] + " love to get their caffeine fix from " + coffeeCompanies[i] + ".");
}

// Bonus challenge: randomize the selection of the company names and animals
// Method 1 using .sort method https://www.w3schools.com/js/js_array_sort.asp

// var coffeeCompanies = ['Peet\'s', 'Starbucks', 'Colectivo', 'Dunkin\' Donuts', 'Dark Matter', 'Metropolis', 'Halfwit'];
// coffeeCompanies.sort(function() { return 0.5 - Math.random()});
// var animals = ['Dogs', 'Ferrets', 'Iguanas', 'Tigers', 'Monkeys', 'Lemurs', 'Sloths'];
// animals.sort(function() { return 0.5 - Math.random()});
// for (i = 0; i < animals.length; i++) {
//   console.log(animals[i] + " love to get their caffeine fix from " + coffeeCompanies[i] + ".");
// }

// Method 2 
// found this here https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php
// not sure i entirely understand how this while statement works

function shuffle(arr) {
  var i = arr.length, j, index;
  // while there are elements in the array
  while (i > 0) {
  // pick a random index
    index = Math.floor(Math.random() * i);
  // decrease i by 1
    i--;
  // and swap the last element with it
    j = arr[i];
    arr[i] = arr[index];
    arr[index] = j;
  }
  return arr;
}

for (i = 0; i < animals.length; i++) {
  console.log(shuffle(animals)[0] + " love to get their caffeine fix from " + shuffle(coffeeCompanies)[0] + ".");
}

// Bonus challenge for those of you who know some jQuery:
// populate the HTML with a name of one company!
// this should print the first item in the coffeeCompanies array into the startup-name div

$(".startup-name").append(coffeeCompanies[0]);
