// 1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).

var input = prompt("enter a number ")

if( input >= 65 && input <=90 )
{
    console.log("it is an Upper Case letter")
}
else if(input >= 97 && input <=122)
{
    console.log("it is an lower Case letter")
}
else
{
    console.log("it is a number")
}


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
var input1 = +prompt("Enter a first integer");
var input2 = +prompt("Enter a second integer");
if(input1 > input2)
{
    console.log(input1 + " is larger")
}
else if(input1 < input2)
{
    console.log(input2 + " is larger")
}



// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.
var input = +prompt("Enter a number");
if(input > 0)
{
    console.log("it is a positive number")
}
else if(input < 0)
{
    console.log("It is negative number")
}
else
{
    console.log("It is zero")
}



// 4. Write a program that takes a character (i.e. string of 
// length 1) and returns true if it is a vowel, false otherwise
var input = prompt("Enter a character");
if(input == 'a' || input == 'e' || input == 'i' || input == 'o' || input == 'u')
{
    console.log("True")
}
else
{
    console.log("False")
}


// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.
var correctPswrd = "abc";
var password = prompt("Enter Your Password");
if(correctPswrd == password)
{
    console.log("Correct! The password you entered matches the original password")
}
else
{
    console.log("Incorrect password")
}


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
console.log(greeting)
}
else{
greeting = "Good evening";
console.log(greeting)
}



// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements
var input = prompt("Enter time in 24hours clock format");
if(input >= 0 && input < 1200)
{
    console.log("Good Morning")
}
else if(input >= 1200 && input < 1700)
{
    console.log("Good Afternoon")
}
else if(input >= 1700 && input < 2100)
{
    console.log("Good evening")
}
else if(input >= 2100 && input < 2359)
{
    console.log("Good Night")
}
else
{
    console.log("invalid input")
}
