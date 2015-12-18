var answer = prompt("Enter the name of your birth country", "somewhere except america").toLowerCase();

var currQnum = 0;


var questions = {
  "Enter the name of your birth country":[
    "america", "'merica", "usa", "us", "states", "'murica", "merica", "murica"
  ],
  "Are you muslim?":[
    "america", "'merica", "usa", "us", "states", "'murica", "merica", "murica"
  ],
  "How brown are you?":[
    "white", "caucasian", "not brown", "pale", "porcelin", "sour cream"
  ]
};

var keys = Object.keys(questions);
var newQuestion = ["i don't want to answer", "prefer not to answer", "i'd like another question"];

while (true) {
  if (questions[keys[currQnum]].indexOf(answer) > -1) {
    alert('OK. You can use this website normally.');
  } else if (newQuestion.indexOf(answer) > -1) {
    currQnum++;
    if (currQnum >= keys.size()) {
      currQnum = 0;
    }
  } else {
    alert('You might be a terrorist')
    document.write('<img src=\"https://placekitten.com/g/500/200\" />');
    document.write('<!--');
    break;
  }
}
