// 1. Write a program that displays current date and time in 
// your browser
var now = new Date()
document.write(now)



// 2. Write a program that alerts the current month in words. 
// For example December.
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var now = new Date()
document.write(monthNames[now.getMonth()])


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.
var dayNames = ["Sunday","monday", "tuesday", "wednesday", "thursday", "friday", "Saturday" ];

var now = new Date()
var day = dayNames[now.getDay()]
var letters = day.slice(0,3)
alert(letters)



// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.
var dayNames = ["Sunday","monday", "tuesday", "wednesday", "thursday", "friday", "Saturday" ];

var now = new Date()
var today = dayNames[now.getDay()]
if(today == 'Saturday' || today == 'Sunday')
{
    alert("It's a fun day")
}


// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.
var now = new Date()
var date = now.getDate()

if(date < 16)
{
    alert("First fifteen days of the month")
}
else{
    alert("Last days of the month")
}

// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.
var current = new Date()
var before = new Date("01-01-1970")
var difference =  before.getTime() -  current.getTime()
var minutes = Math.abs(Math.round((difference/1000)/60));
console.log(minutes)



// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.
 var now = new Date()
 var time = now.getHours()
 console.log(time)


 if(time < 12)
 {
     alert("Its AM")
 }
 else{
   alert("its PM")
 }


// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.
var laterDate = new Date("2020-12-31");
console.log(laterDate)


// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
var thisRamadan = new Date("2023-03-24");
var firstRamadan = new Date("2015-06-18");
var difference = (thisRamadan.getTime() - firstRamadan.getTime())/1000*60*60*24
console.log(difference)



// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.
var referenceDate = new Date("2015-12-05")
var begining = new Date("2015-01-01")
var seconds = (referenceDate.getTime() - begining.getTime())/1000
console.log(seconds)



// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.
var current = new Date()
console.log(current)
var hours = 1;

current.setTime(current.getTime() + hours * 60 * 60 * 1000);
console.log(current)


// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?
var current = new Date()
console.log(current)
var years = 100;

current.setFullYear(current.getFullYear() - years)
console.log(current)


// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.
var age = prompt("Enter your age")
var current = new Date()
var birthYear = current.getFullYear() - age
console.log("Your birth year is " + birthYear)



// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

function BillGenerator() 
{
   
    var customerName = document.getElementById("name").value
    var month = document.getElementById("month").value
    var unit = document.getElementById("units").value
    var chargesPerUnit = 3.23
    var netAmount = Math.round((unit * chargesPerUnit)*100)/100
    console.log(netAmount)
    var lateCharges = 350
    var grossAmount = Math.round((netAmount + lateCharges)*100)/100
    console.log(grossAmount)

    document.getElementById("name-display").innerHTML = "Customer Name: " + customerName
    document.getElementById("month-diplay").innerHTML = "Month: " + month
    document.getElementById("units-display").innerHTML = "Units: " + unit
    document.getElementById("perUnit-display").innerHTML = "Charge Per Unit: " + chargesPerUnit
    document.getElementById("netamount-display").innerHTML = "Net Amount Payable (within due date): " + netAmount
    document.getElementById("lateCharges-display").innerHTML = "Late Payment Charges: " + lateCharges
    document.getElementById("grossAmount-display").innerHTML = "Gross Amount Payable (After Due Date): " + grossAmount

}