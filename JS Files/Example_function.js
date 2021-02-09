function A(x) {
    function B(y) {
      function C(z) {
        console.log(x + y + z);
      }
      C(3);
    }
    B(2);
  }
  A(1); // logs 6 (1 + 2 + 3)

// name conflict example

  function outside() {
    var x = 5;
    function inside(x) {
      return x * 2;
    }
    return inside;
  }
  
  outside()(10);


  // Private data

  var getCode = (function() {
    var apiCode = '0]Eal(eh&2';    // A code we do not want outsiders to be able to modify...
  
    return function() {
      return apiCode;
    };
  })();
  
  getCode();

  // arguments object

  function myConcat(separator) {
    var result = ''; // initialize list
    var i;
    // iterate through arguments
    for (i = 1; i < arguments.length; i++) {
       result += arguments[i] + separator;
    }
    return result;
 }

 // Params & default parameter
 function multiply(a, b = 1) {
    return a * b;
  }
  
  multiply(5); // 5


  // Rest parameters 

  function multiply(multiplier, ...theArgs) {
    return theArgs.map(x => multiplier * x);
  }
  
  var arr = multiply(2, 1, 2, 3);
  console.log(arr); // [2, 4, 6]

  // Arrow functions 

  function Person() {
    this.age = 0;
  
    setInterval(() => {
      this.age++; // |this| properly refers to the person object
    }, 1000);
  }
  
  var p = new Person();

  // getter & setter 
  const obj = {
    log: ['a', 'b', 'c'],
    get latest() {
      if (this.log.length === 0) {
        return undefined;
      }
      return this.log[this.log.length - 1];
    }
  };

  const language = {
    set current(name) {
      this.log.push(name);
    },
    log: []
  };
  
  language.current = 'EN';
  language.current = 'FA';
  
  console.log(language.log);
