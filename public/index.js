const rulesSection = document.getElementById("rules-section");
const rulesBtn = document.getElementById("rules-btn");
const closeRulesBtn = document.getElementById("close-rules-btn");

rulesBtn.addEventListener("click", rulesSectionHandler);
closeRulesBtn.addEventListener("click", rulesSectionHandler);

function rulesSectionHandler() {
  rulesSection.classList.toggle("active");
}
