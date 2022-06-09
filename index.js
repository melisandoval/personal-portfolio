// H1 typewriter effect
// code adapted from: https://www.youtube.com/watch?v=POX3dT-pB4E
class TypeWriter {
  constructor(span, words) {
    this.span = span;
    this.words = words;
    this.h1 = "";
    this.wordIndex = 0;
    this.type();
  }
  //Type method:
  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];
    this.h1 = fullTxt.substring(0, this.h1.length + 1);
    this.span.innerHTML = this.h1;
    setTimeout(() => this.type(), 30);
  }
}

const init = () => {
  //H1 Major
  const h1Major = document.querySelector(".h1-major");
  const h1MajorWords = JSON.parse(h1Major.getAttribute("h1-major-words"));

  // H1 Minor
  const h1Minor = document.querySelector(".h1-minor");
  const h1MinorWords = JSON.parse(h1Minor.getAttribute("h1-minor-words"));

  //init TypeWriter:
  new TypeWriter(h1Major, h1MajorWords);
  setTimeout(() => new TypeWriter(h1Minor, h1MinorWords), 1200);
};

// Init on DOM load
document.addEventListener("DOMContentLoaded", init);

// Scroll down text:
setTimeout(() => {
  document.getElementById("scroll-down-container").style.display = "block";
}, 2900);

// for the hamburger menu on mobile:
// code adapted from: https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
function showMenu() {
  const navLinks = document.getElementById("nav-links");
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
}
