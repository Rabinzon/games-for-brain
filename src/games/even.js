import getRandomInt from '../getRandomInt';
import Game from '..';

const isEven = num => (num % 2) === 0;

const assignment = 'Answer "yes" if number even otherwise answer "no".';

const getQNA = () => {
  const randomNumber = getRandomInt(1, 20);
  const answer = isEven(randomNumber) ? 'yes' : 'no';

  return {
    answer,
    question: randomNumber,
  };
};

export default () => Game(assignment, getQNA);
