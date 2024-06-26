"use strict";
let totalWater = 0;
const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
};
const loadData = () => {
    const currentDate = getCurrentDate();
    const storedData = localStorage.getItem(currentDate);
    if (storedData) {
        const data = JSON.parse(storedData);
        totalWater = data.totalWater;
        totalWaterElm.textContent = "Total: " + totalWater + " ml.";
        data.logs.reverse().forEach((log) => {
            const addedWater = document.createElement('p');
            addedWater.textContent = log;
            logContainer.insertBefore(addedWater, logContainer.firstChild);
        });
    }
};
const saveData = () => {
    const currentDate = getCurrentDate();
    const logs = Array.from(logContainer.children).map(child => child.textContent || '');
    const data = {
        totalWater: totalWater,
        logs: logs
    };
    localStorage.setItem(currentDate, JSON.stringify(data));
};
const app = document.createElement('div');
app.setAttribute('class', 'container');
document.body.appendChild(app);
const title = document.createElement('h1');
title.innerText = "Water Intake Tracker";
app.appendChild(title);
const totalWaterElm = document.createElement('h2');
totalWaterElm.textContent = "Total: " + totalWater + " ml.";
app.appendChild(totalWaterElm);
const btnContainer = document.createElement('div');
btnContainer.setAttribute('id', 'btnContainer');
app.appendChild(btnContainer);
const addWater500 = document.createElement('button');
addWater500.innerText = "500 ml.";
btnContainer.appendChild(addWater500);
addWater500.addEventListener('click', () => {
    totalWater += 500;
    updateTotalWater(500);
});
const addWater250 = document.createElement('button');
addWater250.innerText = "250 ml.";
btnContainer.appendChild(addWater250);
addWater250.addEventListener('click', () => {
    totalWater += 250;
    updateTotalWater(250);
});
// const addWater100 = document.createElement('button');
// addWater100.innerText = "100 ml.";
// btnContainer.appendChild(addWater100);
// addWater100.addEventListener('click', () => {
//     totalWater += 100;
//     updateTotalWater(100);
// });
let closeCustom = null;
const customAmount = document.createElement('button');
customAmount.textContent = "Custom";
customAmount.setAttribute('id', 'customAmount');
btnContainer.appendChild(customAmount);
customAmount.addEventListener('click', () => {
    if (!customContainer.contains(addAmount)) {
        customContainer.appendChild(addAmount);
    }
    if (!customContainer.contains(addAmountBtn)) {
        customContainer.appendChild(addAmountBtn);
    }
    if (!closeCustom) {
        closeCustom = document.createElement('p');
        closeCustom.innerText = "Close";
        closeCustom.setAttribute('id', 'closeCustom');
        customContainer.appendChild(closeCustom);
        closeCustom.addEventListener('click', () => {
            customContainer.removeChild(addAmount);
            customContainer.removeChild(addAmountBtn);
            if (closeCustom) {
                customContainer.removeChild(closeCustom);
                closeCustom = null;
            }
            addAmount.value = "";
            addWarning.style.display = "none";
        });
    }
});
const addAmount = document.createElement('input');
addAmount.placeholder = "Input amount";
const addAmountBtn = document.createElement('button');
addAmountBtn.textContent = "Add";
const addWarning = document.createElement('p');
addWarning.textContent = "Please add amount as numbers";
addWarning.style.display = "none";
btnContainer.appendChild(addWarning);
addAmountBtn.addEventListener('click', () => {
    let inputtedValue = addAmount.value.trim();
    if (/^\d+$/.test(inputtedValue)) {
        const value = parseInt(inputtedValue, 10);
        totalWater += value;
        updateTotalWater(value);
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
const customContainer = document.createElement('div');
customContainer.setAttribute('class', 'custom-container');
btnContainer.appendChild(customContainer);
const logContainer = document.createElement('div');
logContainer.setAttribute('class', 'log-container');
app.appendChild(logContainer);
const updateTotalWater = (amount) => {
    totalWaterElm.textContent = "Total: " + totalWater + " ml.";
    const currentTime = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    const addedWater = document.createElement('p');
    addedWater.textContent = `${currentTime} - Added amount: ${amount} ml.`;
    logContainer.insertBefore(addedWater, logContainer.firstChild);
    saveData();
};
loadData();
