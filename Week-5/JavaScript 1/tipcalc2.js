// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

function totalAmount(total, quality, bill) {
    let tip = 0;
    if (quality == 'good') {
      tip = 0.2;
    }
    else if (quality == 'fair') {
      tip = 0.15;
    }
    else if (quality == 'bad') {
      tip = 0.10;
    }
    else {
      return('Sorry but that option is not possible')
    }
    total = (tip * bill) + bill;
    




}
