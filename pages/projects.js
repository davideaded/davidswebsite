const createCardImage = (imgSrc) => {
  const image = document.createElement("img");
  image.src = imgSrc;

  // const imageContainer = document.createElement("div");
  // imageContainer.classList.add("card-img-container");h

  return image;
}

const createCard = (title, description, tools) => {
  const cardElement = document.createElement("div");

  const cardImage = createCardImage("/pokememorycard.png");

  const cardInfoElement = document.createElement("div");
  cardInfoElement.classList.add("card-info");

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = description;

  const toolsElement = document.createElement("h3");
  toolsElement.textContent = tools;

  cardElement.classList.add("card");
  cardElement.appendChild(cardImage);
  cardInfoElement.appendChild(titleElement);
  cardInfoElement.appendChild(descriptionElement);
  cardInfoElement.appendChild(toolsElement);
  cardElement.appendChild(cardInfoElement);

  return cardElement;
}

export default function loadProjects() {
  return document.createElement("div")
    .appendChild(createCard("Poke Memory Card", "Simple fun game!", "react"));
}
