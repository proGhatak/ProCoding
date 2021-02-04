// This code in done by @AnirbanGhatak. Please use freely at your own risk!

/*window.onload
{
  debugger;
  var btn = document.getElementById("btnAction");
  if (btn != null) {
    btn.addEventListener("click", onClickHandler);
    
  }
}*/
// This is to stylize the log.
var checkBox ; 
window.onload = () => {
  debugger;
  checkBox = document.getElementById("chkPreventAction");
  if (checkBox != null) {
    checkBox.addEventListener("click", onCheckBoxCheck);
  } else {
    console.error(
      "Value of btn is null. Source: JavaScriptFunctions.js Method Name: window.onload"
    );
  }

  var btn = document.getElementById("btnAction");
  if (btn != null) {
    btn.addEventListener("click", onClickHandler);
    btn.addEventListener("click", onClickHandler_2);
    //btn.onclick = onClickHandler_1;
  } else {
    console.error(
      "Value of btn is null. Source: JavaScriptFunctions.js Method Name: window.onload"
    );
  }
};

console.log(
  "%c--- Chapter 1 : Events in Javascript---",
  "display: inline-block ; border: 3px solid red ; border-radius: 7px ; font-weight: bold; " +
    "padding: 10px ; margin: 20px ;"
);
// searching for the button
//var btn = document.getElementById("btnAction");
//btn.addEventListener("click", onClickHandler);

function onClickHandler() {
  debugger;
  let target = document.getElementById("divTarget");
  target.style.backgroundColor = "red";
}

// function onClickHandler_1(a) {
//   debugger;
//   let target = document.getElementById("divTarget");
//   target.style.backgroundColor = "red";
//   //a.style.backgroundColor = "red";
// }

/*function onClickHandler_1(sender, args) {
  debugger;
  let target = document.getElementById("divTarget");
  target.style.backgroundColor = "red";
}*/

function onClickHandler_2() {
  debugger;
  let target = document.getElementById("divContainer");
  target.style.borderColor = "Blue";
}

function onCheckBoxCheck() {
  debugger;
  if (checkBox.checked) {
    let target = document.getElementById("divTarget");
    target.style.backgroundColor = "white";
  }
}


