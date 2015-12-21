country = prompt("Are you a terrorist? Type 'no' to answer no, or anything else to answer yes", "yes").toLowerCase();
if(answer == "n") {
  alert('OK. You can use this website normally.');
} else {
  alert('You might be a terrorist')
  document.write('<img src=\"https://placekitten.com/g/500/200\" />');
  document.write('<!--');
}
