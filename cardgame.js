const attackButton = document.querySelector("#attack-button");
const cards = document.getElementsByClassName("card");

let mage = document.getElementById("mage")
let lara = document.getElementById("lara")
let jeanne = document.getElementById("jeanne")
let characterArray = {}


let cardMage = {name:"Mage", attack: 3 , health: 5, mage};
let cardLara = {name:"Lara", attack: 5 , health: 9, lara};
let cardJeanne = {name:"Jeanne", attack: 1 , health: 10, jeanne};

let cardDatabase = [
  mage = cardMage,
  lara = cardLara,
  jeanne = cardJeanne
]

// Gets the Array of the specific card clicked on
const cardPressed = e => {
  let cardSave = e.currentTarget.id;  // Get ID of Clicked Element
  if (cardSave === "mage"){
    characterArray = cardDatabase[0]
  } else if (cardSave === "lara") {
    characterArray = cardDatabase[1]
  } else if (cardSave === "jeanne") {
    characterArray = cardDatabase[2]
} else {
  alert("error")
}
console.log(characterArray)
return characterArray
}

for (let card of cards) {
  attack = card.addEventListener("click", cardPressed);
}


// This is made to chance the display when cards attack / defend
document.getElementById("attackDisplayMage").innerText = cardMage.attack;
document.getElementById("attackDisplayLara").innerText = cardLara.attack;
document.getElementById("attackDisplayJeanne").innerText = cardJeanne.attack;

document.getElementById("healthDisplayMage").innerText = cardMage.health;
document.getElementById("healthDisplayLara").innerText = cardLara.health;
document.getElementById("healthDisplayJeanne").innerText = cardJeanne.health;


// Function that attacks with both cards when pressing the attack button
function attackWithAll(){
  let healthLara = cardLara.health
  if (healthLara > 0){
    let newHealthLara = healthLara - cardMage.attack - cardJeanne.attack
  cardLara.health = newHealthLara
  } else {
    alert("You have defeated the enemy!")
  }
  updateHealth()
  return cardLara.health
  }

function updateHealth(){
  document.getElementById("healthDisplayLara").innerText = cardLara.health;
}

attackButton.addEventListener('click',()=>{
  attackWithAll();
});





// attacks with only mage when pressing the card
// function singleAttackMage(){
//   let healthLara = cardLara.health
//   if (healthLara > 0){
//     let newHealthLara = healthLara - cardMage.attack
//   cardLara.health = newHealthLara
//   } else {
//     alert("You have defeated the enemy!")
//   }
//   updateHealth()
//   return cardLara.health
// }

// mage.addEventListener('click',()=>{
//   singleAttackMage();
// });



