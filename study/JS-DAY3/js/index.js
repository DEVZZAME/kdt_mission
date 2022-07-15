const pororo = {
  name: "뽀로로",
  height: 70,
  weight: 50,
  gender: "male",
  say: function () {
    console.log("뽀로로가 말을 합니다.");
  },
  play: (person) => {
    console.log(`${person}와(과) 놀러 갑니다.`);
  },
  showName,
  showHeight,
};

// for(let key in pororo){
//   console.log(key, pororo[key]);
// }

pororo.say();
pororo.play("한솔");
console.log("-----------------------------------------");

function sayHello() {
  console.log(`Hello I'm ${this.name}`);
}

const boy = {
  name: "Justin",
  sayHello,
};

const girl = {
  name: "Anna",
  sayHello,
};

boy.sayHello();
girl.sayHello();
console.log("-----------------------------------------");
// pororo 객체에 뽀로로의 이름을 출력하는 method 추가하기
// 특정 객체의 height 를 출력하는 showHeight() 함수를 작성하고 pororo 객체의 메소드로 추가  pororo 의 키를 출력하기

function showName() {
  console.log(`My name is ${this.name}`);
}

function showHeight() {
  console.log(`${this.name} is ${this.height}cm`);
}
pororo.showName();
pororo.showHeight();
console.log("-----------------------------------------");
const loopy = {
  name: "루피",
  height: 60,
  weight: 55,
  showName,
  showHeight,
};

loopy.showName();
loopy.showHeight();
console.log("-----------------------------------------");
function Fruits(name, price) {
  this.name = name;
  this.price = price;
  this.showPrice = function () {
    console.log(`${name}의 가격은 ${price}원 입니다.`);
  };
}
  let apple = new Fruits("apple", 3000);
  let pineapple = new Fruits("pineapple", 3500);
  let watermelon = new Fruits("watermelon", 4000);
  let strawberry = new Fruits("strawberry", 4500);

apple.showPrice();
pineapple.showPrice();
watermelon.showPrice();
strawberry.showPrice();

console.log('-----------------------------------------');
// Kdt 라는 생성자 함수를 만들어 주세요.
// 생성자 함수에는
// 참여자의 이름  / 성별 데이터가 포함 됩니다.
// 참여자의 이름과 성별을 출력하는 method 도 포함됩니다.
// 자신과 짝꿍, 그리고 바로 옆 테이블에 있는 참여자 2명에 대한 정보를 생성자 함수를 이용하여 4개의 변수로 저장하세요.
// 참여자의 이름과 성별을 출력하는 method 를 이용 4명의 정보를 출력해 보세요.

function Kdt(name, gender){
  this.name = name;
  this.gender = gender;
  this.showInfo = function(){
    console.log(this.name);
    console.log(this.gender);
  }
}

let myInfo = new Kdt('한솔', 31);
let pairInfo = new Kdt('세영', 'Secret');
let otherOne = new Kdt('윤비', 'Secret');
let anotherOne = new Kdt('영은', 'Secret');

myInfo.showInfo();
pairInfo.showInfo();
otherOne.showInfo();
anotherOne.showInfo();
console.log('-----------------------------------------')

// console.log('-----------------------------------------')
// console.log('-----------------------------------------')
// console.log('-----------------------------------------')
