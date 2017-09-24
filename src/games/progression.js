import game from '..';
import getRandomInt from '../utils';

const sequenceLength = 10;

const gameDescription = 'What number is missing in this progression?';

const generateSequenceArray = (sequenceStartNumber, difference) =>
  Array(...{ length: sequenceLength })
    .map((_, i) => sequenceStartNumber + (i * difference));

const getQuestionAndAnswer = () => {
  const difference = getRandomInt(3, 43);
  const sequenceStartNumber = getRandomInt(1, 70);
  const randomIndex = getRandomInt(0, 9);
  const sequenceArray = generateSequenceArray(sequenceStartNumber, difference);
  const answer = String(sequenceArray[randomIndex]);
  const question = sequenceArray.map((val, i) => (i === randomIndex ? ' ..' : val)).join(' ');

  return {
    answer,
    question,
  };
};

export default () => game(gameDescription, getQuestionAndAnswer);
