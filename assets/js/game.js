var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//fight function 
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

//function to start new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    //fight each enemy robot by looping over them, and fighting them one at a time    
    for(var i = 0; i < enemyNames.length; i++) {
        //if player is still alive keep fighting them
        if(playerHealth > 0) {
            window.alert ("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
            if  (i < enemyNames.length - 1 && playerHealth > 0) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm) {
                    shop();
                }
            }
        }
        else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
        }
    }
    //after loop ends, player is either out fo health or enemies to fight so run the endGame function
    endGame();
};

//function to end the entire game
var endGame = function() {
    window.alert ("The game has now ended. Let's see how you did!");
    
    //if player is still alive, player wins
    if (playerHealth > 0) {
        window.alert ("Great job, you've survuved the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert ("You've lost your robot in battle.")
    }

    //ask player if they's like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert ("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

//go to shop between battles
var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    //use switch case to carry out action
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

                //increase player health
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money.");
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading a player's attack by 6 for 7 dollars.");

                //upgarde
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money.")
            }
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            break;
            
    }
};

// start first game when page loads
startGame();