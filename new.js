function numbertoroman(num) {
  const symbols = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  console.log(Object.keys(symbols).length);
  console.log("aaaaaaaaaaa",Object.values(symbols).length);
}

var num = 333;
console.log(numbertoroman(num));
