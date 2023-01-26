const gameContainer = document.getElementById("game-container");
const gameOptins = document.querySelectorAll(".game-item");
// result
const resultSection = document.getElementById("result-section");
const selectedItemHolder = document.querySelectorAll(".selected-item-holder");
// rules
const rulesSection = document.getElementById("rules-section");
const rulesBtn = document.getElementById("rules-btn");
const closeRulesBtn = document.getElementById("close-rules-btn");

// open rules section
rulesBtn.addEventListener("click", rulesSectionHandler);
// close rules section
closeRulesBtn.addEventListener("click", rulesSectionHandler);
// start the game
gameOptins.forEach((option) => {
  option.addEventListener("click", resultSectionHandler.bind(option, option));
});

// functions secton
function rulesSectionHandler() {
  rulesSection.classList.toggle("active");
}

function resultSectionHandler(selectedItem) {
  selectedItemHolder[0].innerHTML += `
    <div class="result-item item absolute shadow-primary-${selectedItem.dataset.item}To/60">
      <span class="icon-holder border-primary-${selectedItem.dataset.item}To">
        <img src="./images/icon-${selectedItem.dataset.item}.svg" alt="${selectedItem.dataset.item} icon" />
      </span>
    </div>`;
  gameContainer.style.display = "none";
  resultSection.classList.add("active");
}
