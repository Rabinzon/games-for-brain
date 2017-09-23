
import getRandomInt from '../getRandomInt';
import Game from '..';

const assignment = 'Balance the given number.';

const balanceArray = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  if (max - min <= 1) {
    return arr;
  }

  const newArray = arr.map((val, key) => {
    if (key === arr.indexOf(min)) {
      return val + (max - val - 1);
    }

    if (key === arr.indexOf(max)) {
      return val - (val - min - 1);
    }
    return val;
  });
  return balanceArray(newArray);
};

const balance = (number) => {
  const arr = String(number).split('').map(x => (Number(x)));

  return balanceArray(arr).sort().join('');
};

const getQNA = () => {
  const randomInt = getRandomInt(100, 999);
  const answer = balance(randomInt);

  return {
    answer,
    question: randomInt,
  };
};

export default () => Game(assignment, getQNA);
