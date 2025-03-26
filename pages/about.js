export default function loadAbout() {
  const div = document.createElement("div");
  const paragraph = document.createElement("p");
  const image = document.createElement("img");
  paragraph.innerHTML = `
    With a late-blooming interest in technology — mainly programming and the internet — I spent some time studying on my own before enrolling in a Computer Science bachelor's program. Now, I’ve decided to pursue it as a career rather than just a hobby, aiming to contribute meaningfully by creatively applying my skills to bring projects and applications to life.
  `
    ;
  div.id = "about-page";
  image.src = "./oldpc.gif";
  image.alt = "Anime old computer gif";

  div.append(paragraph, image);
  return div;
}
