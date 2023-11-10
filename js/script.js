const chooseBtn = document.querySelectorAll(".choose-list-btn");
const contentItem = document.querySelectorAll(".content-images-item");



chooseBtn.forEach(function(elem) {
	elem.addEventListener('click', open)
})


function open(evt) {
    const target = evt.currentTarget;
    const button = target.dataset.button;
    console.log('Button:', button);

    const contentActive = document.querySelectorAll(`.${button}`);
    console.log('Content Active:', contentActive);

    chooseBtn.forEach(function (item) {
        item.classList.remove('btn-active');
    });

    target.classList.add('btn-active');

    contentItem.forEach(function (item) {
        item.classList.remove('content-active');
    });

    // Добавляем класс content-active только нужным элементам
    contentActive.forEach(function (item) {
        item.classList.add('content-active');
    });
}










