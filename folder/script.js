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