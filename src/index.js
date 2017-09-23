import readlineSync from 'readline-sync';

const NUMBER_OF_QUIZES = 3;

const play = (getQuestionAndAnswer, i = 0) => {
  if (i === NUMBER_OF_QUIZES) return true;

  const { question, answer } = getQuestionAndAnswer();
  const userAnswer = readlineSync.question(`Question: ${question} `);

  console.log(`Your answer: ${userAnswer}`);

  if (userAnswer !== answer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
    return false;
  }

  console.log('Correct!');
  return play(getQuestionAndAnswer, i + 1);
};

export default (gameDescription, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  const isSuccessGame = play(getQuestionAndAnswer);

  if (isSuccessGame) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
