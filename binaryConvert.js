// decimal to binary convertor

function binaryConvert(num) {
  var blank = [];
  let i = 0;
  while (num > 0) {
    blank[i] = num % 2;
    // num = parseInt(num / 2);
    num = Math.floor(num / 2);
    i++;
  }
  console.log(blank);
  return blank.reverse().toString().replaceAll(",", "");
}
let num = 1;
console.log(binaryConvert(num));

//------------------------------------------------------------------------------------------//
// binary to decimal convertor

function binaryToDecimal(num) {
  let multiplier = 1;  //2^0;
  let sum = 0;

  for (let i = num.length-1; i >= 0; i--) {
    sum = sum + parseInt(num[i]) * multiplier;
    multiplier = multiplier * 2;
  }
  return sum;
}
let num = "1000";
console.log(binaryToDecimal(num));
