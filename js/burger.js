window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#header__burger').addEventListener('click', function() {
        document.querySelector('#header__menu').classList.toggle('is-active')
    })
})