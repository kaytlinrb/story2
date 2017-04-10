function coinToss(){
  return Math.ceil(Math.random()*2);
}

//anti armor attack

var playerTurn = true;
//initial stats
var origPlayer = {name: 'You', health: 20, damage: 3, will: 2, defense: 2};
var origEnemy = {name: 'enemy', health: 20, damage: 3, will: 2, defense: 2};
//modified stats
var playerTest = {name: 'You', health: 20,damage: 3, will: 2, defense: 2};
var enemyTest = {name: 'enemy', health: 20,damage: 3, will: 2,defense: 2};

function damage(attacker, defender){
  var roll = Math.ceil(Math.random()*6);
  var damage = Math.abs((roll+attacker.damage)-defender.defense)
  if(roll===6){
    attack *= 2;
  }
  $('#'+attacker.name+'Log').append("<li>"+damage+" damage dealt.</li>")
  defender.health -= damage;
  $('#'+defender.name+'Health').text('Health: '+defender.health)
  if(playerTest.health<=0){
    alert(playerTest.name+' are dead')
    //show fail page
  }
  else{
    playerTurn = !playerTurn;
  }
}

function defend(defender, origDefender){
  if(defender.defense+1<=origDefender.defense+6){
    defender.defense += 1;
    $('#'+defender.name+'Log').append("<li> Defense rises to "+defender.defense+".</li>")
  }
  else{
    $('#'+defender.name+'Log').append('<li>Defense is at maximum</li>')
  }
  $('#'+defender.name+'Defense').text('Defense: '+defender.defense)
  playerTurn = !playerTurn;
}

function heal(defender, origDefender){
  var roll = Math.ceil(Math.random()*6);
  var heal = roll+defender.will;
  console.log(heal,roll, defender.will);
  if(defender.health+heal<=origDefender.health){
    defender.health += heal;
  }
  else{
    defender.health = origDefender.health;
  }
  $('#'+defender.name+'Log').append("<li>"+heal+' health healed.</li>')
  $('#'+defender.name+'Health').text('Health: '+defender.health)
  playerTurn = !playerTurn;
}

function aiTurn(){
  var decision = Math.ceil(Math.random()*6);
  if(enemyTest.health>=origEnemy.health*.4){//above 40% health
    if(decision>2){
      damage(enemyTest, playerTest);
    }
    else{
      defend(enemyTest, origEnemy);
    }
  }
  else{//below 40% health
    if(decision>2){
      heal(enemyTest, origEnemy);
    }
    else{
      damage(enemyTest, playerTest);
    }
  }
}

$(document).ready(function(){
  $('#YouHealth').text('Health: '+origPlayer.health)
  $('#YouDefense').text('Defense: '+origPlayer.defense)
  $('#enemyHealth').text('Health: '+origEnemy.health)
  $('#enemyDefense').text('Defense: '+origEnemy.defense)
  if(coinToss()===1){
    playerTurn = false;
    console.log('enemy is first');
    setTimeout(function(){aiTurn();}, 1000);
  }

  $('#attack').click(function(){
    if(playerTurn){
      damage(playerTest, enemyTest);
      if(enemyTest.health<=0){
        alert('The enemy is dead');
        //show win page
      }
      else{
        setTimeout(function(){aiTurn();}, 1500);
      }
    }
  });
  $('#defend').click(function(){
    if(playerTurn){
      defend(playerTest, origPlayer);
      setTimeout(function(){aiTurn();}, 1500);
    }
  });
  $('#heal').click(function(){
    if(playerTurn){
      heal(playerTest, origPlayer);
      setTimeout(function(){aiTurn();}, 1500);
    }
  });
});
