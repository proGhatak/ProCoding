function A(x) {
    function B(y) {
      function C(z) {
        console.log(x + y + z);
      }
      C(3);
    }
    B(2);
  }
  A(1); 
 
  
// name conflict example
function outside() {
    //   debugger;
    var x = 5;    
    function inside(x) {
        // debugger;
      return x * 2;
    }
    // inside(x);
    return inside;
  }
  
  console.log(outside()(20));
   

    // Private data

    var getCode = (function() {
        let apiCode = '0]Eal(eh&2';    // A code we do not want outsiders to be able to modify...
      
        return function() {
          return apiCode;
        };
      })(); 
      console.log( getCode());
     

     function myConcat(separator) {
        var result = ''; // initialize list
        var i;
        // iterate through arguments
        for (i = 1; i < arguments.length; i++) {
           result += arguments[i] + separator;
        }
        console.log(arguments.length);
        console.log(separator.length);
        return result;
     }

     console.log(myConcat(',','aa','bb','cc','dd'));
     
     function multiply(a , b = 1) {
        return a * b;
      }
      
      console.log(multiply(5)); 
     

    function multiply(multiplier, ...infinite) {
        return infinite.map(x => multiplier * x);
      }
      
      var arr = multiply(2, 1, 2, 3);
      console.log(arr);

      var  multiply = (multiplier, ...theArgs)=> 
      {
        return theArgs.map(x => multiplier * x);
      }

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

  console.log(obj.latest);

  const language = {
    set current(name) {
      this.log.push(name);
    },
    log: []
  };
  
  language.current = 'EN';
  language.current = 'FA';
  
  console.log(language.log);  
 

    // Call Back functions
    var greeting = (name) => {
        alert('Hello ' + name);
      }
      
      function processUserInput(callback) {
        var name = prompt('Please enter your name.');
        callback(name);
      }
      
      processUserInput(greeting);

