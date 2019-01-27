// Set the date we're counting down to
var countDownDate1 = new Date("dec 01, 2019 9:04:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate1 - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("ftbl").innerHTML = days + "D : " + hours + "Hr : "
    + minutes + "m : " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("ftbl").innerHTML = "EXPIRED";
    }
}, 1000);
// --------------------------------------------------------------------------------------
var countDownDate2 = new Date("nov 23, 2019 8:04:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate2 - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("cooler").innerHTML = days + "D : " + hours + "Hr : "
    + minutes + "m : " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("cooler").innerHTML = "EXPIRED";
    }
}, 1000);
// --------------------------------------------------------------------------------------
var countDownDate3 = new Date("nov 24, 2019 8:04:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate3 - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("book").innerHTML = days + "D : " + hours + "Hr : "
    + minutes + "m : " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("book").innerHTML = "EXPIRED";
    }
}, 1000);
// --------------------------------------------------------------------------------------

var countDownDate4 = new Date("nov 25, 2019 8:04:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate4 - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("speaker").innerHTML = days + "D : " + hours + "Hr : "
    + minutes + "m : " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("speaker").innerHTML = "EXPIRED";
    }
}, 1000);
// --------------------------------------------------------------------------------------

var countDownDate5 = new Date("nov 26, 2019 8:04:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate5 - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("earphone").innerHTML = days + "D : " + hours + "Hr : "
    + minutes + "m : " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("earphone").innerHTML = "EXPIRED";
    }
}, 1000);
// --------------------------------------------------------------------------------------

var countDownDate6 = new Date("nov 27, 2019 8:04:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate6 - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("pillow").innerHTML = days + "D : " + hours + "Hr : "
    + minutes + "m : " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("pillow").innerHTML = "EXPIRED";
    }
}, 1000);
// --------------------------------------------------------------------------------------

var countDownDate7 = new Date("nov 28, 2019 8:04:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate7 - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("mouse").innerHTML = days + "D : " + hours + "Hr : "
    + minutes + "m : " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("mouse").innerHTML = "EXPIRED";
    }
}, 1000);
// --------------------------------------------------------------------------------------

var countDownDate8 = new Date("nov 29, 2019 8:04:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate8 - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("keyboard").innerHTML = days + "D : " + hours + "Hr : "
    + minutes + "m : " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("keyboard").innerHTML = "EXPIRED";
    }
}, 1000);
// --------------------------------------------------------------------------------------
