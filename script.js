function playGame() {
	var userInput = confirm("Are you sure you want to play?");
	if (userInput == 1) {
		var num = prompt("Type a number from 1 to 10:");
		if (isNaN(num)) {
			alert("That is not a number. Goodbye!");
		} else if (num < 1 || num > 10) {
			alert("The number must be from 1 to 10. Goodbye!");
		} else {
			var guess = 1 + Math.floor(Math.random() * 10);
			test(num, guess); // function below this
		}
	} else {
		alert("Okay. Goodbye!");
	}
}

// test() manages the player's 3 tries
function test(n, g) {
	for (i=1; i<4; i++) {
		if (n == g) {
			alert("You win! The number was " + g + ".");
			return;
		} else if (i == 3) {
			alert("No more tries for you. The number was " + g + ". You lose!");
		} else if (n < g) {
			n = prompt("Too low! You may guess again: ");
		} else {
			n = prompt("Too high! You may guess again: ");
		}
	}
}
