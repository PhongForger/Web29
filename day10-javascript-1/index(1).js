// Callback
// sort
// forEach
// filter
// find
// findIndex
// map
// reduce
// ...

// Một hàm (giá trị hàm) được truyền vào một hàm khác dưới dạng đối số

// forEach - làm một cái gì đó với mỗi phần tử trong mảng
// function pow(n) {
//   console.log(n ** 2);
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let a = 0; a < arr.length; a++) {
//   pow(arr[a]);
// }

// arr.forEach(pow);

// const arrr = ["Bob", "Jack", "Oggy"];

// for (let b = 0; b < arrr.length; b++) {
//   console.log(arrr[b]);
// }

// arrr.forEach(console.log);

// find - Tìm ra GIÁ TRỊ ĐẦU TIÊN KHỚP VỚI ĐIỀU KIỆN

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function isPrime(n) {
//   if (n < 2) return false;

//   for (let c = 2; c < n; c++) {
//     if (n % c === 0) return false;
//   }
//   return true;
// }

// let firstPrime;

// for (let d = 0; d < number.length; d++) {
//   const n = number[d];

//   if (isPrime(n)) {
//     firstPrime = n;
//     break;
//   }
// }

// let firstPrime = arr.find(isPrime);

// console.log(firstPrime);

// filter - TÌM TẤT CẢ GIÁ TRỊ KHỚP VỚI ĐIỀU KIỆN

// let arr = [];

// for (let c = 0; c < number.length; c++) {
//   if (isPrime(number[c])) {
//     arr.push(number[c]);
//   }
// }

// console.log(arr);

// let result = number.filter(isPrime);
// console.log(result);

// findIndex - Tìm chỉ mục của giá trị đầu tiên khớp với điều kiện

// let index = -1;

// for (let i = 0; i < number.length; i++) {
//   if (isPrime(number[i])) {
//     index = i;
//     break;
//   }
// }

// console.log(index);

// let index = number.findIndex(isPrime);
// console.log(index);

// map - biến đổi các phần tử trong mảng thành một giá trị khác

// function double(n) {
//   return n * n;
// }

// let arr1 = [];

// for (let i = 0; i < number.length; i++) {
//   arr1.push(double(number[i]));
// }

// console.log(arr1);

// let doubled = number.map(double);
// console.log(doubled);

// reduce - tính tổng

// let sum = 0;

// for (let i = 0; i < number.length; i++) {
//   sum += number[i];
// }

// console.log(sum);

// function add(a, b) {
//   return a + b;
// }

// let total = number.reduce(add, 0); // 0 là giá trị bắt đầu tính
// console.log(total);

// sort - sắp xếp
// sort - mặc định sắp xếp theo dạng chuỗi

// function compare(a, b) {
//   if (a >= b) return 1;
//   else return -1;
// }

// number.sort(compare);
// console.log(number);