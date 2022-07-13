// Typeof 를 사용해서 아래의 문구를 만드세요
// “” 안의 문구는 typeof 의 결과값으로 출력해야 합니다.
// 출력 문구
// “number” isn’t “string” data type.
// typeof 를 “boolean”에 사용하면, “object” 결과를 얻을 수 있습니다.
// let number = 1;
// let string = "string";
// let boolean = true;
// let nul = null;
// let object = {
//   number: 1,
// };

// console.log(typeof number + " isn't" + typeof string + " data type. typeof를 ", typeof boolean+"에 사용하면, "+ typeof object + " 결과를 얻을 수 있습니다.");
// console.log(`${typeof 123} isn't ${typeof "pororo"} data`);
// console.log(`if you use typeof, you can get the result as ${typeof true} or ${typeof object} or null.`);

// let mathScore = Number(prompt("Put your Math score."));
// let engScore = Number(prompt("Put your English score."));

// let avg = (mathScore + engScore) / 2;

// console.log(avg);
// let abc = "10abc";
// console.log(parseInt(abc));
// console.log(Number(abc));
// parseInt의 경우 숫자로 시작하는 문자열의 경우 문자열에 존재하는 숫자만 골라 형변환을 해줌.

// 연산자 줄여 쓰기 또는 증감 연산자로 아래의 숫자를 출력하기
// 10 > 11
// 10 > 9
// 10 > 5
// 10 > 2
// 10 > 30
// let num = 10;
// console.log(++num);//11
// console.log(num-=2);//9
// console.log(num-=4);//5
// console.log(num-=3);//2
// console.log(num+=28);

// 클럽 가드 프로그램을 만들어 봅시다!
// If / else 만 사용해서 구현해야 합니다(else if 는 사용 X)
// 성인(isAdult)이거나, VIP 면 > 통과
// 성인이면서 VIP 여도 취했으면(isDrunken) > 돌아가
// 성인이 아니고 VIP도 아니면서 취했어도, 돈(money)을 줬으면 > 통과

// let age = Number(prompt("클럽에 입장하고 싶으면 나이를 알려주세요."));
// let isAdult = age > 19;
// let isDrunken = Number(prompt("취했으면 0, 안취했으면 1을 입력해주세요."));
// let grade = prompt("당신의 등급을 알려주세요. Normal 또는 VIP만 입력하세요.");
// let pay = prompt("돈 줄래 말래? Yes or No");

// if (isAdult && grade == "VIP") {
//   if (isDrunken == 0) {
//     if(pay == "Yes"){
//       alert("성인이고 VIP이면서 취했지만 돈줬으니까, 입장!");
//     }else{
//       alert("성인이고 VIP이지만 취했으니까, 돌아가");
//     }
//   } else {
//     alert("성인이고 VIP이면서 안취했으니까, 입장");
//   }
// } else {
//   if (pay == "Yes") {
//     alert("성인도 아니고 VIP도 아닌데 돈 줬으니까, 입장");
//   } else {
//     alert("성인도 아니고 VIP도 아니도 돈도 없으니까, 돌아가");
//   }
// }

// 10000 까지의 숫자 중에서
// 13의 배수면서 홀수인 숫자를 찾아 봅시다!
// + prompt 를 이용해서 어느 숫자 까지 13의 배수면서 홀수인 숫자를 찾는 프로그램을 만들어 봅시다!

// for(let i = 1; i <= 1000; i++){
//   if((i % 13 == 0) && (i % 2 != 0)){
//     console.log(i);
//   }
// }

// 10000 까지의 숫자 중에서
// 13의 배수면서 홀수인 숫자를 찾아 봅시다!
// prompt 를 이용해서 숫자의 한계 값을 받고, 해당 숫자 까지 13의 배수면서 홀수인 숫자를 찾는 프로그램을 만들어 봅시다!

// let index = 1;
// let until = Number(prompt("10000(일만)이하의 한계값을 입력해주세요."));
// let num = 0;

// for (index; index <= until; index+=13) {
//   if (index % 13 === 0 && index % 2 !== 0) {
//     num = index;
//     // console.log(`${index}은(는) 1부터 ${until}사이에 존재하는 13의 배수이면서 홀수입니다.`);
//   }
// }
// console.log(num);

// 1부터 1000까지의 숫자 중에서 짝수인 수들의 합을 구하라.
// let sum = 0;

// for (let i = 0; i <= 1000; i++) {
//   if (i % 2 != 0) {
//     continue;
//   }
//   sum+= i;
// }

// console.log(sum);


// 삼각형의 넓이를 구하는 함수를 만들어 봅시다!
// 원의 넓이를 구하는 함수를 만들어 봅시다!
// 피타고라스의 정리를 이용해서 직각 삼각형의 밑변과 높이를 알 때, 빗변의 길이를 구하는 함수를 작성해 봅시다!
// 루트를 씌우는 법  Math.sqrt(9) = 3;

// let x = Number(prompt("x입력"));
// let y = Number(prompt("y입력"));

// function triangle(x, y) {
//   return (x * y) / 2;
// }

// function square(x, y) {
//   return x * y;
// }

// function pitagoras(x, y) {
//   return Math.sqrt(x ** 2 + y ** 2);
// }

// console.log(triangle(x, y));
// console.log(square(x, y));
// console.log(pitagoras(x, y));


// 삼각형의 넓이를 구하는 함수를 함수 표현식으로 변경해 봅시다!
// 원의 넓이를 구하는 함수를 화살표 함수로 변경해 봅시다!
// 피타고라스의 정리를 함수 표현식과 화살표 함수로 변경해 봅시다.

// let x = Number(prompt("삼각형의 가로변 x"));
// let y = Number(prompt("삼각형의 세로변 y"));
// let r = Number(prompt("원의 반지름 r"));
// let a = Number(prompt("피타고라스 삼각형의 가로변 a"));
// let b = Number(prompt("피타고라스 삼각형의 가로변 b"));

// let triangle = (x, y)=>{
//   return (x * y) / 2;
// }

// let circle = (r)=>{
//   return Math.PI*(r**2);
// }

// let pitagoras = (a, b)=>{
//   return Math.sqrt(a ** 2 + b ** 2);
// }

// console.log(triangle(x, y));
// console.log(circle(r));
// console.log(pitagoras(a, b));

// kdt 라는 변수에 KDT 자신을 제외한 참여자들의 이름이 전부 포함 된 배열을 만들기
// 6번째 참여자의 이름을 출력하기!

// let kdtMember = ['강유림', '강지훈', '강한솔', '김윤비', '모승환', '장세영', '복준우', '이민정', '허원', '이효석', '유진형', '이지현', '문영은', '박수지', '박종익', '박혜영', '이소민', '장의진', '정승수', '천해성'];
// console.log(kdtMember[5]);

// kdt 라는 배열 제일 마지막에 자신을 추가하기!
// kdt 라는 배열에서 자신을 빼기!
// kdt 배열 제일 앞에 자신을 추가하기!

// let kdt = ['강유림', '강지훈', '김윤비', '모승환', '장세영', '복준우', '이민정', '허원', '이효석', '유진형', '이지현', '문영은', '박수지', '박종익', '박혜영', '이소민', '장의진', '정승수', '천해성'];
// kdt.push('last_강한솔');
// console.log(kdt[kdt.length-1]);
// kdt.pop('last_강한솔');
// console.log(kdt[kdt.length-1]);
// kdt.unshift('first_강한솔');
// console.log(kdt[0]);

// Kdt 참여자 전원의 이름을 출력하는 프로그램 작성하기
// 출력 내용은
// KDT n 번째 참여자의 이름은 “~~~” 입니다.
// let kdtArr = ['강유림', '강지훈', '강한솔', '김윤비', '모승환', '장세영', '복준우', '이민정', '허원', '이효석', '유진형', '이지현', '문영은', '박수지', '박종익', '박혜영', '이소민', '장의진', '정승수', '천해성'];
// let i = 0;
// for(i; i < kdtArr.length; i++){
//   console.log(`KDT ${i+1} 번째 참여자의 이름은 ${kdtArr[i]}입니다.`)
// }

// kdt 배열의 제일 처음에 tetz 추가하기!
// 여기서 부터는 메소드 체이닝으로 처리 하시면 됩니다!
// kdt 배열의 제일 처음에서 tetz 를 빼고, 뺀 데이터를 글자별로 나누어 배열로 만들고, 해당 배열을 뒤집은 뒤, 다시 문자로 변환하여 출력하기!
// shift() 를 사용하면 빠진 데이터가 반환 됩니다!
// ex. let arr = [“tetz”, “pororo”];
// arr.shift();  “tetz”

// let kdt = ['강유림', '강지훈', '강한솔', '김윤비', '모승환', '장세영', '복준우', '이민정', '허원', '이효석', '유진형', '이지현', '문영은', '박수지', '박종익', '박혜영', '이소민', '장의진', '정승수', '천해성'];
// kdt.unshift('tetz');
// tetzArr = kdt.shift('tetz').split("").reverse().join();
// console.log(tetzArr);

// pororo 라는 객체형 변수를 선언
// name: “뽀로로” / age: 7 
// pororo 의 이름과 나이를 출력하기
// pororo 의 성별(gender)을 추가하고 출력하기
// Pororo 의 키(height)를 추가하고 출력하기
// pororo 의 성별 데이터를 삭제하고, pororo 객체를 출력하기

// let pororo = {
//   name: "뽀로로",
//   age: 9,
// }
// console.log(pororo);

// pororo.gender = "M";
// console.log(pororo.gender);

// pororo.height = 200;
// console.log(pororo.height);

// delete pororo.gender;
// console.log(pororo);

// // pororo 가 name, height 프로퍼티를 가지고 있는지 출력
// console.log('height' in pororo);

// // pororo 의 모든 key 값과 정보를 출력하는 프로그램 만들기
// for(key in pororo){
//   console.log(key);
//   console.log(pororo[key]);
// }

// // pororo 객체에 “뽀로로는 귀엽습니다!“ 를 출력하는 method 추가하기
// pororo.cute = ()=>{
//   console.log('뽀로로는 귀엽습니다!');
// }

// pororo.cute();

// // pororo 객체에 뽀로로의 이름을 출력하는 method 추가하기
// // 특정 객체의 height 를 출력하는 showHeight() 함수를 작성하고 pororo 객체의 메소드로 추가  pororo 의 키를 출력하기

// function showName() {
//   console.log(pororo.name);
// }

// function showHeight(){
//   console.log(pororo.height);
// }
// showName();
// showHeight();

// Kdt 라는 생성자 함수를 만들어 주세요.
// 생성자 함수에는
// 참여자의 이름  / 성별 데이터가 포함 됩니다.
// 참여자의 이름과 성별을 출력하는 method 도 포함됩니다.
// 자신과 짝꿍, 그리고 바로 옆 테이블에 있는 참여자 2명에 대한 정보를 생성자 함수를 이용하여 4개의 변수로 저장하세요.
// 참여자의 이름과 성별을 출력하는 method 를 이용 4명의 정보를 출력해 보세요.

// function Kdt(name, gender){
//   this.name = name;
//   this.gender = gender;
//   this.showInfo = ()=>{
//     console.log(this.name);
//     console.log(this.gender);
//   }
// }

// let myInfo = new Kdt('한솔', 31);
// let pairInfo = new Kdt('세영', 'Secret');
// let otherOne = new Kdt('윤비', 'Secret');
// let anotherOne = new Kdt('영은', 'Secret');

// myInfo.showInfo();
// pairInfo.showInfo();
// otherOne.showInfo();
// anotherOne.showInfo();
