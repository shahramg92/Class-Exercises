// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

function totalAmount(total, quality); {
  let tip = 0;
  if (quality == 'good') {
    tip = 0.20;
  }
  else if (quality == 'fair') {
    tip = 0.15;
  }
  else if (quality == 'bad') {
    tip = 0.10;
  }
  else {
    console.log("There was an error in your input!");
  }

  total_amount = total + (total * tip)
  return total_amount

}
