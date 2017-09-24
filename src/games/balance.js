import game from '..';
import getRandomInt from '../utils';

const gameDescription = 'Balance the given number.';

const balance = (array) => {
  const min = Math.min(...array);
  const max = Math.max(...array);

  if (max - min <= 1) {
    return array;
  }

  const newArray = array.map((val, key) => {
    if (key === array.indexOf(min)) {
      return val + (max - val - 1);
    }

    if (key === array.indexOf(max)) {
      return val - (val - min - 1);
    }
    return val;
  });
  return balance(newArray);
};

const solve = (number) => {
  const array = String(number).split('').map(x => (Number(x)));

  return balance(array).sort().join('');
};

const getQuestionAndAnswer = () => {
  const question = getRandomInt(100, 999);
  const answer = solve(question);

  return {
    answer,
    question,
  };
};

export default () => game(gameDescription, getQuestionAndAnswer);
