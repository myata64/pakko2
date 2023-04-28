const popupLinks = document.querySelectorAll('.nav__btn');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
const closesArea = document.querySelectorAll('popup__close-area');

let unlock = true;

const timeout = 500;


// if(closesArea.length >0) {
//     for (let i = 0; i < closesArea.length; i++) {
//         const closeArea = closesArea[i];
//         closeArea.addEventListener("ondbclick", function(e)  {
//             const 
//             closeArea.classList.toggle('large');
//             e.preventDefault();
//         });
//     }
// }

if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
        const popupLink = popupLinks[i];
        popupLink.addEventListener("click", function(e)  {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let i =0; i < popupCloseIcon.length; i++) {
        const el = popupCloseIcon[i];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if(popupActive) {
            popupClose(popupActive, false);
        } else {
            // bodyLock();// Должно блокировать--ошибка.Uncaught ReferenceError: bodyLock is not defined 
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("ondblclick", function(e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
                el.preventDefault();
            }
        });
    }
}
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnlock();
            el.preventDefault();
        }
    }
}