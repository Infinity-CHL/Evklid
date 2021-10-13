document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.work-container__button').forEach(function (tabsBtn) {
          tabsBtn.addEventListener('click', function (event) {
             const path = event.currentTarget.dataset.path

             document.querySelectorAll('.tab-content').forEach(function(tabContent) {
                 tabContent.classList.remove('tab-content-active')
             })
              document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
        })
    })
})

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.work-container__button').forEach(function (btnActive) {
        btnActive.addEventListener('click', function () {

            document.querySelectorAll('.work-container__button').forEach(function (deActive) {
                deActive.classList.remove('work-container__button-active')
            })
        })
    })
})