export default function loadHome() {
  const paragraph = document.createElement("p");

  paragraph.innerHTML = `
    Hey there! I'm a developer based in São Paulo, Brazil. 
    I am currently a Computer Science student at UNICID.
    Here, I'll be showcasing some of my projects. I'm certain it will be amusing to look back at my old code in the years to come. <br><br>

    Have fun looking around!
`;

  return paragraph;
}