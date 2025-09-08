// script.js
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// FAQ accordion toggle (smooth with scrollHeight)
document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    const btn = faq.querySelector(".faq-question");
    const answer = faq.querySelector(".faq-answer");

    btn.addEventListener("click", () => {
      if (faq.classList.contains("active")) {
        // close
        answer.style.maxHeight = null;
        faq.classList.remove("active");
      } else {
        // open (close others if you want accordion behavior)
        answer.style.maxHeight = answer.scrollHeight + "px";
        faq.classList.add("active");
      }
    });
  });
});

