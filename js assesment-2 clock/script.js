// ===============================
// Digital Clock using JavaScript
// Concepts Used:
// 1. setInterval()
// 2. Date()
// 3. Arrays
// 4. innerHTML
// ===============================

// Arrays for Days and Months
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", 
              "July", "August", "September", "October", "November", "December"];

// Function to update clock
function updateClock() {

    // Create new Date object
    var now = new Date();

    // Get Day, Date, Month, Year
    var dayName = days[now.getDay()];
    var monthName = months[now.getMonth()];
    var date = now.getDate();
    var year = now.getFullYear();

    // Get Hours, Minutes, Seconds
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // AM / PM Logic
    var ampm = hours >= 12 ? "PM" : "AM";

    // Convert 24hr to 12hr format
    hours = hours % 12;
    hours = hours ? hours : 12;

    // Add leading zero
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    // Display Date using innerHTML
    document.getElementById("date").innerHTML =
        dayName + ", " + monthName + " " + date + ", " + year;

    // Display Time using innerHTML
    document.getElementById("clock").innerHTML =
        hours + ":" + minutes + ":" + seconds + " " + ampm;

    // Console Output (Clean Format)
    console.clear();
    console.log("Current Date: " + dayName + ", " + monthName + " " + date + ", " + year);
    console.log("Current Time: " + hours + ":" + minutes + ":" + seconds + " " + ampm);
}

// Run clock every 1 second
setInterval(updateClock, 1000);

// Call function immediately
updateClock();
