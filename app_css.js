const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

// toggle을 사용하면 위와같은 if문 없이 class를 추가 및 삭제할 수 있다.

const clickedClass = "clicked";

function handleTitleClick() {
  h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handleTitleClick);
