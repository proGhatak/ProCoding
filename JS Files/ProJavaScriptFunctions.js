var projectName = projectName || {};
projectName.ModuleName = projectName.ModuleName || {

  EventHandler_1: function () {
      debugger;
    var btn = document.getElementById("btnAction");
    if (btn != null || btn != "undefined") {
      btn.addEventListener("click", projectName.ModuleName.onClickHandler);
      btn.addEventListener("click", projectName.ModuleName.onClickHandler_2);
    }
  },

  EventHandler_2: function () {
      debugger;
    projectName.ModuleName.onClickHandler();
    projectName.ModuleName.onClickHandler_2();
  },

  onClickHandler: function(){
    let target = document.getElementById("divTarget");
    target.style.backgroundColor = "red";
  },

  onClickHandler_2: function() {
    let target = document.getElementById("divContainer");
    target.style.borderColor = "Blue";
  }

};
projectName.ModuleName.sampleFunction = function()
{
  var btn = document.getElementById("btnAction");
    if (btn != null || btn != "undefined") {
      btn.addEventListener("click", projectName.ModuleName.onClickHandler);
      btn.addEventListener("click", projectName.ModuleName.onClickHandler_2);
    }
}
window.onload
{
  projectName.ModuleName.sampleFunction();
};