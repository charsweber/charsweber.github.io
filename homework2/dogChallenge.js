var dogs = ['golden retriever', 'bulldog', 'beagle', 'husky', 'australian shepherd', 'bernese mountain dog'];
var randoDog = dogs[Math.floor(Math.random()*dogs.length)];
var favDog = prompt('What is your favorite breed of dog?');
console.log("Your favorite breed is " + favDog + "? Mine is " + randoDog + "!");
if (randoDog == favDog) {
	console.log("We're besties!");
} else {
	console.log("You're wrong!");
}
