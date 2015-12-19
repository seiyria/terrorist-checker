country = prompt("Enter the name of your birth country", "somewhere except america").toLowerCase();
if(country === "america" || country === "'merica" || country === "usa" || country === "us" || country === "states" || country === "'murica") {
  alert('OK. You can use this website normally.');
} else {
  alert('You might be a terrorist')
  document.write('<h1>Error 406: You are a terrorist</h1>')
  document.write('<h3>The server has rejected you because it has detected terrorist behaviours.</h3>')
  document.write('<ul><li>Double check your identity</li><li>Search your house for any bombs</li><li>Think really hard to remember if you&apos;ve been planning any terrorist regimes</li><li>Check your Internet connection</li></ul>')
  document.write('<!--');
}
