import Game from '..';
import getRandomInt from '../utils';

const isEven = num => (num % 2) === 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomInt(1, 20);
  const answer = isEven(question) ? 'yes' : 'no';

  return {
    answer,
    question,
  };
};

export default () => Game(gameDescription, getQuestionAndAnswer);
