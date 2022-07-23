// let numbers = [1, 2, 3, 4, 5, 6];
// let fruits = ["바나나", "사과", "파인애플", "오렌지", "체리", "망고"];

// for (let number of numbers) {
//   console.log(number);
// }

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// numbers.forEach(function (number, index, array) {
//   console.log(number, index, array);
// });

// fruits.forEach(function(fruit, index, array){
//   console.log(fruit, index, array);
// })

// let nums = [1, 2,3, 4,5, 6];
// var sum1 = 0;
// var sum2 = 0;
// var sum3 = 0;

// for(let i = 0; i < nums.length; i++){
//   console.log(nums[i]);
//   sum1 += nums[i];
// }

// for(let num of nums){
//   sum2 += num;
// }

// nums.forEach((num)=>{
//   sum3 += num;
// })

// console.log(sum1, sum2, sum3);

// const str = "Hello, world";
// console.log(str.length);
// console.log(str.indexOf("world"));
// console.log(str.slice(0, 6));
// console.log(str.replace("world", "amazing world!"));

// let str = "우영";
// let longStr = "거꾸로 해도 " + str.repeat(5) + "우";
// console.log(longStr);

// const str = "         Hello, world       ";
// console.log(str);
// console.log(str.trim());
// answer = ""

// var pi = 3.141592;

// let int = Number(pi);
// console.log(int);

// let minus = -999;
// // 절대값
// console.log(Math.abs(minus));
// // 최솟값
// console.log(Math.min(10, 20, 30, 40, 50, -100));
// // 최댓값
// console.log(Math.max(10, 20, 30, 40, 50, -100));
// // 올림
// console.log(Math.ceil(10.0000001));
// // 내림
// console.log(Math.floor(10.999999));
// // 반올림
// console.log(Math.round(10.5));
// console.log(Math.round(10.4));
// // 임의의 난수값 생성
// console.log(Math.random());

// 주어진 배열에서 가장 큰 수와 작은 수의 찾아서 소수점을 버림 처리
// 해당 수 절대값의 평균을 구하기
// 0부터 100까지의 숫자 중에서 아무 숫자나 출력

// let nums = [-1.23, 13, 14.52, -33.53, 30];

// let max = Math.max(...nums);
// console.log(`최댓값은 ${max}`);
// console.log(`최댓값에서 버린값은 ${Math.floor(max)}`);
// console.log(`버린값의 절댓값은 ${Math.abs(Math.floor(max))}`);

// let min = Math.min(...nums);
// console.log(`최솟값은 ${min}`);
// console.log(`최솟값에서 버린값은 ${Math.floor(min)}`);
// console.log(`버린값의 절댓값은 ${Math.abs(Math.floor(min))}`);

// const rand_0_100 = Math.floor(Math.random() * 100);
// console.log(`0부터 100까지의 숫자 중 임의로 발생한 난수는 ${rand_0_100}`);

// let maxNumber;
// let minNumber;
// for(let i = 0; i <= nums.length; i++){
//   for(let j = 1; j <= nums.length-1; j++){
//     if(nums[i] > nums[j]){
//       maxNumber = nums[i];
//       console.log(maxNumber);
//     }
//   }
//   for(let j = 1; j <= nums.length-1; j++){
//     if(nums[i] < nums[j]){
//       minNumber = nums[i];
//       console.log(minNumber);
//     }
//   }

//   maxNumber = Math.ceil(maxNumber);
//   minNumber = Math.ceil(minNumber);
//   let abs = (Math.abs(maxNumber) + Math.abs(minNumber)) / 2 ;
//   console.log(`평균은 ${abs}`);
// }
// const rand_0_99 = Math.floor(Math.random() * 100);
// console.log(rand_0_99);

// const numbers1 = [1, 2, 3, 4];
// const numbers2 = [1, 2, 3, 4];

// 원본 배열이 변합니다!! 주의하세요!!
// numbers1.splice(0, 2);
// numbers2.splice(2, 1, 77);
// console.log(numbers1);
// console.log(numbers2);
// [3, 4];
// [1, 2, 77, 4];

// splice(시작점, 자를갯수, 추가값)

// let numbers = [1, 2, 3, 4, 5, 6];
// let fruits = ["사과", "바나나", "수박", "포도", "파인애플"];

// // for문
// for(let i = 0; i <= numbers.length-1; i++){
//   console.log(numbers[i]);
// }
// for(let i = 0; i <= fruits.length-1; i++){
//   console.log(fruits[i]);
// }

// // for of문
// for(let number of numbers){
//   console.log(number);
// }
// for(let fruit of fruits){
//   console.log(fruit);
// }

// // forEach문
// numbers.forEach(function(number, i, arr){
//   console.log(number, i, arr);
// })

// let numbers = [1, 2, 3, 4, 5, 6];
// let sum1 = 0;
// let sum2 = 0;
// let sum3 = 0;

// for(let i = 0; i < numbers.length; i++){
//   sum1 += numbers[i];
// }

// for(let element of numbers){
//   sum2 += element;
// }

// numbers.forEach(function(element){
//   sum3 += element;
// })

// console.log(sum1, sum2, sum3);

// 1 ~ 100 까지의 배열을 for 문을 사용해서 만들기!
// 그리고 해당 배열의 합을 For 문, For of 문, forEach 문을 사용해서 구하기

// let 마지막숫자 = 100;
// var for문 = 0;
// var forOf문 = 0;
// var forEach문 = 0;

// // 1부터 100까지의 값을 갖고 있는 배열 만들기
// let 숫자배열 = [];
// for (let 시작숫자 = 1; 시작숫자 <= 100; 시작숫자++) {
//   숫자배열.push(시작숫자);
//   // console.log(숫자배열[시작숫자-1]);
// }

// // For 문
// for (let 시작숫자 = 1; 시작숫자 <= 마지막숫자; 시작숫자++) {
//   for문 += 시작숫자;
// }
// console.log(`for문을 이용해 계산된 1부터 100까지의 합은 "${for문}" 입니다.`);

// // For of 문
// for (let 배열요소 of 숫자배열) {
//   forOf문 += 배열요소;
// }
// console.log(
//   `for of문을 이용해 계산된 1부터 100까지의 합은 "${forOf문}" 입니다.`
// );

// // forEach 문
// 숫자배열.forEach(function (배열요소) {
//   forEach문 += 배열요소;
// });
// console.log(
//   `forEach문을 이용해 계산된 1터 100까지의 합은 "${forEach문}" 입니다.`
// );

// let numbers = [1, 2, 3, 4, 5, 6];
// let reduce = numbers.reduce(function (sum, item) {
//   return sum + item;
// });

// let fore = numbers.forEach(function (element) {
//   return element;
// });

// let map = numbers.map(function (element) {
//   return element;
// });

// console.log(fore)
// console.log(map.length)

// const fruits = ["사과", "파인애플", "수박", "포도", "아륀지"];

// let obj = fruits.map(function(item, idx){
//   return {
//     id: idx + 1,
//     name: item,
//   }
// })

// console.log(obj)

// 1 ~ 100 까지의 배열을 for 문을 사용해서 만들기!
// 그리고 해당 배열의 합을 reduce 를 이용해서 구하기!

// let numbers = [];
// for(let i = 1; i <= 100; i++){
//   numbers.push(i);
// }

// let reduce = numbers.reduce(function(sum, item){
//   return sum += item;
// })

// console.log(reduce);

// let str = "apple";
// console.log([...str]);
// [...str].forEach(function(element, index, arr){
//   console.log(element, index, arr);
// })

// let numbers = [1, 2, 3, 4, 5, 6];

// let arr = numbers.filter(function(item){
//   return item > 3;
// })

// let arr2 = numbers.filter((item) => item > 3);

// console.log(arr2);

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// let arr3 = words.filter(item => item.length >= 6);

// console.log(arr3)

// console.log("너무 졸립당")

// let same = [];
// let diff = [];

// let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
// let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고", "지구", "오락실"];

// // // includes > 같으면 same배열에 넣어!
// same = fruits1.filter((item) => fruits2.includes(item));
// diff = fruits1.filter((item) => !fruits2.includes(item));

// // same = fruits1.filter((fruit1) => fruit1 = [...fruits2]);
// // diff = fruits1.filter((fruit1) => fruit1 = ![...fruits2]);
// console.log(same);
// console.log(diff);
// console.log([...fruits2])

// fruits1.forEach(function(index){
//   if(fruits2.includes(index)){
//     same.push(index);
//     console.log(`${index}는 같음`)
//   }else{
//     diff.push(index);
//     console.log(`${index}는 다름`)
//   }
// })
// console.log(same);
// console.log(diff);

// fruits2.forEach(function(index){
//   if(same.includes(index)){
//     console.log(`${index}는 이미 추가 했으니 패스`)
//   }else{
//     diff.push(index);
//     console.log(`${index}는 다르니까 추가`);
//   }
// })
// console.log(same);
// console.log(diff);

// let superMan = {
//   name: "Clark",
//   gender: "M",
//   getHeight: function(){

//   },
// }
//superMan()

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const returnObj = Object.assign(obj1, obj2);
// console.log(obj1);
// console.log(returnObj);

// const userName = {
//   id: 1,
//   name: "tetz",
// };
// const userEmail = {
//   id: 1,
//   email: "xenosign@naver.com",
// };
// const assignedObj = Object.assign(userName, userEmail);
// console.log(assignedObj);
// console.log(userName);
// console.log(assignedObj === userName);
// const a = { po: "뽀로로" };
// const b = { po: "뽀로로" };
// console.log(a === b);

