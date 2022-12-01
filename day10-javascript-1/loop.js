let coordinates = {
  a: {
    x: 1,
    y: 2,
  },
  b: {
    x: 5,
    y: 8,
  },
};

// Tính khoảng cách giữa 2 điểm A, B

function calcDistance(coordinates) {
  const a = coordinates.a;
  const b = coordinates.b;
  let answer = Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2);
  return answer;
}

console.log(calcDistance(coordinates));

function Meow(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

const meow1 = new Meow("Oggy", "1", "male");
const meow2 = new Meow("Jack", "2", "male");
const meow3 = new Meow("Tom", "3", "male");
