import readlineSync from 'readline-sync';
import { getRandomInt } from '../utils/';

const isEven = num => (num % 2) === 0;

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
