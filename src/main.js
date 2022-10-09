const filter = document.querySelector(".section__form__input")

filter.addEventListener("keyup", filterContent)

function filterContent(a) {
    const filterValue = a.target.value.toLowerCase()
    const boxes = document.querySelectorAll('.list-box')
    boxes.forEach(function (box) {
        const text = box.textContent.toLowerCase()
        if (text.indexOf(filterValue) === -1) {
            box.setAttribute('style', 'display:none !important')
        } else {
            box.setAttribute('style', 'display:block')
        }
    })
}