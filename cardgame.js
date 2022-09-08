const card1 = document.getElementById("card1")
const card2 = document.getElementById("Lara")
const attackButton = document.querySelector('#attack-button');


const cardMage = {name:"Mage", attack: 3 , health: 5, card1};
const cardLara = {name:"Lara", attack: 5 , health: 8, card2};

document.getElementById("attackDisplayMage").innerText = cardMage.attack;
document.getElementById("attackDisplayLara").innerText = cardLara.attack;

document.getElementById("healthDisplayMage").innerText = cardMage.health;
document.getElementById("healthDisplayLara").innerText = cardLara.health;

function playGame(){
  let healthLara = cardLara.health
  if (healthLara > 0){
    let newHealthLara = healthLara - cardMage.attack
  cardLara.health = newHealthLara
  } else {
    alert("u dead bruh...")
  }



  updateHealth()
  console.log(newHealthLara)
  return cardLara.health
  }

function updateHealth(){
  document.getElementById("healthDisplayLara").innerText = cardLara.health;
}

attackButton.addEventListener('click',()=>{
  playGame();

});
