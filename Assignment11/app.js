// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.
var firstName = prompt("Enter first name")
var lastName = prompt("Enter last name")
var fullName = firstName + " " + lastName
document.write(fullName)



// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser
var input = prompt("Enter your favorite mobile phone model")
document.write(input.length)

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
var string = "pakistani"
document.write("string: " + string + "<br>")
document.write("Index of n: " + string.indexOf("n"))



// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.
var text = "Hello World";
var result = text.lastIndexOf("l");
document.write("string: " + text + "<br>")
document.write("Last Index of l: " + result)



// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.
var string = "pakistani"
document.write("string: " + string + "<br>")
document.write("character at index 3: " + string.charAt(3))



// 6. Repeat Q1 using string concat() method
var firstName = prompt("Enter first name")
var lastName = prompt("Enter last name")
var fullName = firstName.concat(" ",lastName)
document.write(fullName)


// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.
var replace = "hyderabad"
document.write(replace + "<br>")
document.write(replace.replace("hyder","islam"))



// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;
var message = "Ali and Sami are best friends. They play cricket and football together."
document.write(message + "<br>")
document.write(message.replaceAll("and","&"))


// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser
var string = "472"
document.write("value: " + string + "<br>")
document.write(typeof(string) + "<br>")
document.write("value: " + string + "<br>")
var integer = parseInt(string)
document.write(typeof(integer))



// 10. Write a program that takes user input. Convert and 
// show the input in capital letters.
var input = prompt("Enter string in small letters")
document.write(input.toUpperCase())


// 11. Write a program that takes user input. Convert and 
// show the input in title case.
var input = prompt("Enter string in small letters")
var capital = input.slice(0,1).toUpperCase()
var small = input.slice(1,input.length).toLowerCase()
document.write(capital + small)



// 12. Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
var num = 35.36 ;
document.write(num.toString())


// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .

var userName = +prompt("Enter Your User name")

for(i=0 ; i<userName.length ; i++)
{
if(userName.charAt(i) == 33 || userName.charAt(i) == 44 || userName.charAt(i) == 46 || userName.charAt(i) == 64 )
{
    alert("Please Enter a Valid Username")
}
}


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var search = prompt("What do you want to order?")


    for (i = 0; i < A.length; i++) 
    {
        var a = search.toLowerCase()
        if (a == A[i]) 
        document.write(a + " is available at index " + i + " in our bakery")
        else    
        document.write("we are sorry. " + a + " is not available in our bakery")
    }



// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.



// 16. Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser
var university = "University of Karachi"
var arr = university.split("")
for (i = 0; i < arr.length; i++)
{
    document.write(arr[i] + "<br>")
} 


// 17. Write a program to display the last character of a user 
// input
var input = prompt("Enter something")
document.write("Last character of input: " + input.charAt(input.length-1))

// 18. You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string
var string = "The quick brown fox jumps over the lazy dog";
var count = count(string,'the')
alert(count(string,'the'))
alert(count)
