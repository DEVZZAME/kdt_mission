let btnEl = document.querySelector(".btn");
// let boxEl = document.querySelector(".box");
let boxEls = document.querySelectorAll(".box");
console.log(boxEls);//박스가 100개니까 node 100개가 출력

// 0부터 9까지 각각 다른 색상을 부여해줄 것임
// index가 9가 되면 다시 0으로 리턴하여 반복되게 구현

let num = 0;

btnEl.addEventListener("click", ()=>{
  boxEls.forEach(function(boxEl, index){
    if(num==0){
      boxEl.classList.add(`box_${(index+num)%10}`);
    }else{
      boxEl.classList.remove(`box_${(index+num-1)%10}`); //이전 클래스 삭제
      boxEl.classList.add(`box_${(index+num)%10}`); //1 증가된 클래스 부여
    }
    //boxEl = 지속적으로 반복되는 box Element
    //index = 지속적으로 반복되고 있는 횟수
    //index%10을 해줌으로서 0부터 9까지 고정된 값을 부여
    console.log(index, boxEl);
  });
  num+=1;
  console.log("num은"+num);

  // 현재는 박스의 개수가 10개, css의 개수도 10개이기 때문에 숫자가 딱 맞아 떨어지지만,
  // 각 개수가 일치하지 않을 경우 숫자 조절 해줘야함. if(num>9){num=0}이런식으로 초기화 해야함.
});

