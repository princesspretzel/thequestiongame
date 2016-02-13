var players;

$('.sample').hide();
$('.blank-sample').show();
$('.result').hide();
$('.before-question').show();

$('.submit').click(function() {
  $('.start').hide();
  $('.before-question').hide();
  players = $('.players').val();
});

$('.ask').click(function() {
  $('.sample').hide();
  $('.before-question').hide();
  $('.blank-sample').show();
  res = Math.floor((Math.random() * players) + 1);
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