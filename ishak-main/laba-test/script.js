
function checkAnswers() {
  var questions = document.getElementsByClassName('question');
  var correctCount = 0;
  var incorrectCount = 0;
  
  for (var i = 0; i < questions.length; i++) {
    var radios = questions[i].querySelectorAll('input[type="radio"]');
    var answered = false;
    
    for (var j = 0; j < radios.length; j++) {
      if (radios[j].checked) {
        answered = true;
        if (radios[j].value === '1') {
          radios[j].parentNode.style.color = 'green'; // Зеленый цвет для верного ответа
          correctCount++;
        } else {
          radios[j].parentNode.style.color = 'red'; // Красный цвет для неверного ответа
          incorrectCount++;
        }
        break;
      }
    }
    
    if (!answered) {
      alert('Пожалуйста, ответьте на все вопросы.');
      return;
    }
  }
  
  alert('Правильных ответов: ' + correctCount + '\nНеправильных ответов: ' + incorrectCount);
}