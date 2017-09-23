import Game from '..';
import getRandomInt from '../utils';

const SEQUENCE_LENGTH = 10;

const gameDescription = 'What number is missing in this progression?';

const generateSequenceArray = (sequencestartnumber, difference) =>
  Array(...{ length: SEQUENCE_LENGTH })
    .map((_, i) => sequencestartnumber + (i * difference));

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

export default () => Game(gameDescription, getQuestionAndAnswer);
