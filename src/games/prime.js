import game from '..';
import getRandomInt from '../utils';

const isPrime = (number, i = 2) => {
  if (number === i) return true;
  if (number % i === 0) return false;
  return isPrime(number, i + 1);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const question = getRandomInt(1, 199);
  const answer = isPrime(question) ? 'yes' : 'no';

  return {
    answer,
    question,
  };
};

export default () => game(gameDescription, getQuestionAndAnswer);
