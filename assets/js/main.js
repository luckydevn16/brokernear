// FAQ ACCORDION
const questionItem = document.querySelectorAll(".faq-question");

questionItem.forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle("active");
    const panel = el.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  })
});

// YEAR
document.querySelectorAll('.year').forEach((el) => {
    el.innerText = new Date().getFullYear();
})

// FOOTER LINKS ACCORDION
const linksGroupHeading = document.querySelectorAll(".footer-links-group h4");

linksGroupHeading.forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle("active");
    const linksGroup = el.nextElementSibling;
    if (linksGroup.style.maxHeight) {
      linksGroup.style.maxHeight = null;
    } else {
      linksGroup.style.maxHeight = linksGroup.scrollHeight + "px";
    }
  })
});


// MOBILE MENU
const menuBtnOpen = document.querySelector('.header-menu-btn-icon');
const menuBtnClose = document.querySelector('.header-menu-btn-close');
const mobileMenu = document.querySelector('.mobile-menu');

const mobileMenuOpen = () => {
    mobileMenu.classList.add('active');
}

const mobileMenuClose = () => {
  if (mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
  }
}

menuBtnOpen.addEventListener('click', mobileMenuOpen);

menuBtnClose.addEventListener('click', mobileMenuClose);


// MOBILE MENU LINKS ACCORDION
const mobMenuDropdownItem = document.querySelectorAll(".nav-list-item.mob.dropdown");

mobMenuDropdownItem.forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle("active");
    const linksGroup = el.nextElementSibling;
    if (linksGroup.style.maxHeight) {
      linksGroup.style.maxHeight = null;
    } else {
      linksGroup.style.maxHeight = linksGroup.scrollHeight + "px";
    }
  })
});


// HEADER DROPDOWN MENU
const mainWrapper = document.querySelector('.main-wrapper');
const listItemDropdown = document.querySelector('.nav-list-item.dropdown');
const headerDropdownMenu = document.querySelector('.header-dropdown-menu');
const dropdownIcon = document.querySelector('.nav-list-item.dropdown .arrow-down-icon');

const dropdownMenuShow = () => {
  headerDropdownMenu.classList.toggle('active');
  dropdownIcon.classList.toggle('active');
}

listItemDropdown.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdownMenuShow();
});

mainWrapper.onclick = () => {
  headerDropdownMenu.classList.remove('active');
  dropdownIcon.classList.remove('active');
}

