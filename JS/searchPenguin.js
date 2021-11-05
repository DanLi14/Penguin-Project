'use strict';

//DOM variables
const main = document.querySelector('main');

fetch('http://localhost:8083/getAll').then((response) => {
  if (response.status !== 200) {
    console.error(`error status: ${response.status}`);
  }
  response
    .json()
    .then((data) => {
      console.log(data);
      for (let pengiun of data) {
        createPenguinCard(pengiun);
      }
    })
    .catch((error) => {
      `connection works but error: ${error}`;
    });
});

const createPenguinCard = (data) => {
  // Create HTML elements
  const parentArticle = document.createElement('article');
  const parentDiv = document.createElement('div');
  const imageSection = document.createElement('section');
  const image = document.createElement('img');
  const contentSection = document.createElement('section');
  const bodyDiv = document.createElement('div');
  const cardHeader = document.createElement('h5');
  const para1 = document.createElement('p');
  const para2 = document.createElement('p');

  //Add classlists to HTML elements
  parentArticle.classList = 'card mb-3';
  parentDiv.classList = 'row';
  imageSection.classList = 'col-md-4';
  contentSection.classList = 'col-md-8';
  bodyDiv.classList = 'card-body';
  cardHeader.classList = 'card-title';
  para1.classList = 'card-text';
  para2.classList = 'card-text';

  // DOM manipulation
  image.src = '';
  image.alt = 'image of a penguin';
  cardHeader.textContent = data.name;
  para1.textContent = `Age: ${data.age}`;
  para2.textContent = `${data.name} has happy feet: ${data.happyFeet}`;

  // Append everything
  bodyDiv.appendChild(cardHeader);
  bodyDiv.appendChild(para1);
  bodyDiv.appendChild(para2);

  contentSection.appendChild(bodyDiv);
  imageSection.appendChild(image);

  parentDiv.appendChild(imageSection);
  parentDiv.appendChild(contentSection);
  parentArticle.appendChild(parentDiv);

  console.log(parentArticle);

  main.appendChild(parentArticle);
};
