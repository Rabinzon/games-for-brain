import readlineSync from 'readline-sync';

const play = (getQNA, i = 0) => {
  if (i === 3) {
    return true;
  }

  const { question, answer } = getQNA();
  const userAnswer = readlineSync.question(`Question: ${question} `);

  console.log(`Your answer: ${userAnswer}`);

  if (userAnswer !== answer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
    return false;
  }

  console.log('Correct!');
  return play(getQNA, i + 1);
};

export default (assignment, getQNA) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${assignment}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  const isSuccessGame = play(getQNA);

  if (isSuccessGame) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
