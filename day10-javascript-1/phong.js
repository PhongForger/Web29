let phong = {
  name: "Hoàng Gia Phong",
  age: 18,
  gender: "male",
  occupation: "student",
  hobby: "play video-games",
  height: "1.7 m",
  weight: "54 kg",

  computer: {
    brand: "HP",
    series: "Folio 9480m",
  },

  eat(food) {
    console.log("Ăn " + food);
  },
};

phong.name;
phong.computer.brand;
phong.eat;
console.error("Errorrrrrrrr");

let empty = {};

empty.name = "Phong";
empty.age = "18";

for (let key in empty) {
  value = empty[key];

  console.log(key, value);
}
