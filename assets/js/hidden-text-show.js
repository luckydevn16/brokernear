const showMoreBtn = document.querySelectorAll(".show-more-btn");

showMoreBtn.forEach((el) => {
  el.addEventListener('click', () => {
    el.previousElementSibling.classList.toggle("shown");
    if (el.previousElementSibling.classList.contains("shown")) {
        el.innerText = 'Show Less';
    } else {
        el.innerText = 'Show More';
    }
  })
});