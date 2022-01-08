function merge(arr, left, middle, right) {
  var n1 = middle - left + 1;
  var n2 = right - middle;

  var L = new Array(n1);
  var R = new Array(n2);

  for (var i = 0; i < n1; i++) {
    L[i] = arr[left + i];
  }

  for (var i = 0; i < n2; i++) {
    R[i] = arr[middle + 1 + i];
  }
 
  var i = 0;
  var j = 0;
  var k = left;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

function divide(arr, left, right) {
  if (left >= right) {
    return;
  }
  var middle = left + parseInt((right - left) / 2);
  // var middle = (left+right)/2;
  divide(arr, left, middle);
  divide(arr, middle + 1, right);

  merge(arr, left, middle, right);
}

function mergeSort(arr) {
  divide(arr, 0, arr.length - 1);
  return arr;
}
let arr = [3, 2, 1];
console.log(mergeSort(arr));
