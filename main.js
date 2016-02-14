var gameState = {};

$('.blank-sample').show();
$('.result').hide();
$('.before-question').show();

$('.submit').click(function() {
  $('.start').hide();
  $('.before-question').hide();
  numberPlayers = $('.players').val();
  gameState = setKeys(numberPlayers);
});

$('.ask').click(function() {
  $('.sample').hide();
  $('.before-question').hide();
  $('.blank-sample').show();
  res = play();
  $('.result').text(res);
  $('.result').show();
});

$('.question').click(function() {
  $('.sample').show();
  $('.blank-sample').hide();
  len = questions.length;
  i = Math.floor((Math.random() * len));
  q = questions[i].text;
  console.log("q: ", q);
  $('.sample').text(q);
});

function setKeys(p){
  for(i = 1; i <= p; i++) {
    gameState[i] = 0;
  }
  return gameState
}

function dieRoll(players){
  return Math.floor((Math.random() * players) + 1);
}

function checkHash(s, players){
  var check = false;
  for(i = 1; i <= players; i++) {
    if (gameState[i] >= gameState[s]) {
      check = true
    }
  }
  return check
}

function fairness(players){
  p = dieRoll(players);
  if (checkHash(p, players) === true) {
    return p
  } else {
    fairness(players)
  }
}

function play(){
  players = Object.keys(gameState).length
  p = fairness(players);
  score = gameState[p] + 1;
  gameState[p] = score;
  return p
}
