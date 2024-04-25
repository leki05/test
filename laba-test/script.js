
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
          correctCount++;
        } else {
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
  document.getElementById("verni1").src="/i.png";
  document.getElementById("verni2").src="/i.png";
  document.getElementById("verni3").src="/i.png";
  document.getElementById("verni4").src="/i.png";
  document.getElementById("verni5").src="/i.png";
  document.getElementById("verni6").src="/i.png";
  document.getElementById("verni7").src="/i.png";
  document.getElementById("verni8").src="/i.png";
  document.getElementById("verni9").src="/i.png";
  document.getElementById("verni10").src="/i.png";


  alert('Правильных ответов: ' + correctCount + '\nНеправильных ответов: ' + incorrectCount);
}