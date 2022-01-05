function fact(num) {
  if (num === 0) {
    return 1;
  }
  return fact(num - 1) * num;
}

console.log(fact(6));

function fibbonacci(num) {
  if (num === 0) {
    return 1;
  }
  else if (num === 1) {
    return 1;
  }
  return fibbonacci(num - 1) + fibbonacci(num - 2);
}
var num = 1;

console.log(fibbonacci(5));
