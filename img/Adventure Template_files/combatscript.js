function coinToss(){
  return Math.ceil(Math.random()*2);
}

var playerTurn = true;
//initial stats
var origPlayer = {name: 'you', health: 20,damage: 3,will: 2,defense: 2};
var origEnemy = {name: 'enemy', health: 20,damage: 3,will: 2,defense: 2};
//modified stats
var playerTest = {name: 'you', health: 20,damage: 3, defense: 2};
var enemyTest = {name: 'enemy', health: 20,damage: 3, defense: 2};

function damage(attacker, defender){
  var roll = Math.ceil(Math.random()*6);
  var attack = roll+attacker.damage;
  if(roll===6){
    attack *= 2;
  }
  $('#'+attacker.name+'Log').append("<li>"+attacker.name+" deals "+attack+" damage.</li>")
  defender.health -= Math.abs(attack-defender.defense);
  console.log(attacker, defender, playerTurn, roll);
  playerTurn = !playerTurn;
}

function defend(defender, origDefender){
  if(defender.defense>=origDefender.defense+6){
    defender.defense += 1;
    $('#'+defender.name+'Log').append("<li>"+defender.name+"'s defense rises to "+defender.defense+".</li>")
  }
  else{
    $('#'+defender.name+'Log').append('<li>Defense is at maximum</li>')
  }
  playerTurn = !playerTurn;
}

function heal(defender, origDefender){
  var roll = Math.ceil(Math.random()*6);
  var heal = roll+defender.will;
  if(defender.health+heal<=origDefender.health){
    defender.health += heal;
  }
  else{
    defender.health = origDefender.health;
  }
  $('#'+defender.name+'Log').append("<li>"+defender.name+' recovers '+heal+' health.</li>')
  playerTurn = !playerTurn;
}

function aiTurn(){
  var decision = Math.ceil(Math.random()*6);
  if(enemyTest.health>=enemyTest.health*.4){//above 40% health
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
  if(coinToss()===1){
    playerTurn = false;
    console.log('enemy is first');
    setTimeout(function(){aiTurn();}, 1000);
  }

  $('#attack').click(function(){
    if(playerTurn){
      damage(playerTest, enemyTest);
      setTimeout(function(){aiTurn();}, 2000);
    }
  });
  $('#defend').click(function(){
    if(playerTurn){
      defend(playerTest, origPlayer);
      setTimeout(function(){aiTurn();}, 2000);
    }
  });
  $('#heal').click(function(){
    if(playerTurn){
      heal(playerTest, origPlayer);
      setTimeout(function(){aiTurn();}, 2000);
    }
  });
});
