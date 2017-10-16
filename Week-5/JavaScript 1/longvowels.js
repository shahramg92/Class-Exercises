// Write a function, which is given a string, return the result of extending any long vowels to the length of 5.

function longLongVowels(string) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let output = []
  for (i = 0; i < string.length; i++) {
    let char = string[i]
    if (vowels.indexOf(char.toLowerCase()) != -1) {
      if (string[i].toLowerCase() === string[i + 1].toLowerCase()) {
        output.push(char.repeat(3));
      }
    }
    output.push(char);
  }
  return output.join('')
}

console.log(longLongVowels('I love using long vowels!!'))
