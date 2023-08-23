const fibs = function iterativeFibonacci(number) {
  let result = [];

  if (number <= 0) {
    return;
  }

  for (let i = 0; i < number; i++) {
    let step;

    if (i <= 1) {
      result.push(i);
    } else {
      step = result[i - 1] + result[i - 2];
      result.push(step);
    }
  }

  return result;
};

console.log(fibs(8));
