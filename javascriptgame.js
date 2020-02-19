let userPlayer = "Player One";
let userPoints = 40;
let grantPoints = 10;
let grantLoses = 3
let randomPoints = Math.floor(Math.random()* 4)+1;
let alertCombat;


let startCombat = function(){
  let gamePlay = prompt("Would you like to play the game?");
if(gamePlay === "Yes" || gamePlay === "YES" || gamePlay === "[YES]" || gamePlay === "[Yes]" || gamePlay === "[yes]" || gamePlay === "yes"){
  userPlayer = prompt("Ok, Please enter your name");
}
else if(gamePlay === "No" || gamePlay === "NO" || gamePlay === "[NO]" || gamePlay === "[No]" || gamePlay === "[no]" || gamePlay === "no"){
  console.log("Come back and enter [YES] when you are ready to battle!")
}
else{
  gamePlay = alert("*INVALID RESPONSE* To Battle Enter [YES}");
}

if(userPlayer = userPlayer){
  let alertCombat = alert("Ok, " + userPlayer + " Let's Battle");
}
else{
  gamePlay = alert("*INVALID RESPONSE* you must [ENTER A NAME} To Battle");
 }
}

let getDamage = function(startCombat, grantPoints, grantLoses){
  
  grantPoints = 10;
  
  while(userPoints > 0 || grantLoses === 0){
    let battlePrompt = alert('Click "OK" to Attack')
    grantPoints = grantPoints - randomPoints;
    userPoints = userPoints - randomPoints;
    if(grantPoints === 0 && userPoints !== 0){
      grantsLoses--; break;
      grantPoints = 10;
    }
    
    console.log(userPlayer + " has " + userPoints + " Points Left In This Battle")
    console.log("Grant the Almighty Chicken has " + grantPoints + " Points Left In This Battle")
  }
}

console.log(startCombat())
console.log(getDamage())
