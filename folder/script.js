	canvas = document.getElementById("canvas");
	let ctx = canvas.getContext("2d");
	
	
	let getWord = ()=> {
			let words = ["примус","ручка","пандус","сигарета", "Юля"];
		  return words[Math.floor(Math.random()*words.length)]
		};
	let word = getWord();
	let setupAnswerArray = function (aaa) {
			let s = [];
			 for (let i=0;i<aaa.length;i++) {
				 s[i] = " _ ";
			 } return s
		};
		let answerArray = setupAnswerArray(word);
		incorrectGuesses = 0;
		
	let showPlayerProgress = function (aaa) {
		  alert (aaa.join(" "))};
		let remainingLetters = word.length;
		let getName = function () {
		return prompt("Привет! Как Вас зовут?"); 
		};
	var usersname = getName()
		let getGuess = function () {
		 return prompt(`Угадай букву или нажми Отмена для выхода из игры!`);
		}

	let updateGameState = function (guess,word,answerArray) {
		let uperanswers = 0;
		     	for (let j = 0; j<word.length; j++)  {
				  guess = guess.toLowerCase();
	 		     if (answerArray[j]===guess){ 
	 			 alert(`${usersname} !Эта буква уже была угадана!`)
	 				} else if (word[j] === guess) {
	 				  answerArray[j] = guess;
	 				  uperanswers++;
	 				} 	 			
	 		}; return uperanswers;
	 		}; 
	let showAnswerAndCongratulatePlayer = function (www) {
		showPlayerProgress(www);
		alert (`Отлично ${usersname}, ты справился! Слово ${word} угадано!`)
		}
		let drawPoint = function (incorrectGuesses) {
			ctx.lineWidth = 8
			if(incorrectGuesses ===0) {
				ctx.strokeRect(50,50,50,50);
			} else if (incorrectGuesses ===1) {
				ctx.beginPath();
				ctx.moveTo(75,100);
				ctx.lineTo(75,200);
				ctx.stroke();
			} else if (incorrectGuesses ===2) {
				ctx.beginPath();
				ctx.moveTo(75,200);
				ctx.lineTo(25,300);
				ctx.stroke();
			} else if (incorrectGuesses ===3) {
				ctx.beginPath();
				ctx.moveTo(75,200);
				ctx.lineTo(125,300);
				ctx.stroke();
			} else if (incorrectGuesses ===4) {
				ctx.beginPath();
				ctx.moveTo(75,125);
				ctx.lineTo(15,100);
				ctx.stroke();
			} else if (incorrectGuesses ===5) {
				ctx.beginPath();
				ctx.moveTo(75,125);
				ctx.lineTo(135,100)
			}
			
			};
		while (remainingLetters>0&&incorrectGuesses<6) {
	 		showPlayerProgress(answerArray)
	   		let guess = getGuess()
	 		if (guess === null) {
	 			 break;
	 			}; 
	 	    if (guess.length!==1) {
	 			alert("Введите пожалуйста одну букву!!!")
	 		} else { let correctGuesses = updateGameState(guess, word,answerArray);
				remainingLetters -=correctGuesses;
				if (correctGuesses===0) {
				drawPoint (incorrectGuesses);
				incorrectGuesses++;
				}
	 		};
		};

		
		
	showAnswerAndCongratulatePlayer(answerArray);