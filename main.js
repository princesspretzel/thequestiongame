var players;
$('.submit').click(function() {
  $('.start').hide();
  players = $('.players').val();
});

$('.ask').click(function() {
  res = Math.floor((Math.random() * players) + 1);
  $('.result').text(res);
});