const elements = document.getElementsByClassName("words");


for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('animationend', function(e) {
        elements[i].classList.remove('animated');
    });

    elements[i].addEventListener('mouseover', function(e) {
        elements[i].classList.add('animated')
    })
}