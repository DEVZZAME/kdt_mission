// 1 ~ 100 까지의 배열을 for 문을 사용해서 만들기!
// 그리고 해당 배열의 합을 For 문, For of 문, forEach 문을 사용해서 구하기

let 마지막숫자 = 100;
var for문 = 0;
var forOf문 = 0;
var forEach문 = 0;

// 1부터 100까지의 값을 갖고 있는 배열 만들기
let 숫자배열 = [];
for(let 시작숫자 = 1; 시작숫자 <= 100; 시작숫자++){
  숫자배열.push(시작숫자);
  // console.log(숫자배열[시작숫자-1]);
}

// For 문
for(let 시작숫자 = 1; 시작숫자 <= 마지막숫자; 시작숫자++){
  for문 += 시작숫자;
}
console.log(`for문을 이용해 계산된 1부터 100까지의 합은 "${for문}" 입니다.`);

// For of 문
for(let 배열요소 of 숫자배열){
  forOf문 += 배열요소;
}
console.log(`for of문을 이용해 계산된 1부터 100까지의 합은 "${forOf문}" 입니다.`);

// forEach 문
숫자배열.forEach(function(배열요소){
  forEach문 += 배열요소;
})
console.log(`forEach문을 이용해 계산된 1터 100까지의 합은 "${forEach문}" 입니다.`);