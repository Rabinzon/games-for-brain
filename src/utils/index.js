export const getRandomInt = (min, max) =>
  Math.floor(Math.random() * ((max - min) + 1)) + min;

export const isEven = num => (num % 2) === 0;
