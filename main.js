var players;
$('.submit').click(function() {
  $('.start').hide();
  players = $('.players').val();
});

$('.ask').click(function() {
  $('.sample').hide();
  res = Math.floor((Math.random() * players) + 1);
  $('.result').text(res);
});

$('.question').click(function() {
  $('.sample').show();
  len = questions.length;
  i = Math.floor((Math.random() * len));
  q = questions[i].text;
  console.log("q: ", q);
  $('.sample').text(q);
});