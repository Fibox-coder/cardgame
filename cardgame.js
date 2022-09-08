const attackButton = document.querySelector('#attack-button');



const mage = document.getElementById("mage")
const lara = document.getElementById("lara")
const jeanne = document.getElementById("jeanne")


const cardMage = {name:"Mage", attack: 3 , health: 5, mage};
const cardLara = {name:"Lara", attack: 5 , health: 9, lara};
const cardJeanne = {name:"Jeanne", attack: 1 , health: 10, jeanne};

document.getElementById("attackDisplayMage").innerText = cardMage.attack;
document.getElementById("attackDisplayLara").innerText = cardLara.attack;
document.getElementById("attackDisplayJeanne").innerText = cardJeanne.attack;

document.getElementById("healthDisplayMage").innerText = cardMage.health;
document.getElementById("healthDisplayLara").innerText = cardLara.health;
document.getElementById("healthDisplayJeanne").innerText = cardJeanne.health;

function playGame(){
  let healthLara = cardLara.health
  if (healthLara > 0){
    let newHealthLara = healthLara - cardMage.attack - cardJeanne.attack
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
