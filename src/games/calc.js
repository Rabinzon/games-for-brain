import readlineSync from 'readline-sync';
import { getRandomInt } from '../utils/';

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;

const operations = [
  {
    text: '+',
    method: add,
  }, {
    text: '-',
    method: subtract,
  }, {
    text: '*',
    method: multiply,
  },
];

export default () => {
  const randomLeftNumber = getRandomInt(1, 20);
  const randomRightNumber = getRandomInt(1, 20);
  const operation = operations[getRandomInt(0, 2)];
  const userAnswer = readlineSync.question(`Question: ${randomLeftNumber} ${operation.text} ${randomRightNumber} `);
  const correctAnswer = operation.method(randomLeftNumber, randomRightNumber);

  return {
    userAnswer,
    correctAnswer,
    isCorrectAnswer: Number(userAnswer) === correctAnswer,
  };
};
