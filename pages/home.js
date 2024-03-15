export default function loadHome() {
  const paragraph = document.createElement("p");

  paragraph.innerHTML = `
    Hey there! I'm a developer based in São Paulo, Brazil. Positioned at the nexus of innovation, 
    I delve into the world of technology, eager to decipher its intricacies and wield its power to create impactful solutions. And have some fun, of course. <br><br>

    From crafting intuitive interfaces to building robust back-end systems - or atempting to, at least -, I traverse the digital landscape with curiosity and determination. <br><br>
    
    Here, I'll be showcasing some of my projects. I'm certain it will be amusing to look back at my old code in the years to come. <br><br>

    Have fun looking around!
`;

  return paragraph;
}