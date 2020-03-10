const panles = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');   
}
function toggleActive(e) {
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panles.forEach(panel => panel.addEventListener('click', toggleOpen));
panles.forEach(panle => panle.addEventListener('transitionend', toggleActive));