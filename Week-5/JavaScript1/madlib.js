// Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).



function madlib (name, subject) {
  var output = name + ' favorite subject is ' + subject;
  console.log(output);
  return output;
}

madlib('Shahram\'s' , 'Python.')
