// variables
var correct = 0;

// prompt
var answer1 = prompt("What is the town that the hit series Gilmore Girls takes place in?");
//console.log("the answer is:" + answer1);
var answer2 = prompt("What is the name of the high school Rory attends?")
var answer3 = prompt("Who owns the diner that Lorelai and Rory frequently eat at?")
var answer4 = prompt("What is the name of the inn that Lorelai owns?")
var answer5 = prompt("What is the name of Rory's first boyfriend")


// if statement
if ( answer1.toUpperCase() === 'STARS HOLLOW' ) {
 correct += 1;
}
if ( answer2.toUpperCase() === 'CHILTON' ) {
 correct += 1;
}
if ( answer3.toUpperCase() === 'LUKE' ) {
 correct += 1;
}
if ( answer4.toUpperCase() === 'THE DRAGONFLY INN' ) {
 correct += 1;
}
if ( answer5.toUpperCase() === 'DEAN' ) {
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
document.write("<p>You got 2 questions correct! Time to watch some Gilmore Girls and brush up on your knowledge!</p>");
}

if ( correct === 1 ) {
document.write("<p>You got 1 question correct! Time to watch some Gilmore Girls and brush up on your knowledge!?</p>");
}

if ( correct === 0 ) {
document.write("<p>Sorry you didn't get any questions right. Have you even watched Gilmore Girls??</p>");
}
