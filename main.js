AOS.init();


const elements = document.getElementsByClassName("words");


for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('animationend', function(e) {
        elements[i].classList.remove('animated');
    });

    elements[i].addEventListener('mouseover', function(e) {
        elements[i].classList.add('animated')
    })
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');


hiddenElements.forEach((el) => observer.observe(el))


const navMenu = document.querySelector('.navbar-items');



document.querySelector(".button-ham").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".item1-menu");
var line2__bars = document.querySelector(".item2-menu");
var line3__bars = document.querySelector(".item3-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
    navMenu.classList.toggle("active-menu");

    if (navMenu.classList.contains("active-menu")){
        navToggle.setAttribute("aria-label", "Cerrar menu");
    }else{
        navToggle.setAttribute("aria-label", "Abrir");
        navMenu.classList.add("active-menu");
    };
}