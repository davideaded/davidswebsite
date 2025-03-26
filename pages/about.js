export default function loadAbout() {
  const paragraph = document.createElement("p");
  paragraph.innerHTML = `
  With a growing passion for technology—especially programming and the internet—I started as a self-taught learner before enrolling in a Computer Science bachelor's program. What once was a hobby has now become my career path, and I’m eager to apply my skills creatively to build meaningful projects and applications.
  <br><br>
  Beyond coding, I enjoy watching football (Vamos, São Paulo!), Formula 1, TV shows, and movies. Outdoors, I like going for walks, reading books in public spaces, or simply being close to nature.
  <br><br>
  One of my aspirations as a software developer is to contribute to ecological initiatives, using technology to help preserve and protect the environment.
  `;
  return paragraph;
}

