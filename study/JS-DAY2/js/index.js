// console.log(typeof null, typeof "핑크퐁");
// console.log(typeof "핑크퐁");
// console.log(typeof 77);
// console.log(typeof {});

// let nameArr = ["강유림", "강지훈", "강한솔", "김윤비"];

// console.log(`The first name is ${nameArr[0]}`);
// console.log(`The Second name is ${nameArr[1]}`);
// console.log(`The Third name is ${nameArr[2]}`);
// console.log(`The Forth name is ${nameArr[3]}`);

// for(let i = 0; i <= nameArr.length-1; i++){
//   console.log(`${i+1}번째 이름은 ${nameArr[i]}입니다.`);
// }

// let sq = 2 ** 2;
// let num = Math.sqrt(sq);

// console.log(`2의 제곱은 ${sq}입니다.`);
// console.log(`루트 4는 ${num}입니다.`);

// let a = 1;
// let b = "1";

// // 비교 연산자
// // 단순히 출력값이 같은지 여부에 대해서만 판단
// console.log(a == b);

// // 일치 연산자
// // 데이터 타입이 같은지 여부까지 판단
// console.log(a === b);

// let name = "ZZAME";
// let year = 1992;

// if(name === "ZZAME" || year > 1993){
//   console.log("one of them is right.");
// }else{
//   confirm.log("go back home.");
// }
// if(name === "ZZAME" && year > 1993){
//   console.log("both of them is right.");
// }else{
//   console.log("go back home.");
// }

// let age = 16;
// let isAdult = age > 19;

// if(!isAdult){
//   console.log("go back home.");
// }else{
//   console.log("Pass!")
// }

// for(let i = 0; i < 100; i++){
//   console.log(i);
// }

// let i = 2;
// let j = 1;

// while(i <= 9){
//   while(j <= 9){
//     console.log(`${i} X ${j} = ${i*j}`);
//     j++;
//   }
//   j = 1;
//   i++;
// }

// let i = 10;
// do{
//   console.log(`반복문이 ${i}번째 실행중입니다.`);
// }while(i < 10);

// let j = 10;
// while(j < 10){
//   console.log(`반복문이 ${j}번째 실행중입니다.`);
//   j++;
// }

// function sayHello(name){
//   console.log(`Hello, ${name}`);
// }

// sayHello('Mike');

// let superman = {
//   name: "Clark",
//   age: 33,
//   height: 187,
//   weight: 77,
//   fly: ()=>{
//     console.log('날아갑니다!');
//   },
//   landing(){
//     console.log('착지합니다!');
//   }
// }

// for(key in superman){
//   console.log(key);
//   console.log(superman[key]);
// }
// superman.fly();
// superman.landing();

// let hello = "Hello";
// // let helloArr = hello.split("");
// // console.log(helloArr);
// // let reverseArr = helloArr.reverse();
// // console.log(reverseArr);
// // let joinStr = reverseArr.join();
// // console.log(joinStr);
// let result = hello.split("").reverse().join("");
// console.log(result);

// .split : 문자를 인수를 기준으로 쪼개서 배열로 반환
// .reverse : 배열의 순서를 뒤집어서 반환
// .join : 배열을 인수 기준으로 병합해서 문자열을 반환

// const superman = {
//   name: "Clark",
//   age: 33,
//   height: 187,
//   weight: 77,
// }

// console.log(superman.name);
// console.log(superman['age']);
// console.log(superman.condition);

// superman.hairColor = "blonde";

