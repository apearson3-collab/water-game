const waterButton = document.getElementById("collectWater");
const workButton = document.getElementById("goToWork");
const waterBar = document.getElementById("waterBar");
const workBar = document.getElementById("workBar");
const playerWater = document.getElementById("playerWater");
const playerMoney = document.getElementById("playerMoney");
const gameText = document.getElementById("gameOverText");

let waterStored = 30;
let maxWater = 200;
let money = 0;
let gameLost = false;
let isAnimating = false;

waterButton.addEventListener("click", waterEvent);
workButton.addEventListener("click", workEvent);

function waterEvent () {
    if (isAnimating) return;

    isAnimating = true;
    waterButton.disabled = true;
    workButton.disabled = true;

    waterBar.style.width = "100%";
    waterBar.style.opacity = "0%";

    setTimeout(() => {
        waterStored += 100;
        waterStored -= 10;
        if (waterStored > maxWater) {
            waterStored = maxWater;
        }
        if (waterStored <= 0) {
            waterStored = 0;
            gameLost = true;
            gameText.style.display = "block";
        }
        playerWater.textContent = "Water: " + waterStored + "/" + maxWater;
        
    }, 1000);

    setTimeout(() => {
        waterBar.style.transition = "none";
        waterBar.style.width = "0%";
        waterBar.style.opacity = "100%";
        void waterBar.offsetWidth;
        waterBar.style.transition = "";
        waterButton.disabled = false;
        workButton.disabled = false;
        isAnimating = false;
        if (gameLost == true) {
            waterButton.removeEventListener("click", waterEvent);
            workButton.removeEventListener("click", workEvent);
            waterButton.disabled = true;
            workButton.disabled = true;
        }
    }, 1600);
}

function workEvent() {
    if (isAnimating) return;

    isAnimating = true;
    workButton.disabled = true;
    waterButton.disabled = true;

    workBar.style.width = "100%";
    workBar.style.opacity = "0%";

    setTimeout(() => {
        waterStored -= 30;
        money += 10;
        if (waterStored <= 0) {
            waterStored = 0;
            gameLost = true;
            gameText.style.display = "block";
        }
        playerWater.textContent = "Water: " + waterStored + "/" + maxWater;
        playerMoney.textContent = "Money: " + money;
        
    }, 1000);

    setTimeout(() => {
        workBar.style.transition = "none";
        workBar.style.width = "0%";
        workBar.style.opacity = "100%";
        void workBar.offsetWidth;
        workBar.style.transition = "";
        workButton.disabled = false;
        waterButton.disabled = false;
        isAnimating = false;
        if (gameLost == true) {
            waterButton.removeEventListener("click", waterEvent);
            workButton.removeEventListener("click", workEvent);
            waterButton.disabled = true;
            workButton.disabled = true;
        }
    }, 1600);
}