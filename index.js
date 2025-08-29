// heart section

let count = 0;
const countHeart = document.getElementById("heart-count");

const heartbtn = document.querySelectorAll(".heart-icon");
for (const btn of heartbtn) {
  btn.addEventListener("click", function () {
    count++;
    countHeart.innerText = count;
  });
}

let copy = 0;
const countCopy = document.getElementById("copy-count");

function copyNum(button) {
  const value = button.parentNode.previousElementSibling.children[0].innerText;
  navigator.clipboard.writeText(value);

  copy++;
  countCopy.innerText = copy;

  alert("Copied: " + value);
}

let coin = 100;
const currentCoins = document.getElementById("coin");
const callbtn = document.querySelectorAll(".call-btn");
const callHistory = document.getElementById("call-history");
const clearBtn = document.getElementById("clear-history");

// handle call buttons
for (const btn of callbtn) {
  btn.addEventListener("click", function () {
    if (coin < 20) {
      alert("❌ You do not have enough coins to make a call!");
      return;
    }

    coin -= 20;
    currentCoins.innerText = coin;

    const parent = btn.parentNode.parentNode;
    const text = parent.querySelector("h1").innerText;
    const num = parent.querySelector("h3").innerText;

    alert("📞 Calling " + text + " " + num + "...");

    // add entry to history
    const entry = document.createElement("p");
    // entry.innerText = "" + text + " (" + num + ") - " + new Date().toLocaleTimeString();
    // callHistory.appendChild(entry);

    entry.innerHTML = `
  <div class="flex justify-between items-end p-4 my-4 bg-[#FAFAFA] rounded-xl shadow-[0px_2px_3px_0px_rgba(0,0,0,0.15)]">
    <div>
      <h3 class=" font-normal text-[#111111] text-[15px]">${text}</h3>
      <p class="text-[#000000] font-light">${num}</p>
    </div>
    <p class="text-[12px] text-[#000000]">
      ${new Date().toLocaleTimeString()}
    </p>
  </div>
`;

    callHistory.appendChild(entry);
  });
}

// handle clear button
clearBtn.addEventListener("click", function () {
  callHistory.innerHTML = "";
});
