document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Adee Baloch – Student Council Bahawalpur!");

  
  const menu = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menu.classList.toggle("is-active");
  });

  
  const galleryImages = document.querySelectorAll(".gallery-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = "none";
    }
  });
});
