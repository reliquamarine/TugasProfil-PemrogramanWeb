const textToType =
  "Halo, saya mahasiswa semester 3 di Universitas Sumatera Utara dari Fakultas Ilmu Komputer dan Teknologi Informasi dengan program studi Ilmu Komputer. Aktif dalam berbagai kepanitiaan di kampus dan sering mengikuti seminar yang diadakan di kampus.";
const typingTextElement = document.getElementById("typing-text");
let i = 0;

function typeWriter() {
  if (i < textToType.length) {
    typingTextElement.innerHTML += textToType.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

window.onload = typeWriter;

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    navLinks.forEach((item) => item.classList.remove("active"));
    sections.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).classList.add("active");
    if (targetId === "about-me") {
      typingTextElement.innerHTML = "";
      i = 0;
      typeWriter();
    }
  });
});

const profilePhoto = document.getElementById("profile-photo");
const imagePopup = document.getElementById("image-popup");
const closeBtn = document.getElementById("close-btn");

profilePhoto.addEventListener("click", function () {
  imagePopup.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  imagePopup.style.display = "none";
});

imagePopup.addEventListener("click", function (e) {
  if (e.target.id === "image-popup") {
    imagePopup.style.display = "none";
  }
});

const reveals = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right, .reveal-fade"
);

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 200; 

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", () => {
  revealOnScroll();

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    reveals.forEach((el) => el.classList.add("active"));
  }
});
