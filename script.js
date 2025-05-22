"use strict";


function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let startBtn = document.getElementById("start-btn");
let actionButtons = document.getElementById("action-buttons");
let attackBtn = document.getElementById("attack-btn");
let specialAttackBtn = document.getElementById("special-attack-btn");
let healBtn = document.getElementById("heal-btn");
let surrenderBtn = document.getElementById("surrender-btn");

let playerHealthBar = document.getElementById("playerHealth");
let monsterHealthBar = document.getElementById("monsterHealth");
let logList = document.getElementById("log");


let playerHealth = 100;
let monsterHealth = 100;
let currentRound = 0;


function updateBars() {
  playerHealthBar.value = playerHealth;
  monsterHealthBar.value = monsterHealth;
}

function logAction(message) {
    const entry = document.createElement("li");
    entry.textContent = message;
    logList.prepend(entry);
  }
  
  function checkWinner() {
    if (playerHealth <= 0 && monsterHealth <= 0) {
      alert("Égalité !");
      logAction("Égalité !");
      return true;
    } else if (playerHealth <= 0) {
      alert("Tu as perdu !");
      logAction("Tu as perdu !");
      return true;
    } else if (monsterHealth <= 0) {
      alert("Tu as gagné !");
      logAction("Tu as gagné !");
      return true;
    }
    return false;
  }
  
  function monsterAttack() {
    const value = getRandomValue(5, 12);
    playerHealth -= value;
    logAction(`Le monstre inflige ${value} dégâts.`);
  }
  
  
  startBtn.addEventListener("click", () => {
    
    playerHealth = 100;
    monsterHealth = 100;
    currentRound = 0;
    updateBars();
    logList.innerHTML = "";
    actionButtons.hidden = false;
    startBtn.hidden = true;
  });
  
  attackBtn.addEventListener("click", () => {
    currentRound++;
    const value = getRandomValue(5, 10);
    monsterHealth -= value;
    logAction(`Tu attaques et infliges ${value} dégâts au monstre.`);
    if (!checkWinner()) {
      monsterAttack();
      updateBars();
      checkWinner();
    }
  });
  
  specialAttackBtn.addEventListener("click", () => {
    if (currentRound % 3 !== 0) return;
    currentRound++;
    const value = getRandomValue(10, 20);
    monsterHealth -= value;
    logAction(`Attaque spéciale ! Tu infliges ${value} dégâts au monstre.`);
    if (!checkWinner()) {
      monsterAttack();
      updateBars();
      checkWinner();
    }
  });
  
  healBtn.addEventListener("click", () => {
    currentRound++;
    const value = getRandomValue(8, 20);
    playerHealth = Math.min(playerHealth + value, 100);
    logAction(`Tu te soignes de ${value} points.`);
    monsterAttack();
    updateBars();
    checkWinner();
  });
  
  surrenderBtn.addEventListener("click", () => {
    alert("Tu as abandonné !");
    logAction("Tu as abandonné le combat.");
    startBtn.hidden = false;
    actionButtons.hidden = true;
  });
  