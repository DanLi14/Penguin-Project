'use strict';

//DOM selectors
const penguinId = document.querySelector('#penguinId');
const submitBtn = document.querySelector('#submitBtn');

//Function(s)
const deleteByPenguinId = () => {
  fetch(`http://localhost:8083/delete/${penguinId.value}`, {
    method: 'DELETE',
  }).then((response) => {
    if (response.status !== 200) {
      console.error(`server status error: ${response.statusText}`);
    }
    response.json().then((data) => {
      console.log(data);
    });
  });
};

//EventListener(s)
submitBtn.addEventListener('click', deleteByPenguinId);
