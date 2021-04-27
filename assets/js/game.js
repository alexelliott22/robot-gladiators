var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

var fight = function(enemyName) {

    //repeat and execute as long as the enemy is alive
    while(playerHealth > 0 && enemyHealth > 0) {
           //alert players they are starting the round
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'fight' or 'skip' to choose.")

        //if player chooses to skip
        if(promptFight === "skip" || promptFight === "SKIP") {
            window.alert(playerName + " has chosen to skip the battle.");
            
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you want to quit?");

            //if yes (true), leave the fight 
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye.");
                //subtract money from player
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //check enemy's health
        if (enemyHealth <= 0){
            window.alert(enemyName + " has died!");

            //award player money
            playerMoney = playerMoney + 20;

            //leave while loop since enemy is dead
            break;
        }
        else {
            window.alert (enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check players health
        if (playerHealth <= 0){
            window.alert (playerName + " has died!");

            //leave while loop since player is dead
            break;
        }
        else {
            window.alert (playerName + " still has " + playerHealth + " health left.");
        }
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    if(playerHealth > 0) {
        window.alert ("Welcome to Robot Gladiators! Round " + (i + 1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        debugger;
        fight(pickedEnemyName);
    }
   else {
       window.alert("You ahve lost your robot in battle! Game Over!");
       break;
   }
  }
