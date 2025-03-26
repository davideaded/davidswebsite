export default function loadHome() {
  const paragraph = document.createElement("p");
  const div = document.createElement("div");
  const image = document.createElement("img");

  paragraph.innerHTML = `
    Hey there! I'm David, from the title! I'm a developer based in São Paulo, Brazil. 
    I am currently a Computer Science student at UNICID.
    Here, I'll be showcasing some of my projects. I'm certain it will be amusing to look back at my old code in the years to come. 
    <br><br>
    You can also find my contacts at the bottom of the page.
    <br><br>
    Have fun looking around!
`;

  div.id = "home-page";
  image.src = "./oldpc.gif";
  image.alt = "Anime old computer gif";
  div.append(paragraph, image);

  return div;
}