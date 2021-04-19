
var eventDescription = {};
var btn = document.querySelector("saveBtn");
saveBtn.addEventListener("click", saveEventDescription());
var savedInfo = [];
var results = localStorage.getItem("schedData");

var schedInput = document.getElementById("9am");
var schedInput = document.getElementById("10am");
var schedInput = document.getElementById("11am");
var schedInput = document.getElementById("12pm");
var schedInput = document.getElementById("1pm");
var schedInput = document.getElementById("2pm");
var schedInput = document.getElementById("3pm");
var schedInput = document.getElementById("4pm");
var schedInput = document.getElementById("5pm");

//this is not working***
function displayItems () {
  results = localStorage.getItem("schedData");
  document.getElementById("schedInput").innerHTML = schedInput;
  console.log(displayItems);
  return(results);
}


//enter the save event function
function saveEventDescription (event) {
  event.preventDefault();

  var allInputs = document.querySelectorAll(".schedInput")
  console.log(allInputs);

 

  for(var i = 0; i < allInputs.length; i++) {
    var endPoint = {}
    endPoint.name = allInputs[i].id
    endPoint.value= allInputs[i].value
    savedInfo.push(endPoint);
    
  }

//event is stored in local storage so that upon browser reload it persists
 localStorage.getItem("savedInfo");
 localStorage.setItem("schedData", JSON.stringify(savedInfo));
 localStorage.setItem("9am", input);
  localStorage.setItem("10am", input);
  localStorage.setItem("11am", input);
  localStorage.setItem("12pm", input);
  localStorage.setItem("1pm", input);
  localStorage.setItem("2pm", input);
  localStorage.setItem("3pm", input);
  localStorage.setItem("4pm", input);
  localStorage.setItem("5pm", input);


 
}

//event is stored in local storage so that upon browser reload it persists
/*var eventDescription = {};
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
  var allInputs = document.querySelectorAll(".schedInput")
  console.log(allInputs);

  for(var i = 0; i < allInputs.length; i++) {
    var endPoint = {}
    endPoint.name = allInputs[i].id
    endPoint.value= allInputs[i].value
    savedInfo.push(endPoint);
    
  }

  var input = document.querySelectorAll
  (".schedInput").val();
  console.log(input);
  //var time = document.querySelector("#9").value;
  //console.log(time);


  localStorage.setItem("9", input);
  localStorage.setItem("10", input);
  localStorage.setItem("11", input);
  localStorage.setItem("12", input);
  localStorage.setItem("1", input);
  localStorage.setItem("2", input);
  localStorage.setItem("3", input);
  localStorage.setItem("4", input);
  localStorage.setItem("5", input);

  //$(document).ready(function() {
   // $("#save").click(function() {
    //  var ptext = $("#eventDescription").text();
    //event is stored in local storage so that upon browser reload it persists
 localStorage.getItem("savedInfo");
 localStorage.setItem("schedData"), JSON.stringify(savedInfo);

  
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
saveEventDescription();





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
