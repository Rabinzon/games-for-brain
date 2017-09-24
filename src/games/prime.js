import game from '..';
import getRandomInt from '../utils';

const isPrime = (number) => {
  const firstDivider = 2;
  const lastDivider = Math.ceil(Math.sqrt(number));

  const checkPrimality = (divider) => {
    if (divider === number || lastDivider < divider) return true;
    if (number % divider === 0) return false;
    return checkPrimality(divider + 1);
  };

  return checkPrimality(firstDivider);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const question = getRandomInt(2, 199);
  const answer = isPrime(question) ? 'yes' : 'no';

  return {
    answer,
    question,
  };
};

export default () => game(gameDescription, getQuestionAndAnswer);
