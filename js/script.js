// Navbar menu toggle for mobile
const menuBtn = document.getElementById("menu");
const nav = document.querySelector(".navbar-nav");
menuBtn.addEventListener("click", function (e) {
  e.preventDefault();
  nav.classList.toggle("active");
});

// Smooth scroll for nav links
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.startsWith("#")) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
      nav.classList.remove("active"); // close menu on mobile
    }
  });
});

// Contact form show result
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;
    document.getElementById("tampilNama").textContent = nama;
    document.getElementById("tampilEmail").textContent = email;
    document.getElementById("tampilPesan").textContent = pesan;
    document.getElementById("hasilContact").style.display = "block";
    contactForm.reset();
  });
}
