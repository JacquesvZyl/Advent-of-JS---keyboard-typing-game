const keys = document.querySelectorAll('.key');


function removeJiggle(key) {
    key.classList.remove('jiggle')
}
function setRandomKeyJiggle() {
    const randNum = Math.floor((Math.random() * keys.length))
    keys[randNum].classList.add('jiggle')
}


document.addEventListener('keydown', (event) => {

    keys.forEach(key => {
        if(event.key.toUpperCase() === key.dataset.key && key.classList.contains('jiggle')) {
            removeJiggle(key);
            setRandomKeyJiggle();
        }
        })

})




