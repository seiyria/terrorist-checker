country = prompt("Are you a terrorist? Type 'no' to answer no, or anything else to answer yes", "yes").toLowerCase();
if(answer == "no") {
  alert('OK. You can use this website normally.');
} else {
  alert('You might be a terrorist')
  window.location = "http://danlopez2012.com/wp-content/uploads/2011/01/mean-300x245.jpg";
}