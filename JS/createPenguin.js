'use strict';

//DOM selectors
const pName = document.querySelector('#name');
const pAge = document.querySelector('#age');
const pHappyFeet = document.querySelector('#happyFeet');
const submitBtn = document.querySelector('#submitBtn');

console.log(happyFeet.checked);

//Functions to handle post request
const postLogic = (obj) => {
  fetch('http://localhost:8083/createPenguin', {
    method: 'POST',
    headers: {
      'content-type': 'application/JSON',
    },
    body: JSON.stringify(obj),
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

const postData = () => {
  const newPenguin = {
    name: pName.value,
    age: pAge.value,
    happyFeet: pHappyFeet.checked,
  };
  postLogic(newPenguin);
};

//EventListener(s)
submitBtn.addEventListener('click', postData);
