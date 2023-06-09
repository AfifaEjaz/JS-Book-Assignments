// 1. Write a function that displays current date & time in your 
// browser.
function dateAndTime()
{
    var current = new Date()
    document.write(current)
}
dateAndTime()


// 2. Write a function that takes first & last name and then it 
// greets the user using his full name.
function fullName(fname,lname)
{
    var greet = fname + " " + lname
    return "Hello, " + greet
}
var firstName = prompt("Enter your first name: ")
var lastName = prompt("Enter your last name: ")
document.write(fullName(firstName,lastName))



// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.
function Sum(firstNum, secondNum)
{
    var Add = firstNum + secondNum
    return "Sum of " + firstNum + " and " + secondNum + " is: " + Add
}
var num1 = +prompt("Enter first number: ")
var num2 = +prompt("Enter second num: ")
document.write(Sum(num1, num2))




// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
function Calculator(firstNum, secondNum,sign) 
{
    var add = firstNum + secondNum
    var sub = firstNum - secondNum
    var mul = firstNum * secondNum
    var div= firstNum / secondNum

    if(sign == '+')
    {

        return "Sum of " + firstNum + " and " + secondNum + " is: " + add
    }
    else if(sign == '-')
    {
        return "Subtraction " + secondNum + " from " + firstNum + " is: " + sub
    }
    else if(sign == '*')
    {
        return "Multiplication of " + firstNum + " and " + secondNum + " is: " + mul
    }
    else 
    {
        return "division of " + firstNum + " and " + secondNum + " is: " + div
    }

}
var num1 = +prompt("Enter first number: ")
var num2 = +prompt("Enter second num: ")
var operator = prompt("Enter Operator (+,-,*,/): ")

document.write(Calculator(num1, num2, operator))



// 5. Write a function that squares its argument.
function Squares(num)
{
 var square = Math.pow(num,2)
 console.log(square)
}

var value = +prompt("Enter a value to get its square")
Squares(value)

// 6. Write a function that computes factorial of a number.
function factorialComputation(num) 
{
    for (var i = num - 1; i > 0; i--)
        num = num * i
    console.log(num)
}

var fact = +prompt("Enter a value to get its factorial")
factorialComputation(fact)



// 7. Write a function that take start and end number as inputs
// & display counting in your browser.
function counting(sNum,eNum)
{
    document.write("Counting from " + sNum + " to " + eNum + " is:" + " <br>")
    for(var i = sNum ; i <= eNum ; i++)
    document.write( i + " <br>" ) 
}

var startNum = +prompt("Enter starting value")
var endNum = +prompt("Enter ending value")
counting(startNum,endNum)



// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
function calculateHypotenuse()
{
    var base = +prompt("Enter starting value")
    var prependicular = +prompt("Enter ending value")

    function calculateSquare()
    {
        var hypotenuse = Math.sqrt((base**2) + (prependicular**2))
        return hypotenuse;
    }
    console.log(calculateSquare())
}
console.log(calculateHypotenuse())


// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// i
function calculateArea(width,height)
 {
    var sNum;
    var eNum;

    document.write("Counting from " + sNum + " to " + eNum + " is:" + " <br>")
    for(var i = sNum ; i <= eNum ; i++)
    document.write( i + " <br>" ) 
 }

var width = +prompt("Enter width")
var height = +prompt("Enter height")
calculateArea(width,height)




// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.
function checkPalindrome(string) 
{
    var flag = 1;
    for (var i = 0; i < string.length / 2; i++) 
    {
        if (string[i] !== string[string.length - 1 - i]) 
        {
            flag = 0;
        }
    }

    if (flag == 1) 
    {
        alert('It is a palindrome');
    }
    else 
    {
        alert('It is not a palindrome');
    }

}
var string = prompt("Enter a string")
checkPalindrome(string)


// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));



// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
var string = "Web Development Tutorial"
 
function longestWord(string) 
{
  var words = string.split(" ");
  var longestWord = "";
  for (var i = 0; i < words.length; i++) 
  {
    if (longestWord.length < words[i].length) 
    {
      longestWord = words[i];
    }
  }
  console.log("The longest word in the string is: " + longestWord);
  return longestWord;
}
longestWord(string);



// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'
function countLetter(string, letter) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
      if (string.charAt(i) === letter) {
        count++;
      }
    }
    console.log("The letter " + letter + "occurs" + count + "times in the string.");
    return count;
  }
  countLetter("JSResourceS.com", "o");


