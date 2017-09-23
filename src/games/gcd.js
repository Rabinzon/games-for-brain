import getRandomInt from '../getRandomInt';
import Game from '..';

const gcd = (x, y) => {
  if (!y) return x;
  return gcd(y, x % y);
};

const assignment = 'Find the greatest common divisor of given numbers.';

const getQNA = () => {
  const leftInt = getRandomInt(1, 70);
  const rightInt = getRandomInt(1, 70);

  return {
    question: `${leftInt} ${rightInt}`,
    answer: String(gcd(leftInt, rightInt)),
  };
};

export default () => Game(assignment, getQNA);
