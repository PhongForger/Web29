/**
 * In dãy số lẻ trong khoảng từ 1 đến 100
 */
function printOddNumbers() {
  for (let a = 1; a <= 100; a += 2) {
    console.log(a);
  }
}

/**
 * In dãy số chẵn trong khoảng từ 1 đến 100
 */
function printEvenNumbers() {}

for (let b = 0; b <= 100; b += 2) {
  console.log(b);
}

/**
 * Tính tổng các số tự nhiên trong khoảng từ 1 đến `n`
 * @param {number} n Số nguyên dương bất kỳ
 */
function sumOfNumbers(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  console.log(total);
}
sumOfNumbers(100);

/**
 * Tính tổng các số lẻ trong khoảng từ `start` đến `end`
 *
 * @returns {number} Tổng các số lẻ
 */
function sumOfOddNumbers(start, end) {
  let total = 0;

  for (let c = start; c <= end; c++) {
    if (c % 2 == 1) {
      total += c;
    }
  }

  console.log(total);
}
sumOfOddNumbers(1, 20);

/**
 * Tìm các ước số của một số bất kỳ
 *
 * @param {number} number Số nguyên dương bất kỳ
 *
 * @returns {number[]} Mảng chứa các ước số *[v1, v2, ...]*
 */
function divisor(number) {
  for (let d = 0; d <= number; d++) {
    if (number % d == 0) {
      console.log("Ước của " + number + " là:" + d);
    }
  }
}

divisor(100);

/**
 * Tính số lần gấp 1 tờ giấy có độ mỏng 0.1mm để đạt được độ dày mong muốn
 *
 * @param {number} thickness Độ dày mong muốn tính theo đơn vị m
 *
 * @return {number} Số lần gấp giấy để đạt được độ dày yêu cầu
 */
function countFolding(thickness) {
  thickness *= 1000;
  let count = 0;
  let currentThickness = 0.1;
  while (currentThickness < thickness) {
    currentThickness *= 2;
    count++;
  }
  console.log(count);
}

countFolding(10);

/**
 * Tính xem sau bao nhiêu năm nữa thì tuổi cha gấp 2 lần tuổi con
 *
 * Tuổi cha lớn hơn tuổi con ít nhất 18 tuổi
 *
 * @param {number} dad Tuổi của cha
 * @param {number} son Tuổi của con
 *
 * @returns {number} Số năm để tuổi cha gấp 2 lần tuổi con
 */
function countYears(dad, son) {
  let count = 0;

  while (dad / son !== 2) {
    count++;
    dad++;
    son++;
  }
  return count;
}

console.log(countYears(30, 2));

function countLegs(legs) {
  let count = 0;
  const chickenLegs = 2;
  const dogLegs = 4;
  const total = 36;
  const totalLegs = 100;

  let dogs = 1;
  let chickens = total - dogs;

  while (dogs * dogLegs + chickens * chickenLegs != totalLegs) {
    dogs++;
    chickens--;
  }

  console.log("So cho la ${dogs}");
}
