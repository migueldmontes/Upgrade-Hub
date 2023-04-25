const numbersList = [];

function sum(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function father(a, b, callback){
  const result = callback(a, b);
  numbersList.push(result);
}

father(2, 3, sum);
father(5, 1, subtract);
father(10, 4, sum);
father(8, 2, subtract);

console.log(numbersList); 
