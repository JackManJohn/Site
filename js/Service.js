"use strict"
let servLink = document.getElementsByClassName('our-service-nav-link');
let servItems = document.getElementsByClassName('onactiv');


for (let i = 0; i < servLink.length; i++) {

    servLink[i].onclick = function() {
        for (let j = 0; j < servLink.length; j++) {
            servLink[j].classList.remove('chosen');
        }
        servLink[i].classList.add('chosen');

        for (let j = 0; j < servItems.length; j++) {
            servItems[j].classList.remove('active');
        }
        servItems[i].classList.add('active');
    }
}