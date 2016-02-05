var players;
$('.submit').click(function() {
  $('.start').hide();
  players = $('.players').val();
});

$('.ask').click(function() {
  res = Math.floor((Math.random() * players) + 1);
  $('.result').text(res);
});

$('.question').click(function() {
  len = questions.length;
  i = Math.floor((Math.random() * len));
  q = questions[i].text;
  console.log("q: ", q);
  $('.sample').text(q);
});