//initially votes=0 , candidate=-1
//Traverse the array
// if votes === 0 choose candidate =arr[i], votes++
// else if arr[i]===candidate ,just simply votes++
// else (arr[i]!== candidate), just decrease votes

function maorityElement(arr, n) {
  let vote = 0;
  let candidate = -1;

  for (let i = 0; i < n; i++) {
    let num = arr[i];
    if (vote === 0) {
      candidate = num;
    } else if (num === candidate) {
      vote++;
    } else {
      vote--;
    }
  }
  return candidate;
}

var arr = [4, 4, 4, 1, 2, 3, 4];
console.log(maorityElement(arr, arr.length));

console.log(Math.floor(-3.5));