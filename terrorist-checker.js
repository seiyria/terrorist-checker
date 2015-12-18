country = prompt("Enter the name of your birth country", "somewhere except america").toLowerCase();
if(country === "america" || country === "'merica" || country === "usa" || country === "us" || country === "states" || country === "'murica") {
  alert('OK. You can use this website normally.');
} else {
  alert('You might be a terrorist')
  document.write('<img src=\"https://placekitten.com/g/500/200\" />');
  document.write('<!--');
}
