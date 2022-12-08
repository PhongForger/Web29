// Bài 1

function bill(kwh) {
  let total = kwh;
  if (kwh >= 0 && kwh <= 50) {
    total = kwh * 1678;
    return total;
  } else if (kwh >= 51 && kwh <= 100) {
    total = kwh * 1734;
    return total;
  } else if (kwh >= 101 && kwh <= 200) {
    total = kwh * 2014;
    return total;
  } else if (kwh >= 201 && kwh <= 300) {
    total = kwh * 2536;
    return total;
  } else if (kwh >= 301 && kwh <= 400) {
    total = kwh * 2834;
    return total;
  } else if (kwh >= 401) {
    total = kwh * 2927;
    return total;
  } else {
    console.warn("Lỗi");
  }
}
console.log(bill(500));

// Bài 3:

function reverseLetter(n) {
  n = n.toString();
  return n.split("").reverse().join("");
}

function isPalindrome(n) {
  if (reverseLetter(n) == n) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("racecar"));

// Bài 4

function snail(h, x, y) {
  let day = [];
  if (h > 0) {
    day = h / (x - y);
  }
  return day;
}
snail(20, 3, 1);
console.log(
  "Số ngày con ốc sên cần để leo lên trên miệng giếng là: " +
    snail(10, 3, 1) +
    " ngày"
);

// Bài 6: Con học lỏm được trên mạng ạ 😀

function countElement(arr) {
  return arr.reduce(function (a, b) {
    a[b] = a[b] + 1 || 1;
    return a;
  }, {});
}
console.log(countElement(["Phong", "Phong", "Phong", "Phong", "Bob"]));
