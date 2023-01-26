const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
// const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);
function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  // renderPopup();
}

// function renderPopup() {
//   // popup.appenChild(menu);
// }

//todo ===========================_____ примеры кодов ______

let arr = [1, 2, 3, 4, 5];
const newArr = arr.map((num) => {
  return "str";
});
console.log(newArr);

(5)[("str", "str", "str", "str", "str")];
