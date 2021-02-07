//-- This is always referres to Global Object / Window object except
// a. when This is being called from with in an object (All non static methods).
// b. when in web you are calling from with in an event. 

//------------------ Example 1 -------------------
function callerFunction() {
  debugger;
  let bird = {
    fName: "Flamingo",
    getBirdName: function () {
      console.log(` ConsoleLog 1: ${this.fName}`);
      console.log(this);
    },
  };

  function getBird() {
    console.log(` ConsoleLog 2: ${this.fName}`);
  }
  // calling the function above.
  getBird();

  // calling the function thats part of bird Object
  console.log(` ConsoleLog 3: ${bird.getBirdName()}`);
}

callerFunction();


//---------------- Example 2 --------------------------

class cObject {
  constructor() {
    this.a = 100;
    this.b = "cObject";
  }
}

let cObject_1 = new cObject();
console.log(`${cObject_1.a} ${cObject_1.b }`);

class xObject {
  constructor() {
    this.a = 100;
    this.b = "xObject";

    return { a: 500, b: "xObject_x" };
  }
}

let xObject_1 = new xObject();
console.log(`${xObject_1.a} ${xObject_1.b }`);

//---------------- Example 3 --------------------------

//function sampleData() {
  let person = {
    firstName: "Russel",
    LastName: "crow",
    Level: "Legend",
    getPerson: () => {
    //getPerson: function () {
      return `${this.firstName} ${this.LastName}`;
    }
  };
  
  console.log(person.getPerson());
  //}

  //----------------- Example 4-----------------

class TestClass {
  constructor() {
    const test = Object.getPrototypeOf(this);
    console.log(Object.getOwnPropertyNames(test));
  }

  Test_1() {}
  static Test_Static() {}
}

new TestClass();

// -------------- Example 5 ------------------

// Lets talk about DOM & WEB specifically.

window.onload = () => {
  // Lets talk about DOM & WEB specifically.
  function doSomething(e) {
    console.log(this);
    console.log(window);
    this.style.backgroundColor = "Red";
  }

  //get every elements of a HTML webpage
  var element = document.getElementById("btn1");
  element.addEventListener("click", doSomething, false);
 };

 //--------------- Example 6 -----------------

 function doSomething(e)
{
  console.log(this === e.currentTarget);
  console.log(this === e.target);
  console.log(this);
  console.log(window);
  this.style.backgroundColor = 'Red';
}

//get every elements of a HTML webpage
var elements = document.getElementsByTagName('*');
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', doSomething, false);
}
console.log({elements});

//