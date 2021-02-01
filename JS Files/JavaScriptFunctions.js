/*window.onload;
{
  debugger;
  var btn = document.getElementById("btnAction");
  if (btn != null) {
    btn.addEventListener("click", onClickHandler);
    
  }
}*/

var btn = document.getElementById("btnAction");
  if (btn != null) {
    btn.addEventListener("click", onClickHandler);
    btn.addEventListener("click", onClickHandler_2);
    //btn.onclick = onClickHandler_1;
}

function onClickHandler() {
  debugger;
  let target = document.getElementById("divTarget");
  target.style.backgroundColor = "red";
}

function onClickHandler_1(a) {
  debugger;
  let target = document.getElementById("divTarget");
  target.style.backgroundColor = "red";
  //a.style.backgroundColor = "red";
}

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