// COUNTRY CHOSING
const selectedCountry = document.querySelectorAll('.selected-country');
const customSelect = document.querySelector('.custom-select');
const optionsList = document.querySelector('.options-list');
const optionsListItem = document.querySelectorAll('.options-list-item');

customSelect.addEventListener('click', () => {
  optionsList.classList.toggle('opened');
});

optionsListItem.forEach((el) => {
  el.addEventListener('click', (e) => {
    selectedCountry.forEach((el) => {
      el.innerText = e.target.innerText;
    })
  })
});