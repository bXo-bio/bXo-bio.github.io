// FAQ Accordion - Independent Toggle
document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach(faq => {
    const questionBtn = faq.querySelector(".faq-question");
    const answer = faq.querySelector(".faq-answer");

    questionBtn.addEventListener("click", () => {
      faq.classList.toggle("active");

      if (faq.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px"; // expand
      } else {
        answer.style.maxHeight = null; // collapse
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.module-card');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  
  cards.forEach(card => observer.observe(card));
});

