// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var integer = +prompt("Enter a positive integer")
document.write("Number: "+ integer + "<br>")
document.write("round off value: "+ Math.round(integer) + "<br>")
document.write("floor value: "+ Math.floor(integer) + "<br>")
document.write("ceil value: "+ Math.ceil(integer)) 



// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var integer = parseFloat(prompt("Enter a negative floating point integer"))
document.write("<br>" + "Number: "+ integer + "<br>")
document.write("round off value: "+ Math.round(integer) + "<br>")
document.write("floor value: "+ Math.floor(integer) + "<br>")
document.write("ceil value: "+ Math.ceil(integer)) 
 

// 3. Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
var num = +prompt("Enter a number")
document.write("<br>" + "Absolute value " + Math.abs(num))



// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.:
var dice = Math.round(Math.random()*6)
document.write("<br>" + "Random dice value " + dice)

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
var dice = Math.floor((Math.random()*2)+1)
document.write("<br>" + "Random coin value " + dice)



// 6. Write a program that shows a random number between 1 
// and 100 in your browser
var random = Math.floor((Math.random()*100)+1)
document.write(random)


// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user
var secretNum = Math.round(Math.random())
var Guess = +prompt("Enter a number between 1 to 10")
if(secretNum == Guess)
{
    alert("congratulations, you have guessed right")
}
else{
    alert("You guessed wrong, try again")
}