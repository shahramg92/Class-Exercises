// Write a function printSquare which is given a size and prints a square of that size using asterisks.
  
function printSquare(size){
  for (i = 0; i < size; i++) {
    console.log('*'.repeat(size));
  }
};

printSquare(3);
