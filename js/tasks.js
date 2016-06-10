<meta charset="UTF-8">
<script type="text/javascript">
	
	function checkAnswers(tagName, answer){
		
		userAnswer = document.getElementById(tagName).value; //поиск tagName, поулчение его значения и присвоение для сравнения с правильным ответом
		if(userAnswer.toLowerCase() == answer) // не чувствительность к регистру, проверка ответа
			return true; // ответ правильный
		else
			return false; // ответ не правильный
	}

	function cheackAnswers(){ // проверка и посчет правильных ответов

		var goodAnswer = 0;
		if(checkAnswers('puzzle1', 'капуста'))
			goodAnswer++; //счетчик правильных ответов
		if(checkAnswers('puzzle2', 'елка'))
			goodAnswer++;
		if(checkAnswers('puzzle3', 'ножницы'))
			goodAnswer++;
		if(checkAnswers('puzzle4', 'лук'))
			goodAnswer++;

		if(goodAnswer == 0)
			alert('Вы ничего не угадали');
		else
			alert('Количество правильных ответов: ' + goodAnswer);		

	}


</script>