// Allow the counter to either increment 1 or decrement by 1 by calling the increment and decrement methods, respectively. Note: now the counter needs to return an object rather than a function.

function myCounter(start) {
    var object = {
      increment: function() {return start+=1;},
      decrement: function() {return start-=1;}
    };
    return object;
}

var count = myCounter(4);
console.log(count.increment());
console.log(count.increment());
console.log(count.decrement());
console.log(count.decrement());
