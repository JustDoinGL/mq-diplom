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
      document.querySelector('body').style.overflow = "";
    })

    modal.addEventListener('click', (e) => {
      if (e.target === target) {
        modal.style.display = "none";
        document.querySelector('body').style.overflow = "";
      }
    })
  }

  function showModalByTime(selector, time) {
    setTimeout(function () {
      document.querySelector(selector).style.display = "block";
      document.querySelector('body').style.overflow = "hidden";
    }, time);
  }

  popupModal('.popup', '.popup-close', '.popup-body')

  showModalByTime(".popup", 3000);
}

