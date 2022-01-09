// function powerOf2(num) {
//   while (num > 1) {
//     num = num % 2;
//     if (num!== 0) {
//       return false;
//     }
//     num = num / 2;
//   }
//   return true;
// }
// let num = 13;
// console.log(powerOf2(num));

// function powerOf2(num){
//     if(Math.ceil((Math.log(num)/Math.log(2)))===Math.floor((Math.log(num)/Math.log(2)))){return true}
//     return false;
// }

// let num=13;
// console.log(powerOf2(num));

function powerOf2(num) {
  if (num <= 0) {
    return false;
  }

  if (num & (num - 1)===0) {
    return true;
  } else {
    return false;
  }
}

let num = 13;
console.log(powerOf2(num));
