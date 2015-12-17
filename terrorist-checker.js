country = prompt("Enter the name of your birth country", "somewhere except america").toLowerCase();
if(country == "america" || country == "'merica" || country == "usa" || country == "us" || country == "states" || country == "'murica") {
  alert('OK. You can use this website normally.');
} else {
  alert('You might be a terrorist')
  window.location = "http://danlopez2012.com/wp-content/uploads/2011/01/mean-300x245.jpg";
}