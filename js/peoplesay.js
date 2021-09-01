"use strict"

let couruselUser = document.querySelectorAll('.courusel-user-name');
let userComents = document.querySelectorAll('.what-people-say-user-comments');
let btnl = document.querySelector('.btn-left');
let btnr = document.querySelector('.btn-right');
console.log(couruselUser);

for (let i = 0; i < couruselUser.length; i++) {
    couruselUser[i].onclick = function() {
        for (let j = 0; j < userComents.length; j++) {
            userComents[j].classList.remove('act');
        }
        userComents[i].classList.add('act');


        for (let k = 0; k < couruselUser.length; k++) {
            couruselUser[k].classList.remove('hov');
            console.log('k use:' + k)
        }
        couruselUser[i].classList.add('hov');

    }
}


btnr.onclick = function() {
    for (let j = userComents.length - 1; j >= 0; j--) {
        if (userComents[j].classList.contains('act') && j !== userComents.length - 1) {
            userComents[j].classList.remove('act');
            userComents[j + 1].classList.add('act');
        }
        if (couruselUser[j].classList.contains('hov') && j !== couruselUser.length - 1) {
            couruselUser[j].classList.remove('hov');
            couruselUser[j + 1].classList.toggle('hov');
        }
    }

}

btnl.onclick = function() {
    for (let k = 0; k < userComents.length; k++) {
        if (userComents[k].classList.contains('act') && k !== 0) {
            userComents[k].classList.remove('act');
            userComents[k - 1].classList.add('act');
        }

        if (couruselUser[k].classList.contains('hov') && k !== 0) {
            couruselUser[k].classList.remove('hov');
            couruselUser[k - 1].classList.toggle('hov');
        }
    }
}