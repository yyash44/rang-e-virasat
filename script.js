document.addEventListener("DOMContentLoaded", () => {
  // Scroll animation
  const faders = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });
  faders.forEach(fader => observer.observe(fader));

  // Lightbox logic
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.querySelector(".lightbox-content");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxContent.innerHTML = "";
      if (item.tagName.toLowerCase() === "img") {
        const img = document.createElement("img");
        img.src = item.src;
        lightboxContent.appendChild(img);
      } else if (item.tagName.toLowerCase() === "video") {
        const video = document.createElement("video");
        video.src = item.src;
        video.controls = true;
        video.autoplay = true;
        lightboxContent.appendChild(video);
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxContent.innerHTML = "";
  });
});
