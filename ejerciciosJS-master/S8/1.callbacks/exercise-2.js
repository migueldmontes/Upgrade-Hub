const userAnswers = [];

function confirmExample(){
  const result = confirm('Soy un texto');
  return result;
}

function promptExample(){
  const result = prompt('Soy un texto');
  return result;
}

function father(callback){
  const result = callback();
  userAnswers.push(result);
}

father(confirmExample);
father(promptExample);
father(confirmExample);
father(promptExample);

console.log(userAnswers); 
