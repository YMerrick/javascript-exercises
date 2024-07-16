const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(nums) {
	return nums.reduce(add,0);
};

const multiply = function(nums) {
  return nums.reduce((total, current) => total * current,1);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
  if (a <= 1) return 1;
	return factorial(a-1) * a;
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
