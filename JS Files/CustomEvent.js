//var event = new Event('tiger',{bubbles: true});
var target = document.getElementById("divTarget");
target.addEventListener("click",triggerEvent);
function triggerEvent() {
  debugger;
  const custEvent = new CustomEvent("tiger", { detail: "Roar" });

  let target_in = document.getElementById("divTarget");
  target_in.addEventListener("tiger", (e) => {
    debugger;
    alert(e.detail);
  });

  target_in.dispatchEvent(custEvent);
}

// projectName.ModuleName.customEvent = projectName.ModuleName.customEvent || {

// };
