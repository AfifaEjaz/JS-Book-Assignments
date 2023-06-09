//  Declare an empty array using JS literal notation to store
// student names in future.
var arr = []


// 2. Declare an empty array using JS object notation to store
// student names in future.
var arr = {}


// 3. Declare and initialize a strings array.
var arr = ["string1","string2","string3"]


// 4. Declare and initialize a numbers array.
var arr = [1,2,3,4,5]


// 5. Declare and initialize a boolean array.
let arr1 = [];
for (let i = 0; i < 5; i += 1) 
{
    arr1.push(true);
}
console.log(arr1);


// 6. Declare and initialize a mixed array.
var arr = [1,2,3,"string",,]


// Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like
var arr = ["1)SSC\n","2)HSC\n","3)BCS\n","4)BS\n","5)BCOM\n","6)MS\n","7)M.Phil\n","8)PhD"]
alert(arr)


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:
var names = ["amna","kiran","Ali"]
var score = [320,230,480]

console.log("score of " + names[0] + " is " + score[0] +
           "\nscore of " + names[1] + " is " + score[1] +
           "\nscore of " + names[2] + " is " + score[2] )


// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
var colors = ["pink","blue","red","yellow","green"]
alert(colors)
var beginning = prompt("what color do you want to add to the beginning:?")
colors.unshift(beginning)
alert(colors)
var end = prompt("what color do you want to add to the end:?")
colors.push(end)
alert(colors)
colors.push("purple","brown")
alert(colors)
colors.shift()
alert(colors)
colors.pop()
alert(colors)
var location = +prompt("at which index you want to add a color")
var c = prompt("which color name yoy want to enter")
colors.splice(location,0,c)
alert(colors)
var location2 = +prompt("at which index you want to delete a color")
var c2 = +prompt("how many colours you want to delete")
colors.splice(location2,c2)
alert(colors)


// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method
var score = [140000, 104, 99,655];
alert("score of students" + score)
score.sort(function(a, b) {
  return a - b;
});

alert("ordered score of students" + score);


// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.
var cities = ["karachi","islamabad","lahore","multan","peshawar"]
alert(cities)
var selectedCities = cities.slice(2,4)
alert(selectedCities)



// 12. Write a program to create a single string from the 
// below mentioned array
var arr = ["This ","is ", "my ", "cat"];
alert(arr)
var text = arr.join('');
alert(text)


// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out
var array = [];
array.push(1);
array.push(2);
array.push(3);
console.log(array)
array.shift();
console.log(array)


// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In First Out
var array = [];
array.push(1);
array.push(2);
array.push(3);
console.log(array)
array.pop();
console.log(array)


// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your 
//  browser using document.write() method
var array = ["Apple","Samsung","Motrola","Nokia","Sony","Haier"];
document.write()
