'use strict';

//DOM selectors
const penguinId = document.querySelector('#penguinId');
const pName = document.querySelector('#name');
const pAge = document.querySelector('#age');
const pHappyFeet = document.querySelector('#happyFeet');
const submitBtn = document.querySelector('#submitBtn');

//Functions to handle put request
const putLogic = (putObj) => {
  fetch(`http://localhost:8083/update/${penguinId.value}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/JSON' },
    body: JSON.stringify(putObj),
  }).then((response) => {
    if (response.status !== 201) {
      console.error(`server error status: ${response.status}`);
      return;
    }
    response.json().then((data) => {
      console.log(data);
    });
  });
};

const putData = () => {
  const updatedPenguin = {
    name: pName.value,
    age: pAge.value,
    happyFeet: pHappyFeet.checked,
  };
  putLogic(updatedPenguin);
};

//EventListener(s)
submitBtn.addEventListener('click', putData);
