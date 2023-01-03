import _ from 'lodash';
import startGame from '../index.js';

const task = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const randomQuest = () => {
  const randomNumber1 = _.random(1, 20);
  const randomNumber2 = _.random(1, 20);
  return `${randomNumber1} ${randomNumber2}`;
};

const correctAnswer = (string) => {
  const members = string.split(' ');
  const num1 = Number(members[0]);
  const num2 = Number(members[1]);
  const smallestNum = Math.min(num1, num2);
  let nod = smallestNum;

  for (let i = smallestNum; i > 0; i -= 1) {
    if ((num1 % nod === 0) && (num2 % nod === 0)) {
      return nod;
    }
    nod -= 1;
  }

  return nod;
};

const brainGcd = () => {
  startGame(task, randomQuest, correctAnswer);
};

export default brainGcd;