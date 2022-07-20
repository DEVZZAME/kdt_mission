// 2022.07.20
// JS 구현
// const date = document.querySelector("#date");
// const content = document.querySelector("#content");
// const calendar = document.querySelector("table");

// // 클릭된 포인트를 전역변수에 저장하는 방법은 CS적으로 리스크가 큼
// // 소괄호 내에 인수로 저장하는 것을 지향
// let target;

// calendar.addEventListener("click", (e) => {
//   // e.target은 디테일하게 클릭된 포인트만 값으로 갖음
//   // tagName은 클릭된 요소의 태그이름을 출력 함
//   // e.currentTarget은 부모요소까지 넓은 값을 갖음
//   // console.log("e-target", e.target.tagName);
//   // console.log("e-currentTarget", e.currentTarget);

//   if (e.target.tagName === "P") {
//     // P 태그 > P의 값을 날짜 input 으로 전달
//     date.value = `2022년 7월 ${e.target.textContent}일`;
//     // P 태그의 부모 TD 태그를 전역 변수에 저장
//     target = e.target.parentNode;
//   } else if (e.target.tagName === "TD") {
//     // TD 태그 > TD 태그의 자식인 P 태그의 값을 날짜 input 의 값으로 전달
//     date.value = `2022년 7월 ${e.target.firstChild.textContent}일`;
//     // TD 태그 자체를 전역 변수에 저장
//     target = e.target;
//   }
//   // else if (e.target.tagName === "DIV"){
//   //   e.target.remove();
//   // }//condition if
// }); //calendar.addEventListener

// // 작성 버튼이 클릭되면 실행되는 함수
// function writeSchedule() {
//   let task = content.value;
//   let divEl = document.createElement("div");

//   // 추가된 div element에 onclick="delTask()"라는 속성을 부여해주고 파라미터로 this를 넘겨줌
//   divEl.setAttribute("onclick", "delTask(this);");

//   divEl.textContent = task;

//   // divEl.addEventListener("click", () => {
//   //   if (divEl.style.textDecoration === "") {
//   //     divEl.style = "text-decoration:line-through";
//   //   } else {
//   //     divEl.remove();
//   //   }
//   // });

//   target.append(divEl);

//   content.value = "";
// }

// function delTask(t) {
//   t.remove();
// }

