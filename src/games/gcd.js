import game from '..';
import getRandomInt from '../utils';

const gcd = (x, y) => {
  if (!y) return x;
  return gcd(y, x % y);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const leftInt = getRandomInt(1, 70);
  const rightInt = getRandomInt(1, 70);

  return {
    question: `${leftInt} ${rightInt}`,
    answer: gcd(leftInt, rightInt),
  };
};

export default () => game(gameDescription, getQuestionAndAnswer);
