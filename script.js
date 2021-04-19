//event is stored in local storage so that upon browser reload it persists
var eventDescription = {};
var btnSave = document.querySelector(".btnSave");
btnSave.addEventListener("click", saveEventDescription);
document.getElementById("9").innerHTML = localStorage.getItem("9");

function displayNotes (){
  document.getElementById("9").innerHTML = localStorage.getItem("9");
  document.getElementById("10").innerHTML = localStorage.getItem("10");
  document.getElementById("11").innerHTML = localStorage.getItem("11");
  document.getElementById("12").innerHTML = localStorage.getItem("12");
  document.getElementById("1").innerHTML = localStorage.getItem("1");
  document.getElementById("2").innerHTML = localStorage.getItem("2");
  document.getElementById("3").innerHTML = localStorage.getItem("3");
  document.getElementById("4").innerHTML = localStorage.getItem("4");
  document.getElementById("5").innerHTML = localStorage.getItem("5");

}
//enter the save event function
function saveEventDescription (event) {
  console.log("saveEventDescription");
  event.preventDefault();
  var input = document.querySelector(".schedInput").val();
  console.log(input);
  //var time = document.querySelector("#9").value;
  //console.log(time);


  localStorage.setItem("9", input);
  localStorage.setItem("10", input);

  //$(document).ready(function() {
   // $("#save").click(function() {
    //  var ptext = $("#eventDescription").text();
  
  }


displayNotes();
//use jquery to get the text content of any eventDescription timeblock


//enter the timekeeping function
var clock = document.getElementById('clock');

function updateTime() {
var now = moment();
var timeDisplay = now.format('dddd, MMMM Do YYYY, hh:mm:ssA');
clock.textContent=timeDisplay;
}
setInterval(updateTime, 1000); 
updateTime();






//the following was in an attempt to create an array to consolidate the hour blocks code in html
/*eventDescription =["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

//to begin to evaluate whether time blocks displayed are past, present, or future in relation to current time when page loads; then color code them accordingly
//the following was a test to determine how to evaluate now timer vs time block times
//if moment(now)=present, color timeblock red. if moment(now)<timeblock, color timeblock green for future. if moment(now)>timeblock, color timeblock gray for past.
let present = moment();
let past = moment()>pastMomentTime
let future = moment()<futureMomentTime

if(moment() === present) {
  //color that timeblock red
}
if(moment() > past) {
  //color that timeblock gray
}
else {//color the timeblock green}
  
}
*/
