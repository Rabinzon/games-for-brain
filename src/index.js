import readlineSync from 'readline-sync';
import { isEven, getRandomInt } from './utils';

const { log } = console;

const text = {
	correct: 'Correct!',
	name: 'May I have your name? ',
	hello: name => `Hello, ${name}`,
	question: number => `Question: ${number} `,
	answer: answer => `Your answer: ${answer}`,
	success: name => `Congratulations, ${name}!`,
	welcome: 'Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".\n',
	wrong: (wrong, name, number) =>
		`'${wrong}' is wrong answer ;(. Correct answer was '${isEven(number) ? 'yes' : 'no'}'.\nLet's try again, ${name}!`,
};

const getAnswer = question =>
	readlineSync.question(question);

const question = number =>
	getAnswer(text.question(number));

const isAnswerCorrect = (number, answer) => {
	const isEvenNumber = isEven(number);
	const isEvenAnswer = isEvenNumber && answer === 'yes';
	const isOddAnswer = !isEvenNumber && answer === 'no';
	return isEvenAnswer || isOddAnswer;
};

const getName = () => {
	const name = getAnswer(text.name);
	if (name.trim() === '') {
		return getName();
	}
	return name;
};

const runQuiz = (name, i = 0) => {
	const randomNumber = getRandomInt(1, 20);
	const answer = question(randomNumber);

	log(text.answer(answer));

	if (isAnswerCorrect(randomNumber, answer)) {
		log(text.correct);
	} else {
		log(text.wrong(answer, name, randomNumber));
		return;
	}
	if (i === 2) {
		log(text.success(name));
		return;
	}

	runQuiz(name, i + 1);
};

export default () => {
	log(text.welcome);
	const name = getName();
	log(text.hello(name));
	runQuiz(name);
};
