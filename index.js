// heart section
let count = 0;

const countheart = document.getElementById("heart-count");
const heartbtn = document.querySelectorAll(".heart-icon");
for (const btn of heartbtn) {
  btn.addEventListener("click", function () {
    count++;
    countheart.innerText = count;
  });
}

