/** @format */

let x = [];
console.log(typeof x); //object data type
let myself = {
  name: "mmlk",
  age: 31,
  relationship: true,
  address: "ygn",
  skills: ["html", "css", "javaScript"],
};
console.log(myself["name"]);
console.log(myself.address);
console.log(
  `My name is ${myself.name} and I'm ${myself.age} years old and I live in ${myself.address}`
);

let name = "mgmg";
let age = 15;
let address = "Kyaukmyaung";
let money = 200;
let orangePrice = 50;
let leftMoney = money - orangePrice;
console.log(leftMoney);
let bag = ["mm", "eng", "bio"];
let pen = null;
let canMgMgSmoke = false;
let canMgMgFriSmoke = true;

//value နေရာမှာ variableထည့်သုံးလို့ရ အပေါ်မှာကြော်ငြာပြီးသားမို့လို့
let student = {
  name,
  age,
  address,
  money,
  orangePrice,
  leftMoney,
  bag,
  pen,
  canMgMgSmoke,
};
console.log(student);
console.log(student.name);
console.log(student["name"]);

let student2 = {
  name: "zawzaw",
  age: 17,
};

let student3 = {
  name: "myamya",
  age: 15,
};

let students = [student, student2, student3];
console.log(students);

console.log(students[0].canMgMgSmoke);
console.log(students[0].bag[2]);
console.log(students[2].name);
console.log(students[2]["name"]);
console.log(students[1].age);
console.log(students[1]["age"]);
