!DOCTYPE html>
<html>
<head>
	<title>Javascript Hangman</title>
</head>
<body>


	<h1>Hangman Game</h1>
		<script type="text/javascript" src="hangman.js"></script>
<script>
	//create an array of words//
	var words = ["healthy", "good", "doctor", "family", "school", "education", "house", "car", "mother", "father",]
	// pick a random from the word array //
	var word = words [Math.floor(Math.random() * words.length)];
	// sets up the answerArray to show how many letters they are using _ 's //
	var answerArray = [];
	for (var i = 0; i < word.length; i++){
		answerArray[i] = "_";
	}
	// create a varible to hold the number of remaining letters to be guessed. //
	var remainingletters = word.length;

	// ****************** BEGGINING OF GAME LOOP ****************** //
	// while there are letters left to be guessed //
	while (remainingletters > 0){
		// show players there progress
		alert(answerArray.join(" "));


		// get a guess from a player
		var guess = prompt("guess a letter, or click cancel to stop playing.")

		// if the guess is blank
		if (guess == null){
			// exit the game loop
			   break;
		// if the guess is more than one letter or no letters
		}else if (guess.length !== 1){
			// alert them to guess a single letter only
			alert("please enter a single letter.");
			// valid guess
		}else{
			// update the game state with the guess
			for (var j = 0; j < word.length; j++){
				//if the letter they guess is in the word
				//at that point or index
				if (word[j]=== guess){
					//update the answer array with the letters they picked at that point
					answerArray[j]= guess;
					//subtract one from the remaining letters
					remainingLetters--;


				}
			}
		}// **** end of game ****
		}
		//let the player know the word
		alert(answerArray.join(" "));
		//congratulate the player
		alert("good job! The answer was " + word);







</script>
</body>
</html>
