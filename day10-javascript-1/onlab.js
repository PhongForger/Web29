/**
 * Tìm số lớn nhất trong 2 số
 *
 * @param {number} a Số thứ 1
 * @param {number} b Số thứ 2
 *
 * @return {number} Số lớn nhất
 */

/**
 * Kiểm tra một số là số chẵn hay không
 *
 * @param {number} number Số bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isEven(number) {
  if (number % 2 === 0) {
    console.log(number + " Là số chẵn");
  } else {
    console.log(number + " Là số lẻ");
  }
}

isEven(10);

/**
 * Kiểm tra một số nguyên có chia hết cho 3 và 5 hay không
 *
 * @param {number} number Số bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isDivisibleByThreeAndFive(number) {
  if (number % 15 === 0) {
    console.log("Đây là số chia hết cho 3 và 5");
  } else {
    console.log("Đây không phải là số chia hết cho 3 và 5");
  }
}

isDivisibleByThreeAndFive(30);
/**
 * Tính tiền hoa hồng mà đại lý nhận được
 *
 * - Nếu totalSales <= 100 triệu thì hoa hồng nhận là 5% doanh số
 * - Nếu totalSales <= 300 triệu thì hoa hồng nhận là 10% doanh số
 * - Nếu totalSales > 300 triệu thì hoa hồng nhận là 20% doanh số
 *
 *
 * @param {number} totalSalse Doanh số bán hàng
 *
 * @return {number} Hoa hồng trả cho đại lý
 */
function calcCommissions(totalSales) {
  if (totalSales <= 100000000) {
    console.log("Tiền hoa hồng nhận được là: " + totalSales * 0.05);
  } else if (totalSales <= 300000000) {
    console.log("Tiền hoa hồng nhận được là: " + totalSales * 0.1);
  } else if (totalSales > 300000000) {
    console.log("Tiền hoa hồng nhận được là: " + totalSales * 0.2);
  }
}

calcCommissions(290000000);

/**
 * Kiểm tra 1 ký tự có phải thuộc bảng chữ cái hay không (a-zA-Z)
 *
 * @param {string} character Ký tự bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isAlphabe(character) {
  if (
    ("a" <= character && character <= "z") ||
    ("A" <= character && character <= "Z")
  ) {
    console.log(character + " Thuộc bảng chữ cái");
  } else {
    console.log(character + " Không thuộc bản chữ cái");
  }
}

isAlphabe("b");
/**
 * Kiểm tra 1 chữ cái bất kỳ có phải là nguyên âm hay không?
 *
 * @param {string} character Chữ cái bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isVowel(character) {
  if (
    character === "a" ||
    character === "e" ||
    character === "i" ||
    character === "o" ||
    character === "u" ||
    character === "A" ||
    character === "E" ||
    character === "I" ||
    character === "O" ||
    character === "U"
  ) {
    console.log(character + " Là chữ có nguyên âm");
  } else {
    console.log(character + " Không phải là chữ có nguyên âm");
  }
}

isVowel("a");
isVowel("e");
isVowel("i");
isVowel("o");
isVowel("u");
isVowel("A");
isVowel("E");
isVowel("I");
isVowel("O");
isVowel("U");
isVowel("b");
/**
 * Kiểm tra một chữ cái bất kỳ là viết hoa hay viết thường
 *
 * @param {string} character Chữ cái bất kỳ
 *
 * @return {boolean}
 */
function isUppercase(character) {}

/**
 * Kiểm tra độ dài 3 cạnh bất kỳ có tạo thành một tam giác hợp lệ hay không?
 *
 * Tam giác hợp lệ là tam giác có tổng 2 cạnh bất kỳ lớn hơn cạnh còn lại
 *
 * @param {number} a Chiều dài cạnh a
 * @param {number} b Chiều dài cạnh b
 * @param {number} c Chiều dài cạnh c
 *
 * @return {boolean} Kết quả
 */
function isValidTriangle(a, b, c) {}

/**
 * Viết chương trình máy tính đơn giản
 *
 * @param {number} operand1 Toán hạng 1
 * @param {'+' | '-' | '*' | '/'} operator Toán tử
 * @param {number} operand2 Toán hạng 3
 *
 * @return {number} Kết quả phép tính
 */
function simpleCalculator(operand1, operator, operand2) {}

for (var i = 1; i < 10; i++) {
  console.log(i + " Final");
}
