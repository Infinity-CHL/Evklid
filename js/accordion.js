const links = document.querySelectorAll('.faq-content__top');
const contentBlocks = document.querySelectorAll('.faq-content__bottom');

function resetClasses (array, selector) {
    array.forEach(function (item) {
        item.classList.remove(selector);
    });
}

links.forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        let parentElement = event.currentTarget.closest('.faq-container__item');
        let contentBlock = parentElement.querySelector('.faq-content__bottom');
        resetClasses(links, 'faq-content__top_active');
        event.currentTarget.classList.add('faq-content__top_active');
        resetClasses(contentBlocks, 'faq-content__bottom_open');
        contentBlock.classList.add('faq-content__bottom_open');
    })
})