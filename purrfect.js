var catPuns = [
  'The Perfect Mewment Is Now',
  'Lets Go Out This Caturday',
  'Pawsitively Purrfect',
  'Dont Pro-cat-stinate',
  'Meowsicians are Waiting 4 U',
  'I\'m Feline Myself' 
]
var randomNumber = Math.floor(Math.random());
var randomNumber = Math.floor(Math.random() * 5);

function newQuote() {var randomNumber = Math.floor(Math.random() * (catPuns.length));}

document.getElementById('buttonDisplay').innerHTML = catPuns[randomNumber];
