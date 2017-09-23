import readlineSync from 'readline-sync';
import { isEven, getRandomInt } from '../utils/';

export default () => {
  const randomNumber = getRandomInt(1, 20);
  const userAnswer = readlineSync.question(`Question: ${randomNumber} `);
  const isEvenNumber = isEven(randomNumber);
  const correctAnswer = isEvenNumber ? 'yes' : 'no';

  return {
    userAnswer,
    correctAnswer,
    isCorrectAnswer: userAnswer === correctAnswer,
  };
};
