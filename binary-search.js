//binary search

function binarySearch() {
  let arr = [1, 2, 3, 4, 5];
  //   let arr =new Array(2, 3, 4, 10, 40,5);

  let search = 5;

  let low = 0;

  var high = arr.length - 1;

  let mid;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === search) {
      return mid;
    }
    if (arr[mid] < search) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
let result = binarySearch();
result == -1 ? console.log("not present") : console.log("present:", result);
