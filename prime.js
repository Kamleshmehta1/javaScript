function primearrber(arr) {
  let blank = [];

  for (let k = 0; k < arr.length; k++) {
    let count = 0;
    for (let i = 1; i <= arr[k]; i++) {
      if (arr[k] === 1) {
        return false;
      }
      if (arr[k] % i === 0) {
        count++;
      }
      if (count > 2) {
        continue;
      }
    }
    if (count === 2) {
      blank.push(arr[k]);
    }
  }
  return blank;
}

let arr = [2, 3, 4, 5, 6, 7, 8, 9];
console.log(primearrber(arr));
