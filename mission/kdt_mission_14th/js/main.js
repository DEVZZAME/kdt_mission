// 번호 가리기!
// function solution(phone_number) {
//   var answer = '';
//   for(let i = 0; i < phone_number.length; i++){
//       answer += i < phone_number.length-4 ? "*" : phone_number.charAt(i);
//   }
//   return answer;
// }

// 자릿수 더하기
// function solution(n){
//     var answer = 0;
//     for(let i = 0; i < n.toString().length; i++){
//         answer += Number(n.toString().charAt(i))
//     }//for
//     return answer;
// }

// 없는 숫자 더하기
// function solution(numbers) {
//   var answer = 0;
//   for(let i = 0; i < 10; i++){
//       if(!numbers.includes(i)){
//           answer+=i;
//       }
//   }
//   return answer;
// }

// 나누어 떨어지는 숫자 배열
// function solution(arr, divisor) {
//   var answer = [];

//   for(let i = 0; i < arr.length; i++){
//       if(arr[i]%divisor ==0){
//           answer.push(arr[i]);
//       }
//   }
//   if(answer[0]==undefined){
//       answer[0] = -1;
//   }

//   return answer.sort(function(a, b){
//       return a - b;
//   });
// }

// 모의고사
// function solution(answers) {
//   let answer = [];

//   const p1 = [1, 2, 3, 4, 5];
//   const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
//   const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//   let same = [0, 0, 0];

//   for (let i = 0; i < answers.length; i++) {
//     if (answers[i] === p1[i % p1.length]) {
//       same[0]++;
//     }
//     if (answers[i] === p2[i % p2.length]) {
//       same[1]++;
//     }
//     if (answers[i] === p3[i % p3.length]) {
//       same[2]++;
//     }
//   }

//   const max = Math.max(...same);

//   for (let i = 0; i < same.length; i++) {
//     if (max === same[i]) answer.push(i + 1);
//   }

//   return answer;
// }
