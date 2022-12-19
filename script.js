let randomNumber1 = Math.floor(Math.random()*6) +1;
let randomNumber2 = Math.floor(Math.random()*6) +1;

let randomDiceImageOne = "resources/dice"+randomNumber1+".png";
let randomDiceImageTwo = "resources/dice"+randomNumber2+".png";

document.getElementById("one").setAttribute("src", randomDiceImageOne);
document.getElementById("two").setAttribute("src", randomDiceImageTwo);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}



