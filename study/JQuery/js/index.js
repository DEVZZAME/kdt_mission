// let spanEl = document.querySelector("span");
// spanEl.remove();

// function showValue(){
//   $("input:first").val("가나다라마바사");
// }

// const inputTask = $("input").val();
// $("span").text(inputTask);

// const inputText = document.querySelector(".text-input");
// const writeBtn = document.querySelector(".write-btn");
// const modifyBtn = document.querySelector(".modify-btn");
// const spanEl = document.querySelector("span");

// modifyBtn.addEventListener("click", function(){
//     inputText.value = "가나다라마바사";
// })

// function changeSpan(){
//   spanEl.textContent = inputText.value;
// }

// on() = addEventListener()
// $(".write-btn").on("click", function(){
//   let text = $(".text-input").val();
//   $("span").text(text);
// })

// $(".modify-btn").on("click", function(){
//   $(".text-input").val("가나다라마바사");
// })

// $(".text-input").on("click", function(){
//   $(".text-input").attr("type", "button");
//   $(".text-input").attr("value", "button");
// })

// $(".modify1-btn").on("click", function(){
//   $(".text-input").attr("placeholder", "변경1을 누르셨습니다");
// })

// $(".modify2-btn").on("click", function(){
//   $(".text-input").attr("type", "radio");
// })

// const textInput = document.querySelector(".text-input");
// const btn1 = document.querySelector(".modify1-btn");
// const btn2 = document.querySelector(".modify2-btn");

// btn1.addEventListener("click", function(){
//   textInput.setAttribute("placeholder", "변경1을 누르셨습니다");
// })
// btn2.addEventListener("click", function(){
//   textInput.setAttribute("type", "radio");
// })

// $("div").css("background-color", "orange");

// document.querySelector("div").style = "background-color : skyblue; font-size : 40px"

// function changeCss1(){
//   document.querySelector("div").style = "background-color : orange;"
// }
// function changeCss2(){
//   $("div").css("background-color", "skyblue")
// }

// $("p").html("<h1>루피</h1>");
// $("p").replaceWith( "<h1>" + $('p').html() + "</h1>" );

// document.querySelector("p").innerHTML = "<h1>루피</h1>";

// const li = document.createElement("li");
// li.textContent = "추가용";

// console.log($(".me").before(li));


// const elem = document.createElement('li');

// // add text
// elem.innerText = 'JS 추가용';

// // grab target element reference
// const target = document.querySelector('.me');

// // insert the element before target element
// target.parentNode.insertBefore(elem, target);

// let inputVal = $(".text-input").val();


// $(".btn1").on("click", function(){
//   let text = $("li").val($(".text-input").val();
//   $("ul").append(`<li>${text}</li>`);
// })

let text = $(".input-text").val();

$(".btn").on("click", function(){
  console.log($(".input-text").val());
  $("ul").append("<li>" + text + "</li>");
})