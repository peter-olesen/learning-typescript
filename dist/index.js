"use strict";
let totalWater = 0;
// View Build
const app = document.createElement('div');
app.setAttribute('class', 'container');
document.body.appendChild(app);
const title = document.createElement('h1');
title.innerText = "Water Intake Tracker";
app.appendChild(title);
const totalWaterElm = document.createElement('h2');
totalWaterElm.textContent = "Total: " + totalWater + " ml.";
app.appendChild(totalWaterElm);
const addWater500 = document.createElement('button');
addWater500.innerText = "500 ml.";
app.appendChild(addWater500);
addWater500.addEventListener('click', () => {
    totalWater += 500;
    updateTotalWater();
});
const addWater250 = document.createElement('button');
addWater250.innerText = "250 ml.";
app.appendChild(addWater250);
addWater250.addEventListener('click', () => {
    totalWater += 250;
    updateTotalWater();
});
const addWater100 = document.createElement('button');
addWater100.innerText = "100 ml.";
app.appendChild(addWater100);
addWater100.addEventListener('click', () => {
    totalWater += 100;
    updateTotalWater();
});
const addAmount = document.createElement('input');
addAmount.placeholder = "Input your own amount";
app.appendChild(addAmount);
const addAmountBtn = document.createElement('button');
addAmountBtn.textContent = "Add";
addAmountBtn.setAttribute('id', 'amount-btn');
app.appendChild(addAmountBtn);
const addWarning = document.createElement('p');
addWarning.textContent = "Please add amount as numbers";
addWarning.style.display = "none";
app.appendChild(addWarning);
addAmountBtn.addEventListener('click', () => {
    let inputtedValue = parseInt(addAmount.value, 10);
    if (!isNaN(inputtedValue)) {
        totalWater += inputtedValue;
        updateTotalWater();
        if (addWarning.style.display === "block") {
            addWarning.style.display = "none";
        }
    }
    else {
        if (addWarning.style.display === "none") {
            addWarning.style.display = "block";
        }
    }
});
const updateTotalWater = () => {
    totalWaterElm.textContent = "Total: " + totalWater + " ml.";
};
