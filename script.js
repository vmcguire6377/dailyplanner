//event is stored in local storage so that upon browser reload it persists
var eventDescription = {};
var btn = document.getElementById("save")
btn.addEventListener("click", saveEventDescription);
document.getElementById("eventDescription").innerHTML = localStorage.getItem("eventDescription");


//enter the save event function
function saveEventDescription (event) {
  event.preventDefault();
  var input = document.getElementById("eventDescription");
  console.log(input.value);
  localStorage.setItem("eventDescription", input.value);

  $(document).ready(function() {
    $("#save").click(function() {
      var ptext = $("#eventDescription").text();
    })
  })
}

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