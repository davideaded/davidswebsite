export default function loadAbout() {
  const div = document.createElement("div");
  const paragraph = document.createElement("p");
  const image = document.createElement("img");
  paragraph.innerHTML = `
    I was adrift, lacking direction and purpose, until a developer friend introduced me to the programming world.
    Descending that spiral, I found myself
    unraveling code, being amused by reading and understanding existing code, as well bringing my own chaotic creations to life.
    <br><br>
    Seeking to deepen my understanding, I enrolled in an online bootcamp at Soul Code Academy, where I immersed myself in the fundamentals of web development over the course
    of several months. Yet, despite this initial progress, I soon was imprisioned in the "tutorial hell."
    Fortunately I've discovered The Odin Project. In between an abundance of online courses, I found a path of learning through creation,
    allowing me to truly grasp the concepts by applying them in real projects.
  `
    ;
  div.id = "about-page";
  image.src = "./oldpc.gif";
  image.alt = "Anime old computer gif";

  div.append(paragraph, image);
  return div;
}