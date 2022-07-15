import DonutGame from "./DonutGame.js";

// Drop Down Menu JS
document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle("active")
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("active")
    })
  })

//Game Start

const newGame = new DonutGame();

updateAll();
setAllBtns();

//Update Functions

function updateAll(){
    updateDonutCount();
    updateAutoClickerAmount();
    updateAutoClickerPrice();
    canUserBuyAutoClicker();
    canUserBuyMultiplier();
    updateMultiplierCost();
    updateMultiplierAmount()
    updateMultiplierValue();
}

function updateDonutCount(){
const dountAmountEl = document.querySelector("#donut-num");
dountAmountEl.innerText = newGame.getDonutCount();
}
function updateAutoClickerAmount(){
    const dountAutoClickerAmountEl = document.querySelector("#auto-clicker-amount");
    dountAutoClickerAmountEl.innerText = newGame.getDonutAutoClickerAmount();
}
function updateAutoClickerPrice(){
    const dountAutoClickerPriceEl = document.querySelector("#auto-clicker-price");
    dountAutoClickerPriceEl.innerText = newGame.getDonutAutoClickerPrice();
}
function updateMultiplierCost(){
    const multiplierPriceEl = document.querySelector("#multiplier-price");
    multiplierPriceEl.innerText = newGame.getDonutMultiplierPrice();
}
function updateMultiplierAmount(){
    const multiplierAmountEl = document.querySelector("#multiplier-amount");
    multiplierAmountEl.innerText = newGame.getDonutMultiplierAmount();
}
function updateMultiplierValue(){
    const multipleirValueEl = document.querySelector("#current-multiplier");
    multipleirValueEl.innerText = newGame.getDonutCurrentMultiplier();
}

//BTN Functions

function setAllBtns(){
    donutBtn();
    autoClickerBtn();
    multiplierBtn();
    resetBtn();
}

function donutBtn(){
    const donutImgEl = document.querySelector("#donut-img");
    donutImgEl.addEventListener("click", ()=>{
        newGame.click();
        updateAll();
    })
}

function autoClickerBtn(){
    const donutAutoClickerBtn = document.querySelector(".auto-btn");
    donutAutoClickerBtn.addEventListener("click", ()=>{
        newGame.buyIfCanAffordAutoClicker();
    })
}

function multiplierBtn(){
    const donutMultiplierBtn = document.querySelector(".multiplier-btn");
    donutMultiplierBtn.addEventListener("click", ()=>{
        newGame.buyIfCanAffordMultiplier();
    })
}

function resetBtn(){
    const resetBtnElm = document.querySelector(".reset");
    resetBtnElm.addEventListener("click", ()=>{
        newGame.resetGame();
        updateAll();
    })
}

//Game Functions

setInterval(()=>{
    newGame.autoClickerActive();
    updateAll();
}, 1000)

function canUserBuyAutoClicker(){
    const donutAutoClickerBtn = document.querySelector(".auto-btn");
    if (!newGame.checkIfCanAffordAutoClicker()){
        donutAutoClickerBtn.classList.add("hidden");
    } else {
        donutAutoClickerBtn.classList.remove("hidden");
    }
}

function canUserBuyMultiplier(){
    const donutMultiplierBtn = document.querySelector(".multiplier-btn");
    if (!newGame.checkIfCanAffordMultipler()){
        donutMultiplierBtn.classList.add("hidden");
    } else {
        donutMultiplierBtn.classList.remove("hidden");
    }
}





//Got auto clicker working need to work on the price logic (graying out button when not enough clicks)