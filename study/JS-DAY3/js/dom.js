// 현재 load된 document에서 '.box 안에 있는 small__box'라고 하는 쿼리 선택자를 찾아줘!
// let boxEl = document.querySelector('.box .small__box');
// <div class="box"></div>
// console.log(boxEl);
// HTML 요소에 적용할 수 있는 메소드!
// boxEl.addEventListener();
// 인수(Arguments)를 추가 가능!
// boxEl.addEventListener(1, 2);
// 1 - 이벤트(Event, 상황)
// boxEl.addEventListener('click', 2);

// let boxEl1 = document.querySelector('.box');
// console.log(boxEl1);

// let boxEl2 = document.getElementById("second-box");
// console.log(boxEl2);

// let boxEl3 = document.getElementsByClassName('box');
// console.log(boxEl3);

// let boxEl = document.querySelector('.box');
// console.log(boxEl);
// boxEl.classList.add('active');
// console.log(boxEl);
// let isContains = boxEl.classList.contains('active');
// //true
// console.log(isContains);
// boxEl.classList.remove('active');
// isContains = boxEl.classList.contains('active');
// // false
// console.log(isContains);

// boxEl.addEventListener("click", function(){
//   alert("Add Event Listener");
// })
// boxEl.addEventListener("click", function(){
//   if(boxEl.classList.contains('orange')){
//     boxEl.classList.remove('orange');
//     boxEl.classList.add('skyblue');
//   }else if(boxEl.classList.contains('skyblue')){
//     boxEl.classList.remove('skyblue');
//     boxEl.classList.add('orange');
//   }else{
//     boxEl.classList.add('orange');
//   }
// })
// let boxEl = document.querySelector('.box');
// boxEl.addEventListener("click", function(){
//   boxEl.textContent = "Hello, World!"
// })

// .box 를 최초 클릭하면 배경을 orange 색으로 변경하기
// .box 를 다시 클릭 했을 때 배경이 orange 색이면 skyblue 로 변경 하거나 skyblue 면 orange 로 변경하는 페이지 만들기!

// let boxEl = document.querySelector('.box');
// boxEl.addEventListener("click", function(){
//     if(boxEl.classList.contains('orange')){
//       boxEl.classList.remove('orange');
//       boxEl.classList.add('skyblue');
//     }else if(boxEl.classList.contains('skyblue')){
//       boxEl.classList.remove('skyblue');
//       boxEl.classList.add('orange');
//     }else{
//       boxEl.classList.add('orange');
//     }
//   })

// 버튼 2개(값은 각각 버튼, 입력) 생성/ input box 생성(type=text) / 임의의 span 요소 (값은 “가나다라마바사”) 생성
// 버튼을 클릭하면
// text input box에 placeholder 속성 “아이디를 입력하세요”로 추가
// span 요소의 값도 “아이디를 입력하세요” 로 변경하기
// 입력을 클릭하면
// text input box에 타이핑하여 입력 받은 값을 span 요소의 컨텐츠로 만들기
// let buttonEl1 = document.querySelector('#first_button');
// buttonEl1.addEventListener("click", function(){
//   document.querySelector('#text_input').setAttribute('placeholder', "아이디를 입력하세요.")
//   document.querySelector('#random_text').textContent = '아이디를 입력하세요.';
// })

// let buttonEl2 = document.querySelector('#second_button');
// buttonEl2.addEventListener("click", function(){
//   let input_text_value = document.querySelector('#text_input').value;
//   document.querySelector('#random_text').textContent = input_text_value;
// })

let boxEls = document.querySelectorAll(".box");
console.log(boxEls);

boxEls.forEach((boxEl, index) => {
  boxEl.classList.add(`box_${index + 1}`);
});

console.log(boxEls);