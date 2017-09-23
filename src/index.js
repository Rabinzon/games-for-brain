import readlineSync from 'readline-sync';
import gameEven from './games/even';
import gameCalc from './games/calc';

const playQuiz = (name, fn, i = 0) => {
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

  playQuiz(name, fn, i + 1);
};

export default (game) => {
  console.log('Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  switch (game) {
    case 'calc': {
      playQuiz(name, gameCalc);
      break;
    }
    case 'even': {
      playQuiz(name, gameEven);
      break;
    }
    default: {
      throw new Error(`Unknown game '${game}'`);
    }
  }
};
