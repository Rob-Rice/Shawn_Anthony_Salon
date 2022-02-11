// ---------------------- open and close booking/ canellations  ----------------------
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const modalCancel = document.querySelector(".modal-cancel-overlay");
const closeBtn = document.querySelector(".close-btn");
const cancelBtn = document.querySelector(".cancellations-btn");
const closeCancelBtn = document.querySelector(".close-cancel-btn");
const hero = document.querySelector('.hero');
const img = document.querySelector('.hidden-image');

modalBtn.addEventListener("click", () => {
    modal.classList.add("open-modal");
    document.body.style.overflow = 'hidden';
    hero.style.visibility = 'hidden';
    img.style.visibility = 'hidden';
});


closeBtn.addEventListener("click", () => {
    modal.classList.remove("open-modal");
    document.body.style.overflow = "initial";  
    document.body.style.overflowX = "hidden";  
    hero.style.visibility = 'visible';
    img.style.visibility = 'visible';

    const width = window.innerWidth
    if (width > 1015) {
        img.style.visibility = 'hidden'
    }

});

cancelBtn.addEventListener('click', () => {
    modalCancel.classList.add("open-cancel-modal");
    document.body.style.overflow = 'hidden';
    hero.style.visibility = 'hidden';
    img.style.visibility = 'hidden';
});

closeCancelBtn.addEventListener("click", () => {
    modalCancel.classList.remove("open-cancel-modal");
    document.body.style.overflow = "initial";  
    document.body.style.overflowX = "hidden";  
    hero.style.visibility = 'visible';
    img.style.visibility = 'visible';

    const width = window.innerWidth
    if (width > 1015) {
        img.style.visibility = 'hidden'
    }
});

const navToggle = document.querySelector('.nav-toggle');
const hiddenLinks = document.querySelector('.hidden-links');

navToggle.addEventListener('click', function () {
    hiddenLinks.classList.toggle('show-links')
})


