import projectsData from "../data/projects.json";

const expandImage = (imageElement) => {
  const expandedContainer = document.createElement('div');
  expandedContainer.classList.add('expanded');
  expandedContainer.style.backgroundImage = `url(${imageElement.src})`;
  document.body.appendChild(expandedContainer);

  expandedContainer.addEventListener('click', () => {
    expandedContainer.remove();
  });
}

const createCard = (name, image, description, tools, links) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  const cardTitle = document.createElement("h3");
  cardTitle.innerText = name;

  const cardImage = document.createElement("img");
  cardImage.src = "davidswebsite/" + image; 
  cardImage.classList.add("expandable-image");
  cardImage.addEventListener("click", () => expandImage(cardImage));

  const cardDescription = document.createElement("p");
  cardDescription.innerText = description;

  const cardTools = document.createElement("p");
  cardTools.innerHTML = `<b>Tools:</b> ${tools}`;

  const githubNavLink = document.createElement("a");
  githubNavLink.href = links[0];
  githubNavLink.target = "_blank";
  githubNavLink.classList.add("github-nav");
  githubNavLink.innerHTML = "Source Code<br>";

  const liveLink = document.createElement("a");
  liveLink.href = links[1];
  liveLink.target = "_blank";
  liveLink.classList.add("live-nav");
  liveLink.innerText = "Check Live"

  cardInfo.append(cardTitle, cardDescription, cardTools, githubNavLink, liveLink);
  card.append(cardImage, cardInfo);
  return card;
}

const handleData = () => {
  const cards = [];

  projectsData.forEach(({ name, image, description, tools, links }) => {
    let newCard = createCard(
      name,
      image,
      description,
      tools,
      links
    )

    cards.push(newCard);
  })

  return cards;
}

export default function LoadProjects() {
  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards-container");

  cardsContainer.append(...handleData());
  return cardsContainer;
}
