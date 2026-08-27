/* eslint-disable function-paren-newline */
'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (clickEvent) => {
  const th = clickEvent.target.closest('th');

  if (!th) {
    return;
  }

  const trItems = tbody.querySelectorAll('tr');
  const trArr = [...trItems];

  if (th.textContent === 'Name') {
    const sortedArr = trArr.sort((a, b) =>
      a.cells[0].textContent.localeCompare(b.cells[0].textContent),
    );

    sortedArr.forEach((item) => {
      tbody.append(item);
    });
  }

  if (th.textContent === 'Position') {
    const sortedArr = trArr.sort((a, b) =>
      a.cells[1].textContent.localeCompare(b.cells[1].textContent),
    );

    sortedArr.forEach((item) => {
      tbody.append(item);
    });
  }

  if (th.textContent === 'Age') {
    const sortedArr = trArr.sort(
      (a, b) =>
        a.cells[2].textContent.toString() - b.cells[2].textContent.toString(),
    );

    sortedArr.forEach((item) => {
      tbody.append(item);
    });
  }

  if (th.textContent === 'Salary') {
    const sortedArr = trArr.sort(
      (a, b) =>
        +a.cells[3].textContent.slice(1).split(',').join('') -
        +b.cells[3].textContent.slice(1).split(',').join(''),
    );

    sortedArr.forEach((item) => {
      tbody.append(item);
    });
  }
});
