import readlineSync from 'readline-sync';
import { isEven, getRandomInt } from './utils';

const playQuiz = (name, i = 0) => {
	const randomNumber = getRandomInt(1, 20);
	const answer = readlineSync.question(`Question: ${randomNumber} `);
	const isEvenNumber = isEven(randomNumber);
	const correctAnswer = isEvenNumber ? 'yes' : 'no';

	console.log(`Your answer: ${answer}`);

	if (correctAnswer === answer) {
		console.log('Correct!');
	} else {
		console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
		return;
	}

	if (i === 2) {
		console.log(`Congratulations, ${name}!`);
		return;
	}

	playQuiz(name, i + 1);
};

export default () => {
	console.log('Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".\n');
	const name = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${name}`);
	playQuiz(name);
};
