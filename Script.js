document.addEventListener("DOMContentLoaded", () => {

  const navToggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");
  const navLinks = document.querySelectorAll(".nav-link");

  // Toggle menu
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("show");
  });

  // Tutup menu saat klik link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navList.classList.remove("show");
    });
  });

  // Tutup jika klik di luar
  document.addEventListener("click", (e) => {
    if (!navList.contains(e.target) && !navToggle.contains(e.target)) {
      navList.classList.remove("show");
    }
  });

  // Tahun otomatis footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
