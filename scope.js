// JS Day 1 Homework

// Go through each sample code and work out what the output will be and explain what happened.

// Episode 1

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

// this function will return "My Name is Keith". No local variable in the function so it finds the 'name' variable in the global scope.

// Episode 2

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// this function will return 3. Finds the score variable in the local scope first so doesn't check the global scope.

// Episode 3

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// this function will return:
//  0: Ducks
//  1: Dogs
//  2: Lions
// as it finds the global variable myAnimals in the local scope first so ignores the var myAnimals in the global scope.

// Episode 4

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

// this function will return "Suspects include: Jay, Val, Harvey, Rick". This is because it will find suspectThree 'Harvey' in the local scope of the function first and will ignore the var suspectThree in the global scope ('Keith').

// Episode 5

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

// 'Poirot' will be displayed on the console. detectiveInfo changes the detective name to 'Poirot' then calls the printName function on the detective which is now named 'Poirot'.

// Episode 6

var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

// "the murder is valerie" will be displayed to the console. The murder is initially set as 'rick', when the outerFunction is called this is changed to 'marc' but then the innerFunction is called inside the outerFunction which changes the murder to 'valerie'.

// Episode 7 - Make up your own episode/s!

// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.


game1 = {
  title: "The Last of Us",
  genres: ["action-adventure", "survival", "horror"],
  year: 2013
};

game2 = {
  title: "Assassins Creed Origins",
  genres: ["action-adventure", "stealth"],
  year: 2017
}

game3 = {
  title: "Fifa17",
  genres: ["sport"],
  year: 2017
}

game4 = {
  title: "Steep",
  genres: ["adventure", "sport"],
  year: 2016
}

var games = [game1, game2, game3, game4];

var numGames = games.length;

var firstFunction = function(games){
  secondFunction(games);
  console.log(countAdventureGames(games));
  console.log(numGames);
}

var secondFunction = function(games){
  for (var game of games){
    if (game.genres.includes("action-adventure")){
      replaceGenre(game, "action-adventure")
    }
    console.log(game);
  }
}

function replaceGenre(game, genre){
  var index = game.genres.indexOf(genre);
  game.genres.splice(index, 1);
  game.genres.unshift("adventure");
  game.genres.unshift("action");
}

function countAdventureGames(games){
  numGames = 0;

  for (var game of games){
    if (game.genres.includes("adventure")){
      numGames++;
    }
  }
  return numGames;
}

firstFunction(games);
