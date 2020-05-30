var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab
var count = 0 //patient score


function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n);
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    countChecker()
    document.getElementById("nextBtn").addEventListener("click", function(){
      renderPage()
    });  
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  var arr = [];
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    //Push the checked status of each radio input into an array
    if(y[i].type == "radio"){
      arr.push(y[i].checked);
    }
    
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  //if none of the input is checked
  if (y[0].type == "radio" && !arr.includes(true)) {
    //add an "invalid" class to the field
    y[i].className += " invalid";
    //and set the current valid status to false
    valid = false;
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }

  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

function countChecker(){
  var x = document.getElementsByClassName("tab")
  for(var i=0; i < x.length; i++){
    var y = x[i].getElementsByTagName("input");
    for(var j=0; j < y.length; j++){
      if(y[j].value == "male" && y[j].checked == true){
        count += 1
      }
      if(y[j].value == "40-49" && y[j].checked == true){
        count += 1
      }else if(y[j].value == "50-59" && y[j].checked == true){
        count += 1
      }else if (y[j].value == "60+" && y[j].checked == true){
        count +=1
      }
      if(y[j].value == "little" && y[j].checked == true){
        count += 1
      }
      if(y[j].name = "hbpmedicine" && y[j].value == "no" && y[j].checked == true){
        count += 1
      }else if(y[j].value == "yes" && y[j].checked == true){
        count += 1
      }
    }
  }
  bmiCalculator()
  
}

function bmiCalculator(){
  var x = document.getElementsByClassName("tab");
  var y = x[2].getElementsByTagName("input")
  var weight = Number(y[0].value)
  var z = x[3].getElementsByTagName("input")
  var height = (Number(z[0].value))/10000
  var bmi = weight/height
  if(29.9 > bmi > 25){
    count += 1
  }else if(39.9 > bmi > 30){
    count += 2
  }else if(bmi >= 40){
    count += 3
  }
}


//function to choose what page to render
function renderPage(){
  if(count > 5){
    location.replace("hr.html")
  }else{
    location.replace("lr.html")
  }
}