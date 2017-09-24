import game from '..';
import getRandomInt from '../utils';

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


const gameDescription = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const randomLeftNumber = getRandomInt(1, 20);
  const randomRightNumber = getRandomInt(1, 20);
  const operation = operations[getRandomInt(0, 2)];
  const question = `${randomLeftNumber} ${operation.text} ${randomRightNumber}`;
  const answer = operation.method(randomLeftNumber, randomRightNumber);

  return {
    question,
    answer: String(answer),
  };
};

export default () => game(gameDescription, getQuestionAndAnswer);
