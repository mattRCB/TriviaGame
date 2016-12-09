
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
			a : "correct answer is always c"
		},
		ques3 :{
			q : "What is the answer to question3?",
			choices : ['a', 'b', 'c', 'd'],
			a : "correct answer is always c"
		}
	}

	var arrKeys = Object.keys(db);
	var arrKeysDiminished = arrKeys.slice(); // provides a way to AVOID REPEATS when selecting questions at random.
	var curQues; // The current question (to use as key to the current-question-set object).
	var gameIterator = arrKeys.length; // provides a way to end game.
	var countRight;
	var countWrong;
	var countExpired;

	$('body').append('<button class="start" id="start">Start</button>');

	// ON CLICK will listen for both the 'start' and 'play again' buttons.
	$(document).on("click", "button.start", function() {
		countRight = 0;
		countWrong = 0;
		countExpired = 0;
		selectQuesRandomly();
	});

		function selectQuesRandomly() {
			gameIterator--;
			var randIndex = Math.floor(Math.random()*arrKeysDiminished.length);
			curQues = arrKeysDiminished[randIndex];
			
			// Remove selected key from array so it won't get selected again.
			if (arrKeysDiminished.length > 1) { arrKeysDiminished.splice(randIndex, 1);
			// 'IF' KEEPS DIMINISHED FROM BECOMING UNDEFINED; 'ELSE' RESETS DIMINISHED TO THE FULL SET.
			} else { arrKeysDiminished = arrKeys.slice(); }

			showCurQues();
		};

		function showCurQues() {
			// Display the current question and answer-choices here.
			$('body').html(db[curQues].q);

			// Need an ON-CLICK to listen for user's answer; IF-STATEMENT to pass 'correct' or 'incorrect' to function showAnswer(). 

			//  This is the Countdown Timer
			var number = 5;
			var timer;
			$('body').append("<h2>" + number + "</h2>");
			$('h2').fadeOut(1000);

			timer = setInterval(decrement, 1000);
			function decrement() {
				number--;
				$('h2').fadeIn(0).html("<h2>" + number + "</h2>").fadeOut(1000, "swing");


				if (number == 0) {
					clearInterval(timer);
			    	showAnswer('expired'); // Passing 'expired' to the switch statement.
			    	countExpired++;
			    	console.log("countExpired = " + countExpired);
				}
			} // function decrement
		} // function showCurQues

		function showAnswer(responseWas) {
			// Need a SWITCH STATEMENT here to display appropriate message and increment either countRight, countWrong, or countExpired. ... Or maybe do the increment above and pass-in exactly the message to display——that way no need for a SWITCH.
			$('body').html("Show the answer set here");

			// After 3 seconds, this will remove the answer display and replace it with either game over, or the next question.
			setTimeout(function() {
				if (gameIterator == 0) {
					gameIterator = arrKeys.length;
					//Need to display GAME OVER message, scores, pic, restart button, etc here ...
					$('body').html('<p>Game Over</p><button class="start">Play again</button>');

				} else { // the game isn't over yet, so go on to next question.
					selectQuesRandomly();
				}
			}, 3000);
		};



}); // document.ready

