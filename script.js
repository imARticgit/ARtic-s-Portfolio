// scroll reveal
const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach(el => observer.observe(el));
} else {
  reveals.forEach(el => el.classList.add("show"));
}

// nav background on scroll + back-to-top visibility
const nav = document.getElementById("nav");
const toTop = document.getElementById("toTop");

function handleScroll() {
  const scrolled = window.scrollY > 40;
  if (nav) nav.classList.toggle("scrolled", scrolled);
  if (toTop) toTop.classList.toggle("visible", window.scrollY > 600);
}

window.addEventListener("scroll", handleScroll, { passive: true });
handleScroll();

if (toTop) {
  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
