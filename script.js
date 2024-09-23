// const wrapper = document.getElementById("test");
// const frameContainer = wrapper.querySelector(".container");
// const framesAll = frameContainer.querySelectorAll(".frame");
// const framesNum = framesAll.length;
// for (let i = 0; i < framesNum; i++) {
//   framesAll[i].style.order = i + 1;
// }
// const scrollClick = (direction) => {
//   for (let i = 0; i < framesNum; i++) {
//     let current_order = Number(framesAll[i].style.order);
//     if (direction == "forward") {
//       if (current_order == 1) {
//         var new_order = framesNum;
//       } else {
//         var new_order = Number(current_order) - 1;
//       }
//     } else if (direction == "backward") {
//       if (current_order == framesNum) {
//         var new_order = 1;
//       } else {
//         var new_order = Number(current_order) + 1;
//       }
//     }
//     framesAll[i].style.order = new_order;
//   }
// };
