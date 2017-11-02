var fs = require('fs')

var output = fs.readFileSync('data.txt', 'utf8')
  .trim()
  //  (removes any extra line breaks)
  .split('\n')
  // put each on new line
  .map(line => line.split('\t'))
  // map every line and split it on each tab character
  // now we have an array for each line
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || []
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers
  }, {})

  // reduce takes two arguments: a function and a starting argument


console.log('output', JSON.stringify(output, null, 2))
