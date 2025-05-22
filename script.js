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
