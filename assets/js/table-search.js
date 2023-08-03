// TABLE SEARCH
const tableSearchInput = document.querySelector(".table-search-input");
const tableItems = document.querySelectorAll('.table-item-row');

tableSearchInput.addEventListener('input', (e) => {
    let searchValue = e.target.value.toLowerCase().trim();
    
    tableItems.forEach( elem => {
        !elem.dataset.name.toLowerCase().includes(searchValue) ?
        elem.classList.add('hide') :
        elem.classList.remove('hide');
    })
});