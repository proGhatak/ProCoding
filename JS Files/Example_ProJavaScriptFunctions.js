window.onload = () => {
  projectName.ModuleName.sampleFunction();
};
var projectName = projectName || {};
projectName.ModuleName = projectName.ModuleName || {
  EventHandler_1: () => {
    debugger;
    var btn = document.getElementById("btnAction");
    if (btn != null || btn != "undefined") {
      btn.addEventListener("click", projectName.ModuleName.onClickHandler);
      btn.addEventListener("click", projectName.ModuleName.onClickHandler_2);
    }
  },

  EventHandler_2: () => {
    debugger;
    projectName.ModuleName.onClickHandler();
    projectName.ModuleName.onClickHandler_2();
  },

  onClickHandler: () => {
    debugger;
    let target = document.getElementById("divTarget");
    target.style.backgroundColor = "red";
  },

  onClickHandler_2: () => {
    debugger;
    let target = document.getElementById("divContainer");
    target.style.borderColor = "Blue";
  },

  onCheckBoxCheck: ()=> {
    debugger;
    if (checkBox.checked) {
      let target = document.getElementById("divTarget");
      target.style.backgroundColor = "white";
    }
  }
};

projectName.ModuleName.sampleFunction = () => {
  debugger;
  checkBox = document.getElementById("chkPreventAction");
  if (checkBox != null) {
    checkBox.addEventListener("click", projectName.ModuleName.onCheckBoxCheck);
  } else {
    console.error(
      "Value of btn is null. Source: JavaScriptFunctions.js Method Name: window.onload"
    );
  }

  let btn = document.getElementById("btnAction");
  if (btn != null || btn != "undefined") {
    btn.addEventListener("click", projectName.ModuleName.onClickHandler);
    btn.addEventListener("click", projectName.ModuleName.onClickHandler_2);
  } else {
    console.error(
      "Value of btn is null. Source: JavaScriptFunctions.js Method Name: window.onload"
    );
  }
};

projectName.ModuleName.checkBox;


