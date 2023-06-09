// // 1. Declare and initialize an empty multidimensional array.
// // (Array of arrays)
var arr = [[1,2],[3,4],[5,6]];
alert(arr)


// // 2. Declare and initialize a multidimensional array 
// // representing the following matrix:
var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for (i=0 ; i<arr.length ; i++)
{
document.write(arr[i] + "<br>")
}



// // 3. Write a program to print numeric counting from 1 to 10.
// var arr = [1,2,3,4,5,6,7,8,9,10]
for (i = 1; i <= 10; i++) {
    console.log(i)
}


// // 4. Write a program to print multiplication table of any 
// // number using for loop. Table number & length should be 
// // taken as an input from user
var num = +prompt("Enter a number to show its multiplication table")
for(i=1;i<=10;i++)
{
    console.log(num + " x " + i + " = " + num*i)
}


// // 5. Write a program to print items of the following array 
// // using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}


// // 6. Generate the following series in your browser. See 
// // example output.
// // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write( "Counting: ")
for(i=1 ; i<=15 ;i++)
{
    document.write(i + ",")
}
document.write( "<br>")
document.write( "Reverse Counting: ")
for(i=10 ; i>=1 ;i--)
{
    document.write(i + ",")
}
document.write( "<br>")
document.write( "Even: ")
for(i=0 ; i<=20 ;i++)
{
    if(i%2==0)
    {
    document.write(i + ",")
    }
}
document.write( "<br>")
document.write( "Odd: ")
for(i=0 ; i<=20 ;i++)
{
    if(i%2 != 0)
    {
    document.write(i + ",")
    }
}
document.write( "<br>")
document.write( "Series: ")
for(i=1 ; i<=20 ;i++)
{
    if(i%2==0)
    {
    document.write(i + "k,")
    }
}



// // 7. You have an array
// // A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// // Write a program to enable “search by user input” in an 
// // array.
// // After searching, prompt the user whether the given item is
// // found in the list or not. Example:
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var search = prompt("What do you want to order?")

if (search == A[i]) {
    for (i = 0; i < A.length; i++) {
        document.write(search + " is available at index " + i + " in our bakery")
    }
}
else {
    document.write("we are sorry. " + search + " is not available in our bakery")
}



// // 8. Write a program to identify the largest number in the
// // given array.
// // A = [24, 53, 78, 91, 12].
var arr = [24, 53, 78, 91, 12]
console.log(Math.max(...arr))


// // 9. Write a program to identify the smallest number in the
// // given array.
// // A = [24, 53, 78, 91, 12]
var arr = [24, 53, 78, 91, 12]
console.log(Math.min(...arr))



// // 10. Write a program to print multiples of 5 ranging 1 to
// // 100
document.write( "<br>")
for(i=5 ; i<=100 ;i++)
{
    if(i%5==0)
         {
        document.write(i + ",")
         }
}
