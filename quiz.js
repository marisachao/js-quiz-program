// variables
var correct = 0;

// prompt
var answer1 = prompt("Who is the point guard of the Golden State Warriors?");
//console.log("the answer is:" + answer1);
var answer2 = prompt("What city is the Golden State Warriors' arena located in?")
var answer3 = prompt("What country is Leandro Barbosa from?")
var answer4 = prompt("What is the last name of the Warrior's head coach?")
var answer5 = prompt("How many games did the Warriors win to start the 2015-16 season?")


// if statement
if ( answer1.toUpperCase() === 'STEPHEN CURRY' ) {
 correct += 1;
}
if ( answer2.toUpperCase() === 'OAKLAND' ) {
 correct += 1;
}
if ( answer3.toUpperCase() === 'BRAZIL' ) {
 correct += 1;
}
if ( answer4.toUpperCase() === 'KERR' ) {
 correct += 1;
}
if ( answer5.toUpperCase() === '24' ) {
 correct += 1;
}

//console.log("correct:" + correct);

// output results
if ( correct === 5 ) {
document.write("<p>Congratulations, you got all 5 questions correct! Gold medal!!</p>");
}

if ( correct === 4 ) {
document.write("<p>Congratulations, you got 4 questions correct! Silver medal!!</p>");
}

if ( correct === 3 ) {
document.write("<p>Congratulations, you got 3 questions correct! Bronze medal!!</p>");
}

if ( correct === 2 ) {
document.write("<p>You got 2 questions correct! You seem to know a litte bit about the Warriors</p>");
}

if ( correct === 1 ) {
document.write("<p>You got 1 question correct! You're probably not much of a basketball fan, right?</p>");
}

if ( correct === 0 ) {
document.write("<p>Sorry you didn't get any questions right.</p>");
}
