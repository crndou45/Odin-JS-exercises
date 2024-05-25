const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1 -num2;
};

const sum = function(array) {
  let sum =0;
   array.forEach((element) => {
      sum += element;;
  });
  return sum;
	
};

const multiply = function(array) {
  let multiply = 1;
   array.forEach((item) =>{
     multiply *=item;
   });
   return multiply;
};

const power = function(num1,num2) {
	return Math.pow(num1,num2);
};

const factorial = function(num) {
  let count = 1;
  if(num==0){
    return 1;
  }
  for(let i =1; i<=num;i++){
     count *=i;
  }
  return count;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
