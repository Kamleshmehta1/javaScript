function binaryConvert(num) {
  var blank = [];
  let i = 0;
  while (num > 0) {
    blank[i] = num % 2;
    num = Math.floor(num / 2);
    i++;
  }
  return blank.reverse().toString().replaceAll(",", "");
}
let num = 8;
console.log(binaryConvert(num));
