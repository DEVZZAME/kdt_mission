$("td").on("click", function (e) {
  $("#date").val(`2022년 7월 ${this.innerText}일`);
  $("button").off("click").on("click", function () {
    let div = $("<div>").text($("#content").val());
    div.on("click", function () {
      div.remove();
    })
    $(e.currentTarget).append(div);
  });
})

// $("button").unbind("click");
// $("button").bind("click", function () {
//   target = $(e.currentTarget).append($("<div>").text($("#content").val()));
//   e.currentTarget = null;
// });



// const date = document.querySelector("#date");
// const content = document.querySelector("#content");
// const btn = document.querySelector("button");
// const table = document.querySelector("table");

// table.addEventListener("click", function (e) {
//   date.value = `2022년 7월 ${e.target.textContent}일`;
//   target = e.target;
// }); //table.addEventListener

// function writeSchedule() {
//   const dv = document.createElement("div");
//   dv.textContent = content.value;
//   target.after(dv);

//   dv.addEventListener("click", function () {
//     dv.remove();
//   });//dv.addEventListener
// } //writeSchedule()
