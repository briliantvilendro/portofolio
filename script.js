const roleTexts = ["Front End Web Developer", "Designer UI/UX"];
const roleElement = document.getElementById("typing-role");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let pauseDelay = 1500;

function type() {
  const currentText = roleTexts[roleIndex];

  // Update the displayed text
  roleElement.textContent = currentText.substring(0, charIndex);

  // Determine delay before next call
  let delay = typingSpeed;

  if (!isDeleting && charIndex === currentText.length) {
    // Done typing, wait before deleting
    isDeleting = true;
    delay = pauseDelay; // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    // Done deleting, move to next text
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roleTexts.length;
    delay = 500; // Short delay before typing next word
  } else {
    // Normal typing or deleting
    charIndex += isDeleting ? -1 : 1;
    delay = isDeleting ? 50 : typingSpeed;
  }

  setTimeout(type, delay);
}

document.addEventListener("DOMContentLoaded", type);

// NAVBAR

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main, section");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120; // offset untuk header tinggi
    const sectionHeight = section.offsetHeight;
    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});
