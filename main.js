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