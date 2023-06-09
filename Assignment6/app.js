// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
var a = 10;
console.log("The value of a is: " + a);
a = ++a;
console.log("The value of a is: " + +a);
console.log("The value of a is: " + a);
a = a++
console.log("The value of a is: " + a);
a = --a;
console.log("The value of a is: " + a);
a = a--;
console.log("The value of a is: " + a);


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
var a = 2, b = 1;

// 1 a will be equals to 1 because of decrement
--a;

// 2 a becomes 0 and b also becomes 0 and after subtraction the result will be zero
--a - --b;

// 3 a becomes -1 and b also becomes -1 and after subtraction it becomes -2, than b becomes 0 and after addition result is -2
--a - --b + ++b;

// 4 a becomes -2 and b becomes -1 resulting -3
// than b becomes -1 after adding with previous answer it becomes -4
// -6 is final answer
--a - --b + ++b + b--;


// 3. Write a program that takes input a name from user & 
// greet the user.
var name = prompt("Enter your name: ");
console.log("hello " + name + " Good morning!");





// 4. Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.



// 5. Take
// a) Take three subjects name from user and store them in 3 
// different variables.
// b) Total marks for each subject is 100, store it in another 
// variable.
// c) Take obtained marks for first subject from user and 
// stored it in different variable
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables.
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table)
var sub1 = prompt("Enter subject 1: ");
var sub2 = prompt("Enter subject 2: ");
var sub3 = prompt("Enter subject 3: ");
var eachMarks = 100;
var totalMarks = 100 * 3;

var marks1 = +prompt("Enter marks of subject 1: ");
var marks2 = +prompt("Enter marks of subject 2: ");
var marks3 = +prompt("Enter marks of subject 3: ");
var obtained = marks1 + marks2 + marks3;

var percentage1 = (marks1 / eachMarks) * 100;
var percentage2 = (marks2 / eachMarks) * 100;
var percentage3 = (marks3 / eachMarks) * 100;
var average = (percentage1 + percentage2 + percentage3) / 3;
console.log(sub1 + "    " + eachMarks + "   " + marks1 + "  " + percentage1 + "%");
console.log(sub2 + "    " + eachMarks + "   " + marks2 + "  " + percentage2 + "%");
console.log(sub3 + "    " + eachMarks + "   " + marks3 + "  " + percentage3 + "%");
console.log("        " + totalMarks + "   " + obtained + "  " + average + "%");

