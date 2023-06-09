// 1. Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”
var city = prompt("Enter your city");

if (city == 'karachi') {
    console.log("Welcome to city of lights");
}



// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.
var gender = prompt("Enter your gender \nmale? \nFemale?");

if (gender == 'male') {
    console.log("Good Morning sir.");
}
else if (gender == 'female') {
    console.log("Good Morning ma'am.");
}



// 3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:
var color = prompt("Enter color of road traffic signal: \nRed  \nYellow  \nGreen");
if (color == 'red') {
    console.log("Must Stop");
}
else if (color == 'yellow') {
    console.log("Ready To Go");
}
else if (color == 'green') {
    console.log("Move Now");
}



// 4. Write a program to take input remaining fuel in car (in 
// litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”

// a
var fuel = +prompt("Enter remaining fuel in car: ");
if (fuel < 0.25) {
    console.log("Please refill the fuel in car");
}

// b
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// c
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// d
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

// e
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// f
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}



// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute 
// grade as per following table

var sub1 = +prompt("Enter marks of subject 1");
var sub2 = +prompt("Enter marks of subject 2");
var sub3 = +prompt("Enter marks of subject 3");
var totalMarks = +prompt("Enter Total Marks");
var obtainedMarks = sub1 + sub2 + sub3;
var prcntge = (obtainedMarks/totalMarks) * 100;
console.log(totalMarks);
console.log(obtainedMarks);
console.log(prcntge + "%");

if( prcntge >= 80)
{
    console.log("Grade : A-one")
    console.log("Excellent");
}
else if(prcntge >= 70 && prcntge < 80)
{
    console.log("Grade : A")
    console.log("Good")
}
else if(prcntge >= 60 && prcntge < 70)
{
    console.log("Grade : B")
    console.log("You Need To Improve")
}
else{
    console.log("Fail")
    console.log("Sorry")
}




// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
var secretNum = 5;
var Guess = +prompt("Guess a number from 1 to 10")
if( Guess == secretNum)
{
    console.log("Bingo! Correct answer")
}
else if(Guess == secretNum+1)
{
    console.log("Close enough to the correct answer")
}


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.
var num = +prompt("Enter number");
if(num%3==0)
{
    console.log("The number is divisible by 3")
}



// 9. Write a program that checks whether the given input is an
// even number or an odd number.
var num = +prompt("Enter a number: ")

if(num%2==0)
{
    console.log("Even number")
}
else{
    console.log("Odd number")
}



// 10. Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
var temp = +prompt("enter Temperature")
if( temp >= 40)
{
    console.log("It Is too hot outside")
}
else if(temp >= 30 && temp < 40)
{
    console.log("The Weather today is Normal")
}
else if(temp >= 20 && temp < 30)
{
    console.log("Today’s Weather is cool.")
}
else{
    console.log("OMG! Today’s weather is so Cool.")
}



// 11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user
var firstNumber = +prompt("Enter first number");
var secondNumber = +prompt("Enter second number");
var operator = prompt("Enter operator");
if (operator == '+') {
    console.log(firstNumber + secondNumber)
}
else if (operator == '-') {
    console.log(firstNumber - secondNumber)
}
else if (operator == '*') {
    console.log(firstNumber * secondNumber)
}
else if (operator == '/') {
    console.log(firstNumber / secondNumber)
}
else if (operator == '%') {
    console.log(firstNumber % secondNumber)
}

