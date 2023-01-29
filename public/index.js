const gameContainer = document.querySelector("[data-game-container]");
const gameItems = document.querySelectorAll(".game-item");
// result
const resultSection = document.querySelector("[data-result-section]");
const selectedItemsHolders = document.querySelectorAll(".selected-item-holder");
const resultContainer = document.getElementById("result-container");
const againBtn = document.querySelector("[data-again-btn]");

startTheGame();

restartTheGame();

// functions section -----------------------------------------------
(function rulesSectionHandler() {
  const rulesSecElem = document.getElementById("rules-section");
  const rulesBtn = document.getElementById("rules-btn");
  const closeRulesBtn = document.getElementById("close-rules-btn");

  document.addEventListener("click", (e) => {
    const closestToXBtn = e.target.closest("[data-close-btn]");
    if (e.target === rulesBtn) {
      rulesSecElem.classList.remove("hidden");
      setTimeout(() => {
        rulesSecElem.classList.add("active");
      }, 150);
      return;
    }
    if (closestToXBtn === closeRulesBtn || e.target === rulesSecElem)
      rulesSecElem.classList.remove("active");
    setTimeout(() => {
      rulesSecElem.classList.add("hidden");
    }, 200);
  });
})();

function startTheGame() {
  gameItems.forEach((item) => {
    item.addEventListener("click", () => {
      gameContainer.classList.add("hidden", "hide");
      resultSection.classList.remove("hidden");
      setTimeout(() => {
        resultSection.classList.add("active");
      }, 100);
      getSelectedItems.bind(item)();
    });
  });
}

function getSelectedItems() {
  const selectedItemsObj = {};
  const mySelectedItem = this.dataset.item;
  selectedItemsObj.me = mySelectedItem;
  selectedItemsObj.random = getRandomItem();

  selectedItemsHandler(selectedItemsObj);
  setTimeout(() => {
    showResult(getResultState(selectedItemsObj));
  }, 500);
}

function selectedItemsHandler({ me, random }) {
  let slcItemsArr = [me, random];
  selectedItemsHolders.forEach((holder, i) => {
    holder.innerHTML += `
    <div class="item result-item z-10 shadow-primary-${slcItemsArr[i]}To/60">
      <span class="icon-holder border-primary-${slcItemsArr[i]}To">
        <img src="./images/icon-${slcItemsArr[i]}.svg" alt="${slcItemsArr[i]} icon" />
      </span>
    </div>`;
  });
}

function getRandomItem() {
  const items = [
    "paper",
    "scissors",
    "rock",
    "paper",
    "scissors",
    "rock",
    "paper",
    "scissors",
    "rock",
  ];
  let j = Math.floor(Math.random() * items.length);
  return items[j];
}

function getResultState({ me, random }) {
  const scoreValElem = document.querySelector("[data-score-value]");
  const rules = {
    s: "p",
    p: "r",
    r: "s",
  };
  if (me[0] === random[0]) return `d`;
  for (let [key, val] of Object.entries(rules)) {
    if (key === me[0] && val === random[0]) {
      scoreValElem.textContent++;
      return true;
    }
  }
  return false;
}

function showResult(resultState) {
  const resultValue = document.querySelector("[data-result]");
  let value = "";
  if (resultState === "d") value = `Draw`;
  else {
    if (resultState) {
      value = `You win`;
      selectedItemsHolders[0].classList.add("winner");
    } else {
      value = `You lose`;
      selectedItemsHolders[1].classList.add("winner");
    }
  }
  resultValue.textContent = value;
  resultContainer.classList.remove("hidden");
  setTimeout(() => {
    resultContainer.classList.add("active");
  }, 100);
}

function restartTheGame() {
  againBtn.addEventListener("click", () => {
    selectedItemsHolders.forEach((holder) => {
      holder.classList.remove("winner");
      holder.querySelector(".result-item")?.remove();
    });
    hideElements(resultContainer);
    hideElements(resultSection);
    gameContainer.classList.remove("hidden");
    setTimeout(() => {
      gameContainer.classList.remove("hide");
    }, 100);
  });
}

function hideElements(element) {
  element.classList.add("hidden");
  element.classList.remove("active");
}
