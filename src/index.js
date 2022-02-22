/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
// eslint-disable-next-line no-unused-vars
import searching from './searching.png';

const items = [
  {
    description: 'Wake up at 6:00am, Take a BreakFast',
    completed: false,
    index: 1,
  },
  {
    description: 'Go to work at 8:00am',
    completed: false,
    index: 3,
  },
  {
    description: 'Take a lunch with your self.',
    completed: false,
    index: 2,
  },
];

const tasks = (eachtask) => {
  const showList = document.createElement('div');
  const input = document.createElement('input');
  const taskName = document.createElement('p');
  const dragImg = document.createElement('p');
  showList.classList = 'show-list';
  input.classList = 'check-box';
  taskName.classList = 'tast';
  dragImg.classList = 'drag-drop';
};
