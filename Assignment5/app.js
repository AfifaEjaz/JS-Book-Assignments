// 1. Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.
var num1 = 5;
var num2 = 3;
var add = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + add + "<br>");




// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
var num1 = 5;
var num2 = 3;
var sub = num1 - num2;
var muul = num1 * num2;
var div = num1 / num2;
document.write("Subtraction of " + num2 + " from " + num1 + " is " + sub + "<br>");
document.write("multiplication of " + num1 + " and " + num2 + " is " + muul);
document.write("<br>Division of " + num1 + " and " + num2 + " is " + div);




// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value 
// by 3. 
// l. Output : “The remainder is : 0”.
var x;
console.log("Value after variable declaration is: "+ x);
x = 5;
console.log("Initial value is " + x);
x++;
console.log("Value after increment is " + x);
x= x + 7;
console.log("Value after addition is " + x);
x--;
console.log("Value after decrement is " + x);
x = x % 3;
console.log("The remainder is " + x);




// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
console.log("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR");




// 5. Write a script to display multiplication table of any number in your browser. E.g
var num = 4;
for(i=1 ; i<=10 ; i++)
{
    console.log(num + " x " + i + " = " + num*i)
}



// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.

var celsius = 25
var fahrenhite ;
fahrenhite = (celsius * 9 / 5) + 32
console.log(celsius + "℃ is " + fahrenhite + "°F" );




// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”
var c; 
var f = 70;
c = (f - 32) * 5 / 9;
console.log(f + "°F is "  + c + "℃" );




// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
var item1 = 650;
var item2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var shippingCharges = 100;
var totalCost = item1 * quantity1 + item2 * quantity2 + shippingCharges;
console.log("Price if item 1 " + item1);
console.log("Quantity if item 1 " + quantity1);
console.log("Price of item 2 " + item2);
console.log("Quantity of item 2 " + quantity2);
console.log("Total cost of your order is " + totalCost);





// 8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser
var totalmarks = 980;
var marksobtained = 804;
var percentage = (marksobtained / totalmarks) * 100;
console.log("Total marks: " + totalmarks);
console.log("Marks obtained: " + marksobtained);
console.log("Percentage: " + percentage + "%");




// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)
var dollar = 10;
var riyal = 25;
console.log("Total currency in PKR: " + ((dollar * 104.80) + (riyal * 28)));




// 10. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
var num = 2;
console.log("result " + (((num + 5) * 10) / 2)); 




// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
var current = 2023;
var birthyear = 2001;
age = current - birthyear;
console.log("Your age: " + age);



// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
// Output them to the screen like so: “They are either NN or NN years old”.
var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.14 * (radius **2);
console.log("circumferece is " + circumference)
console.log("area is " + area);




// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”
var snack = "lays";
var currentAge = 21;
var maxAge = 85;
var amount = 3;
total =  (maxAge - currentAge) * amount;
console.log("You will need " + total + " " + snack + " to last you until the ripe old age of " + maxAge);