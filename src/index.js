import readlineSync from 'readline-sync';
import gameEven from './games/even';
import gameCalc from './games/calc';

const play = (fn, name = null, i = 0) => {
  if (i === 0) {
    name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}`);
  }

  const { isCorrectAnswer, userAnswer, correctAnswer } = fn();
  console.log(`Your answer: ${userAnswer}`);

  if (isCorrectAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    return;
  }

  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
    return;
  }

  play(fn, name, i + 1);
};

export default (game) => {
  const welcomeText = 'Welcome to the Brain Games!';

  switch (game) {
    case 'calc': {
      console.log(welcomeText + '\nWhat is the result of the expression?.\n');
      play(gameCalc);
      break;
    }
    case 'even': {
      console.log(welcomeText + '\nAnswer "yes" if number even otherwise answer "no".\n');
      play(gameEven);
      break;
    }
    default: {
      throw new Error(`Unknown game '${game}'`);
    }
  }
};
