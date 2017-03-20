

function outer (innerArg) {
    innerArg(); // call the inner method
}

function inner () {
      console.log("Hello World From Inner Function");  
      document.write("Hello World From Inner Function");
}

outer(inner);// take reference as inner function object