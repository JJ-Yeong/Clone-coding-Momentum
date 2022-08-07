const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);
// h1이 갖고있는 모든 property를 표시함. 그 중 첫 두 글자가 "on"으로 시작하는 요소가 이벤트 관련 property임

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "green";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI!");
}

function handleWindowOnline() {
  alert("All Good!");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

// title.onclick = handleTitleClick;
// title.onmouseenter = handleMouseEnter;
// title.onmouseleave = handleMouseLeave;
// 위와 같은 방법으로도 같은 기능이 구현됨.
// 하지만 addEventListener가 더 쓰기 편함. removeEventListener로 listener를 제거할 수 있기 때문.

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
