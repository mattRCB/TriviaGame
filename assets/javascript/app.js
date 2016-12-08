


$(document).ready(function(){

	var db = {
		ques1 : {
			q : "What is the answer to question1?",
			choices : ['a', 'b', 'c', 'd'],
			a : "correct answer is always c"
		},
		ques2 : {
			q : "What is the answer to question2?",
			choices : ['a', 'b', 'c', 'd'],
			a : "correct answer is always c"		},
		ques3 :{
			q : "What is the answer to question3?",
			choices : ['a', 'b', 'c', 'd'],
			a : "correct answer is always c"		}
	}

	var arrKeys = Object.keys(db);
	var arrKeysDiminished = arrKeys.slice();
	var curQues;
	var gameIterator = arrKeys.length;

	$(document).on("click", "button.start", function() {
		selectQuesRandomly();
	});

		function selectQuesRandomly() {
			gameIterator--;
			var randIndex = Math.floor(Math.random()*arrKeysDiminished.length);
			curQues = arrKeysDiminished[randIndex];
			
			if (arrKeysDiminished.length > 1) {
				arrKeysDiminished.splice(randIndex, 1);
			// 'IF' KEEPS DIMINISHED FROM BECOMING UNDEFINED; 'ELSE' RESETS DIMINISHED TO THE FULL SET.
			} else {
				arrKeysDiminished = arrKeys.slice();
			}
			showCurQues();
		};

		function showCurQues() {
			$('body').html(db[curQues].q);

			//  Interval Demonstration
			var number = 5;
			var timer;
			$('body').append("<h2>" + number + "</h2>");

			timer = setInterval(decrement, 1000);
			function decrement() {
				number--;
				$('h2').html(number);
				if (number === 0) {
					clearInterval(timer);
			    	showAnswer();
				}
			}
		}

		function showAnswer() {
			$('body').html("Show the answer set here");
			setTimeout(function() {
				if (gameIterator == 0) {
					gameIterator = arrKeys.length;
					$('body').html('<p>Game Over</p><button class="start">Play again</button>');
				} else {
					selectQuesRandomly();
				}
			}, 3000);
		};





}); // document.ready

