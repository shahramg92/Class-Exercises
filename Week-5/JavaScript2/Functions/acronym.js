// Write a function acronym that takes an array of words as argument and returns the acronym of the words. Use the reduce method to do this.

var vip = ['very', 'important', 'person'];
var nasa = ['national', 'aeronautics', 'space', 'administration'];
function acronym(words) {
  return words.reduce(function(w1, w2) {
    return w1 + w2[0];
  }, []);
}
console.log(acronym(vip));
console.log(acronym(nasa));
