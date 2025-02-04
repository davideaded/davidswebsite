export default function loadAbout() {
  const div = document.createElement("div");
  const paragraph = document.createElement("p");
  const image = document.createElement("img");
  paragraph.innerHTML = `
    lol
  `
    ;
  div.id = "about-page";
  image.src = "./oldpc.gif";
  image.alt = "Anime old computer gif";

  div.append(paragraph, image);
  return div;
}
