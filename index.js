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

// copy section

let copy = 0;
const copyCount = document.getElementById("copy-count");

const copybtn = document.querySelectorAll(".copy-btn");
for (const btn of copybtn) {
  btn.addEventListener("click", function () {
    copy++;
    copyCount.innerText = copy;
  });
}
