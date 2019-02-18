// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
$(document).ready(function(){

"use strict";
var aboutme = 
{
    firstName: "Ron",
    lastName: "Chacko",
    jobTitle: "ADI Analyst",
    homeOffice:"Austin - Domain",
    tellMeMore:"As a developer consultant, I started my career as a C/Unix programmer and more recently as a DevOps Engineer. I'm currently an ADI analyst helping product teams gain meaningful insights from their products. At HomeAway, I'm intrigued by our web product and would love to channel my coding efforts toward its ongoing development."
}

// using jQuery and the object above, display the information as the appropriate button is clicked
var btnFname = $("#Fname");
btnFname.on("click", function() {
    var opFname = $("#opFname");
    opFname.text(aboutme.firstName);
} );

var btnLname = $("#Lname");
btnLname.on("click", function() {
    var opLname = $("#opLname");
    opLname.text(aboutme.lastName);
} );

var btnJtitle = $("#Jtitle");
btnJtitle.on("click", function() {
    var opJtitle = $("#opJtitle");
    opJtitle.text(aboutme.jobTitle);
} );

var btnHoffice = $("#Hoffice");
btnHoffice.on("click", function() {
    var opHoffice = $("#opHoffice");
    opHoffice.text(aboutme.homeOffice);
} );

var btnMore = $("#More");
btnMore.on("click", function() {
    var opMore = $("#opMore");
    opMore.text(aboutme.tellMeMore);
} );

});