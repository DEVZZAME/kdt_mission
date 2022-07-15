let btnEl = document.querySelector(".btn");
let boxEls = document.querySelectorAll(".container .box");

let turn = 0;

btnEl.addEventListener("click", () => {
  boxEls.forEach((boxEl, index) => {
    if (turn == 0) {
      boxEl.classList.add(`box_${(index + turn) % 7}`);
    } else {
      boxEl.classList.remove(`box_${(index + turn - 1) % 7}`);
      boxEl.classList.add(`box_${(index + turn) % 7}`);
    }
  }); //boxEls
  turn += 1;
}); //btnEl

// 1. 버튼 요소를 선택하는 코드 작성
// 2. 모든 박스를 선택하는 코드 작성
// 3. 버튼을 클릭 했을 때, 함수가 실행되는 코드 작성
// 4. 3번의 함수에서 모든 박스를 선택하는 코드 작성
// 5. 3번에서 모든 박스를 선택했으면, HTML을 조작하는 코드 작성.
// 6. 조건문을 통해, 최초 클릭시와 이후 클릭시에 차별을 주는 코드 작성.
// 7. 클릭할 때마다 차별을 주어야 하기 때문에 숫자형 데이터를 선언.
// 8. 박스와 관련된 HTML이 조작된 이후 증감을 통해 변수의 값 변경.
// * 첫 클릭시에는 아직 HTML 조작이 이루어지지 않았지만,
//   이후 클릭부터는 이전 HTML 조작을 통해 클래스가 추가되었으므로, 해당 부분 삭제 후 조작.
//   최초 클릭 이후부터는 첫 번째 박스에 두 번째 박스의 클래스를, 마지막 박스에는 첫 번째 클래스를 넣어주는 것이 관건.
// % Operator를 사용하면 쉽게 풀림.
