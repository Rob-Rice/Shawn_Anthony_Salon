// ---------------------- open and close booking/ canellations  ----------------------
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const modalCancel = document.querySelector(".modal-cancel-overlay");
const closeBtn = document.querySelector(".close-btn");
const cancelBtn = document.querySelector(".cancellations-btn");
const closeCancelBtn = document.querySelector(".close-cancel-btn");
const hero = document.querySelector('.hero');

modalBtn.addEventListener("click", () => {
    modal.classList.add("open-modal");
    document.body.style.overflow = 'hidden';
    hero.style.visibility = 'hidden';
});


closeBtn.addEventListener("click", () => {
    modal.classList.remove("open-modal");
    document.body.style.overflow = "initial";  
    document.body.style.overflowX = "hidden";  
    hero.style.visibility = 'visible';
});

cancelBtn.addEventListener('click', () => {
    modalCancel.classList.add("open-cancel-modal");
    document.body.style.overflow = 'hidden';
    hero.style.visibility = 'hidden';
});

closeCancelBtn.addEventListener("click", () => {
    modalCancel.classList.remove("open-cancel-modal");
    document.body.style.overflow = "initial";  
    document.body.style.overflowX = "hidden";  
    hero.style.visibility = 'visible';
});

// 
// document.addEventListener('DOMContentLoaded', init);

// function init() {
//     let query = window.matchMedia("(max-width: 1299px)")

//     if(query.matches) {
//         document.querySelector('p').style.color = 'red';
//         // document.querySelector('.hero').flexDirection = 'column';
//         // document.querySelector('.hero').marginTop = '20%';

//     } else {
//         document.querySelector('.hero').style.display = 'none';

//     }
// }


// init()
    //     display: flex;
    //     flex-direction: column;
    //     margin-top: 20%;