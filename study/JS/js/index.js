"use strict";
console.log(new Date("2022-07-11").getDay());

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
let myName = "ZZAME";
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
console.log("number+opacity = ", number + opacity);

// Boolean 참, 거짓 데이터
let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);

// Undefined 미할당 데이터
let undef;
let obj = {
  abc: 123,
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
  getName: () => {
    return this.name;
  },
  doesHeMarried: function () {
    return this.isMarried;
  },
};
let hisName = hansol.getName();
console.log("그의 이름은", hisName);
console.log("그가 결혼 했나요? 말해! true or false!", hansol.doesHeMarried());

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

console.log("안녕하세요 당신은", yourName, "입니다.");
console.log("안녕하세요 당신은 " + yourName + " 입니다.");

yourName = "원태경";
console.log("안녕하세요 당신은", yourName, "입니다.");
console.log("안녕하세요 당신은 " + yourName + " 입니다.");

let box = 123;
console.log(box);

box = 456;
console.log(box);
// let의 경우 var와 다르게 재선언은 불가하지만 재할당은 가능. 재사용도 가능.

box = "box";
console.log(box);
// Data의 Type이 Integer에서 String으로 바뀌었는데 JS가 알아서 캐치해 재할당하고 출력함.

const box2 = 333;
console.log(box2);

// box2 = 444;
console.log(box2);
// uncaught TypeError: Assignment to constant variable.
// const의 경우 재선언과 재할당 모두 불가능하기 때문에 위와 같은 에러가 발생함.
// Java에서 Public final로 modified가 불가하도록 하는 것과 마찬가지로 데이터 유출이나 충돌을 막을 수 있음.

var name = "zzame";
var name = "mincho";
console.log(name);
// ES6 이후 let이 출시되고 var 사용에 대해 지양하는 추세.

let name2 = "LHS";

if (name2 == "LHS") {
  let result = true;
  console.log(result);
} else {
  let result = false;
  console.log(result);
}

function helloKdt() {
  // alert('Hello KDT World!');
}

helloKdt();

function returnFunc() {
  return 123;
}

let num = returnFunc();

console.log(num); //123
console.log(returnFunc()); //123

function bye() {
  console.log("Bye");
}

let world = () => {
  console.log("World");
};

bye();
world();

// 두 수의 곱을 구하는 함수 만들고 출력 시키기!
// 실습 2의 Object 데이터의 값을 return / 출력하는 메소드를 2개 추가하기!

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2)); //3

let multiple = (a, b) => {
  return a * b;
};

console.log("두 수의 곱은", multiple(2, 3)), "입니다."; //6

let num1 = 10;
let num2 = 11;

console.log(num1, "X", num2, "=", multiple(num1, num2), "입니다!"); //110

// let tetz = "이효석";
// let gender = "male";

// if (gender == "male") {
//   if (tetz == "이효석") {
//     alert("잘 찾으셨습니다!");
//   } else {
//     alert("이름이 틀렸네요");
//   }
// } else {
//   alert("성별이 틀렸습니다.");
// }
// Switch 이용해서 오늘 요일 출력하기
// Switch
let day;
switch (new Date().getDay()) {
  case 0:
    day = "일요일";
    break;
  case 1:
    day = "월요일";
    break;
  case 2:
    day = "화요일";
    break;
  case 3:
    day = "수요일";
    break;
  case 4:
    day = "목요일";
    break;
  case 5:
    day = "금요일";
    break;
  case 6:
    day = "토요일";
    break;
}
console.log(day);
let zzame = "한솔" ? console.log("맞았습니다.") : console.log("틀렸습니다.");

// If 문을 이용해서 오늘 요일을 alert 으로 출력하는 프로그램 작성
let today = new Date().getDay();
let dayArray = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];
// let dayName = "";
// if (today == 0) {
//   alert(dayArray[today]);
// } else if (today == 1) {
//   alert(dayArray[today]);
// } else if (today == 2) {
//   alert(dayArray[today]);
// } else if (today == 3) {
//   alert(dayArray[today]);
// } else if (today == 4) {
//   alert(dayArray[today]);
// } else if (today == 5) {
//   alert(dayArray[today]);
// } else if (today == 6) {
//   alert(dayArray[today]);
// } else {
//   alert("존재하지 않는 값입니다.");
// }

// for문
for(let i = 0; i < 100; i++){
  console.log(i+1, '번째 반복중...');
}

// 구구단을 반복문을 이용해서 console.log 로 출력해 보자!
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(i + " X " + j + " = " + i * j);
  }
}

// 0 ~ 100의 숫자 중에서 2 또는 5의 배수 총합 구하기!
let sum1 = 0;
for (let i = 0; i <= 100; i++) {
  if (i == 0) {
  } else if (i % 2 == 0) {
    sum1 += i;
  } else if (i % 5 == 0) {
    sum1 += i;
  }
}

console.log(
  "1부터 100 사이에 존재하는 2의 배수와 5의 배수의 총합은 " + sum1 + "입니다."
);



let boxEl = document.querySelector(".box");
boxEl.addEventListener("click", () => {
  if (boxEl.classList.contains("orange")) {
    boxEl.classList.remove("orange");
    boxEl.classList.add("skyblue");
  } else {
    boxEl.classList.remove("skyblue");
    boxEl.classList.add("orange");
  }
})
const boxEls = document.querySelectorAll(".box");
boxEls.forEach(() => {

})