document.addEventListener('DOMContentLoadede', function () {
    document.querySelectorAll('.work-container__btn').forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('work-content').forEach(function(tabContent) {
                tabContent.classList.remove('.work-content-active')
            })
            document.querySelector(`[data-target="$(path)"]`).classList.add('work-content-active')
        })
    })
})