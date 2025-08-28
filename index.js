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
    alert('Copied:')
    copyCount.innerText = copy;
  });
}


//call button click to minus coin

let coin = 100;
const currentCoins = document.getElementById("coin");

const callbtn = document.querySelectorAll(".call-btn");

for (const btn of callbtn) {
  btn.addEventListener("click", function () {
    if (coin < 20) {
      alert("❌ You do not have enough coins to make a call!");
      return;
    }
    coin -= 20;
    currentCoins.innerText = coin;

    const parent = btn.parentNode.parentNode
    const text = parent.querySelector('h1').innerText
    const num = parent.querySelector('h3').innerText

    alert(`📞 Calling ${text} ${num}` );
  });
}


