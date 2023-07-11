document.addEventListener('DOMContentLoaded', () => {
    modals()
});

const modals = () => {
    function popupModal(modalSelector, closeSelector, targetSelector) {
        const modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            target = document.querySelector(targetSelector);

        close.addEventListener('click', () => {
            modal.style.display = "none";
        })

        modal.addEventListener('click', (e) => {
            if (e.target === target) {
                modal.style.display = "none";

            }
        })
    }

    function showModalByTime(selector, time) {
        setTimeout(function () {
            document.querySelector(selector).style.display = "block";
        }, time);
    }


    popupModal('.popup', '.popup__close', '.popup');

    showModalByTime(".hidden", 3000);

}








