// 두 배열에서 동일한 요소만을 가지는 배열 same 만들기
// 두 배열에서 서로 다른 요소만을 가지는 배열 diff 만들기

let same = [];
let diff = [];

let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고", "지구", "오락실"];

// includes > 같으면 same배열에 넣어!

fruits1.forEach(function(index){
  if(fruits2.includes(index)){
    same.push(index);
    console.log(`${index}는 같음`)
  }else{
    diff.push(index);
    console.log(`${index}는 다름`)
  }
})
console.log(same);
console.log(diff);

fruits2.forEach(function(index){
  if(same.includes(index)){
    console.log(`${index}는 이미 추가 했으니 패스`)
  }else{
    diff.push(index);
    console.log(`${index}는 다르니까 추가`);
  }
})
console.log(same);
console.log(diff);
