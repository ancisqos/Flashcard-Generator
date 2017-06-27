const fs = require('fs');
const BasicCard = require('./BasicCard.js');
const ClozeCard = require('./ClozeCard.js');
const inquirer = require('inquirer');


var currentPresident = new BasicCard(
    "Who is the current president of the United States?", "Donald Trump");

// "Who is the current president of the United States?"
console.log(currentPresident.front); 

// "Donald Trump"
console.log(currentPresident.back); 

var currentPresidentCloze = new ClozeCard(
    "Donald Trump is the current president of the United States.", "Donald Trump");

// "Donald Trump"
console.log(currentPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(currentPresidentCloze.partial); " "

// "George Washington was the first president of the United States.
console.log(currentPresidentCloze.fullText): " "

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

// inquirer prompts: 
inquirer.prompt([

{
	type: 'list'
	message: 'Hello! What can FlashCardApp, the best Flash Card application in the universe, do for you?'
	name: 'commandchoices'
	commands: [{
		name: 'create-a-flashcard'
	}, {
		name: 'display-current-flashcards'
	}]
	}].then(function(answer) {
		if (answer.commandchoices === 'create-a-flashcard') {
			createCard();
		} else if (answer.commandchoices === 'display-current-flashcards') {
			displayCards ();
		}
	});

    const createCard = function () {
    	inquirer.prompt([{
    		name: 'card'
    		message: 'What kinda flashcard you tryina make, fam?'
    		type: 'list',
    		choices: [{
    			name: 'mad basic, yo'
    		}, {
    			name: 'bxtches and cloze, yo'
    		}]
    	}]).then(function(answer){
    		if (answer.card === 'mad basic, yo') {
    	inquirer.prompt([{
    		name: 'front',
    		message: 'Whatchu wanna put on the card for yo question, fam?',
    	}])
    }

{