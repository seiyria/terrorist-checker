var country = prompt("Enter the name of your birth country", "somewhere except america").toLowerCase();

var america = ["america", "'merica", "usa", "us", "states", "'murica", "merica", "murica"]

//If country is a spelling of America
if (america.indexOf(country) > -1); {
  alert('OK. You can use this website normally.');
} else {
  alert('You might be a terrorist')
  document.write('<img src=\"https://placekitten.com/g/500/200\" />');
  document.write('<!--');
}
