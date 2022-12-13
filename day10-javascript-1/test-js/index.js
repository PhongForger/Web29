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

// Bài 2:
// Bước 1: Tách các giá trị giờ phút giây
// Bước 2: Cộng số giây với n
// Bước 3: Chia tổng số giây cho 60
// Bước 4: Kiểm tra:
// - Nếu số phút == 0 thì tăng số giây, ghép chuỗi kết quả và trả về
// - Nếu số phút > 0, lặp lại quy trình tính số phút, ... giờ

function calcTime(time, n) {
  let date = new Date(`2022-01-01 ${time}`);

  date.setSeconds(date.getSeconds() + n);

  return `${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
}

console.log(calcTime("20:15:45", 20));

// Bài 3:

//Bước 1: Chuyển chữ hoa | thường
// Bước 2: Loại bỏ ký tự khoảng trắng
// Bước 3: Đảo ngược ký tự
// Bước 4: So sánh chuỗi đảo ngược vs chuỗi trước đó (3) và trả về kết quả

function isPalindrome(str) {
  const normalStr = str.toLowerCase().replaceAll(" ", "");

  return normalStr === normalStr.split("").reverse().join("");
}
console.log(isPalindrome("Race car"));

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

// Bài 5:

function compareNumber(a, b) {
  return a - b;
}

function notZero(n) {}

// Bài 6: Con học lỏm được trên mạng ạ 😀

function countElement(arr) {
  return arr.reduce(function (a, b) {
    a[b] = a[b] + 1 || 1;
    return a;
  }, {});
}

console.log(countElement(["Phong", "Phong", "Phong", "Phong", "Bob"]));

var isPalindrome = function (x) {
  if (x >= 0) {
    const rev = x.toString().split("").reverse().join("");
    const unrev = x.toString();
  }
  return rev == unrev;
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = x.toString();
  let a = 0;
  let b = str.length - 1;
  let palNum = true;
  while (a < b) {
    if (str[a] !== str[b]) {
      palNum = false;
      break;
    }
    a++;
    b--;
  }
  return palNum;
};

/**
 * @param {string} s
 * @return {number}
 */

symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let total = 0;
  for (let i = 0; i < s.length; i += 1) {
    symbols[s[i]] < symbols[s[i + 1]]
      ? (total -= symbols[s[i]])
      : (total += symbols[s[i]]);
  }
  return total;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s.trim().split(" ").pop().length;
};

console.log(lengthOfLastWord("Hello World"));
