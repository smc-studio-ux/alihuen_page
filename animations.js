const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 },
);

document
  .querySelectorAll(".fade-up, .fade-left, .fade-right, .fade-in")
  .forEach((el) => observer.observe(el));

// Mobile menu
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});
/* =============================
   CV MODAL
============================= */

function openCV(id) {
  document.getElementById(id).style.display = "flex";
  document.body.classList.add("modal-open");
}

function closeCV(id) {
  document.getElementById(id).style.display = "none";
  document.body.classList.remove("modal-open");
}

/* =============================
   CAROUSEL AUTO
============================= */
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.querySelectorAll(".cv-modal").forEach((modal) => {
      modal.style.display = "none";
    });
    document.body.classList.remove("modal-open");
  }
});

document.querySelectorAll(".cv-carousel").forEach((carousel) => {
  const images = carousel.querySelectorAll("img");
  let index = 0;

  setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  }, 3500);
});
