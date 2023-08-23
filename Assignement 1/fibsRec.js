const fibsRec = function RecursiveFibonacci(number) {
  if (number <= 1) {
    return [0];
  } else if (number === 2) {
    return [0, 1];
  } else {
    let result = RecursiveFibonacci(number - 1);
    let step = result[number - 2] + result[number - 3];
    result.push(step);
    return result;
  }
};

console.log(fibsRec(77));
