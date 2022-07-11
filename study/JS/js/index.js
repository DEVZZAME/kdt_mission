console.log(new Date('2022-07-11').getDay());

// commend+/

/* Shift+option+A
Shift+option+A
Shift+option+A
Shift+option+A
Shift+option+A
Shift+option+A
Shift+option+A
Shift+option+A
Shift+option+A
Shift+option+A
Shift+option+A
Shift+option+A
Shift+option+A
Shift+option+A
Shift+option+A */

// String 문자형 데이터
let myName = 'ZZAME';
var email = "dev.zzame@gmail.com";
let hello = `Hello ${myName}!!`;

console.log(myName);
console.log(email);
console.log(hello);

// Number 숫자형 데이터
let number = 123;
let opacity = 0.7;

console.log(number);
console.log(opacity);
console.log('number+opacity = ', number+opacity);

// Boolean 참, 거짓 데이터
let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);

// Undefined 미할당 데이터
let undef;
let obj = {
  abc:123,
};
console.log(undef);
console.log(obj.abc);
console.log(obj.def);

//Null 의도된 빈 데이터
let empty = null;

console.log(empty);

// Array 배열 데이터

let fruits = ["Pen", "Pineapple", "Apple", "Pen"];
console.log(fruits[0], fruits[1], fruits[2], fruits[3]);

let data = ["data1", null, false, undefined];

console.log(data[0], data[1], data[2], data[3]);

// Object 데이터 꾸러미
let hansol = {
  name: "hansol",
  age: "secret",
  hobby: ["travelling", "driving", "coffee", "watching British series"],
  isOld: false,
  isMarried: true,
  bankAccount: null,
  job: undefined,
};

console.log(hansol.name);
console.log(hansol.age);
console.log(hansol.hobby[0]);
console.log(hansol.isOld);
console.log(hansol.isMarried);
console.log(hansol.bankAccount);
console.log(hansol.job);

// var 재선언 가능. 글로벌 스코프로 사용 가능
// let 재선언 불가능, 재할당 가능. 로컬에서만 가능
// const 재선언 불가능, 재할당 불가능

let yourName = "이효석";

console.log('안녕하세요 당신은', yourName, "입니다.");
console.log('안녕하세요 당신은 ' + yourName + " 입니다.");

yourName = "원태경";
console.log('안녕하세요 당신은', yourName, "입니다.");
console.log('안녕하세요 당신은 ' + yourName + " 입니다.");