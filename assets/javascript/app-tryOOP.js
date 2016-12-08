


$(document).ready(function(){

	var db = {
		questions : {
			ques1 : { quesKey1 : "val1"
			},
			ques2 : { quesKey2 : "val2"
			},
			ques3 :{ quesKey3 : "val3"
			}
		},
		methods : {
			selectQuesRandomly : function() {

			}
		}
	};

	var arrKeys = Object.keys(db.questions);
	var arrKeysDiminished = arrKeys.slice();
	var curQues;



	function selectQuesRandomly() {
		var randIndex = Math.floor(Math.random()*arrKeysDiminished.length);
		console.log("random index is: " + randIndex);
		curQues = arrKeysDiminished[randIndex];
		console.log("current question key is: " + curQues);
		
		if (arrKeysDiminished.length > 1) {	
			arrKeysDiminished.splice(randIndex, 1);
			console.log("Diminished is: " + arrKeysDiminished);
		// 'IF' KEEPS DIMINISHED FROM BECOMING UNDEFINED; AND 'ELSE' RESETS DIMINISHED TO THE FULL SET.
		// I MAY NEED TO REMOVE THE ELSE CLAUSE TO MAKE THE GAME END, INSTEAD OF RESETTING.
		// NOT SURE YET -- MAY NEED TO REVISIT THIS LATER !!!	
		} else {
			arrKeysDiminished = arrKeys.slice();
			console.log("Diminished reset to: " + arrKeysDiminished);
		}
		document.write(curQues);
		return curQues;
	};

	selectQuesRandomly();
	selectQuesRandomly();
	selectQuesRandomly();











}); // document.ready

