var diceValue1 = Math.ceil(Math.random()*6);
var diceImage1 = "images/dice"+diceValue1+".png";
var diceValue2 = Math.ceil(Math.random()*6);
var diceImage2 = "images/dice"+diceValue2+".png";
document.querySelector(".img1").setAttribute("src",diceImage1);
document.querySelector(".img2").setAttribute("src",diceImage2);
if(diceValue1>diceValue2){
  document.querySelector("h1").textContent = "🚩Player 1 wins";
}
else if(diceValue1===diceValue2){
  document.querySelector("h1").textContent = "🚩 Draw 🚩";
}
else{
  document.querySelector("h1").textContent = "Player 2 wins🚩";
}
