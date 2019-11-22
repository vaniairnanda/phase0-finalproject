const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function getFormData(){ 
    var name=document.getElementById('name').value;

    return name
    }

    
function catQuiz(){
  var result = []
  var userInput = ''
  var question1s = document.getElementsByName("question1");
  for (var i = 0; i < question1s.length; i++) {
    if (question1s[i].checked) {
        userInput[0] = question1s[i].value;
        result.push(userInput[0])
    }
}
var question2s = document.getElementsByName("question2");

  for (var j = 0; j < question2s.length; j++) {
    if (question2s[j].checked) {
        userInput[1] = question2s[j].value;
        result.push(userInput[1])
    }
}
if (result[0] === 'Orange' && result[1] === 'Chonky') {
  var image = document.createElement('img');
  image.setAttribute('src','chonkorange.jpg');
  document.body.appendChild(image);
  alert `Your cat is ready ${image}`
} else if (result[0] === 'Orange' && result[1] === 'Smol') {
  var image = document.createElement('img');
  image.setAttribute('src','Munchkin-Cat.jpg');
  document.body.appendChild(image);
  alert `Your cat is ready ${image}`
} else if (result[0] === 'Grey' && result[1] === 'Chonky') {
  var image = document.createElement('img');
  image.setAttribute('src','chonkygrey.jpeg');
  document.body.appendChild(image);
  alert `Your cat is ready ${image}`
} else if (result[0] === 'Grey' && result[1] === 'Smol') {
  var image = document.createElement('img');
  image.setAttribute('src','smolgrey.jpeg');
  document.body.appendChild(image);
  alert `Your cat is ready ${image}`
} else if (result[0] === 'White' && result[1] === 'Smol') {
  var image = document.createElement('img');
  image.setAttribute('src','smolwhite.jpeg');
  document.body.appendChild(image);
  alert `Your cat is ready ${image}`
}  else if (result[0] === 'White' && result[1] === 'Chonky') {
  var image = document.createElement('img');
  image.setAttribute('src','chonkywhite.jpeg');
  document.body.appendChild(image);
  alert `Your cat is ready ${image}`
}
}