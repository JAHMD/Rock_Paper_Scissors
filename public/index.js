const gameContainer = document.getElementById("game-container");
const gameItems = document.querySelectorAll(".game-item");
// result
const resultSection = document.getElementById("result-section");
const selectedItemHolders = document.querySelectorAll(".selected-item-holder");
const resultContainer = document.getElementById("result-container");
const againBtn = document.querySelector("[data-again-btn]");
// rules
const rulesSection = document.getElementById("rules-section");
const rulesBtn = document.getElementById("rules-btn");
const closeRulesBtn = document.getElementById("close-rules-btn");

// open rules section
rulesBtn.addEventListener("click", rulesSectionHandler);
// close rules section
closeRulesBtn.addEventListener("click", rulesSectionHandler);

startTheGame();

againBtn.addEventListener("click", restartTheGame);

// functions section -----------------------------------------------
function rulesSectionHandler() {
  rulesSection.classList.toggle("active");
}

function startTheGame() {
  gameItems.forEach((item) => {
    item.addEventListener("click", () => {
      gameContainer.style.display = "none";
      resultSection.classList.add("active");
      getSelectedItems.bind(item)();
    });
  });
}

function getSelectedItems() {
  const selectedItemsObj = {};
  const mySelection = this.dataset.item;
  selectedItemsObj[0] = mySelection;
  selectedItemsObj[1] = getRandomItem();
  resultSectionHandler(selectedItemsObj);
  setTimeout(() => {
    showResult(getResult(selectedItemsObj));
  }, 500);
}

function resultSectionHandler(selectedItems = {}) {
  selectedItemHolders.forEach((holder, i) => {
    holder.innerHTML += `
    <div class="result-item item absolute shadow-primary-${selectedItems[i]}To/60">
      <span class="icon-holder border-primary-${selectedItems[i]}To">
        <img src="./images/icon-${selectedItems[i]}.svg" alt="${selectedItems[i]} icon" />
      </span>
    </div>`;
  });
}

function getRandomItem() {
  const items = ["paper", "scissors", "rock"];
  let j = Math.floor(Math.random() * items.length);
  return items[j];
}

function getResult(selectedItems = {}) {
  const rules = {
    s: "p",
    p: "r",
    r: "s",
  };
  const mySelection = selectedItems[0][0];
  const theOtherSelection = selectedItems[1][0];
  if (mySelection === theOtherSelection) return `d`;
  // if (mySelection === "s" && theOtherSelection === "p") return true;
  // else if (mySelection === "r" && theOtherSelection === "s") return true;
  // else if (mySelection === "p" && theOtherSelection === "r") return true;
  // else return false;
  for (let [key, val] of Object.entries(rules)) {
    if (key === mySelection && val === theOtherSelection) return true;
  }
  return false;
}

function showResult(resultState) {
  const resultValue = document.querySelector("[data-result]");
  let value = "";
  console.log(selectedItemHolders[1]);
  if (resultState === "d") value = `Draw`;
  else {
    if (resultState) {
      value = `You win`;
      selectedItemHolders[0].classList.add("winner");
    } else {
      value = `You lose`;
      selectedItemHolders[1].classList.add("winner");
    }
  }
  resultValue.textContent = value;
  resultContainer.classList.remove("hidden");
}
// !needs to be refactored
function restartTheGame() {
  selectedItemHolders.forEach((holder) => {
    holder.classList.remove("winner");
    holder.querySelector(".result-item")?.remove();
  });
  resultContainer.classList.add("hidden");
  gameContainer.style.display = "block";
  resultSection.classList.remove("active");
}
