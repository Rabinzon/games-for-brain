import readlineSync from 'readline-sync';

const numberOfQuizes = 3;

const play = (getQuestionAndAnswer, i = 0) => {
  if (i === numberOfQuizes) return true;

  const { question, answer } = getQuestionAndAnswer();
  console.log(`Question: ${question} `);
  const userAnswer = readlineSync.question(`Your answer: `);

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
