let gamePlay = prompt ("Want To Play The Game? [YES] or [NO]?");
let userName = "";
  
if(gamePlay === "Yes" || gamePlay === "YES" || gamePlay === "[YES]" || gamePlay === "[Yes]" || gamePlay === "[yes]" || gamePlay === "yes"){
   let userName = prompt ("Great, Please Enter Your Name");
  }
  else if(gamePlay === "No" || gamePlay === "NO" || gamePlay === "[NO]" || gamePlay === "[No]" || gamePlay === "[no]" || gamePlay === "no") {
    console.log("Come back and enter [YES] when you are ready to battle!")
  }
  else {
    console.log("NOT VAILD! - PLEASE ENTER: [YES] or [NO]")
  }

let gameStart = function(userName){
  let userPoints = 40;
  let grantPoints = 10;
  let grantLoses = 0;
  let minusPoints = Math.floor(Math.random()* -2)-0;
  
  while(userPoints > 0 || grantLoses === 3){
   let userPoints = userPoints + minusPoints;
    let grantPoints = grantPoints + minusPoints;
    if(grantPoints === 0 && userPoints !== 0){
      grantsLoses++;
      let grantsPoints = 10;
    }
    console.log(userName + "has" + userPoints + " health left")
    console.log("Grant the Mighty Chicken has" + grantPoints + " health left")
  }
}
