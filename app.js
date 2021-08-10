const plus = document.querySelector('.plusMobile');
const navegadorMobile = document.querySelector('.navegacion');

plus.addEventListener('click', () => {

    if (navegadorMobile.style.display == 'flex') {
        navegadorMobile.style.display = 'none';
        plus.style.transform = 'rotate(0deg)';
        plus.style.transition = '.3s';
    } else {
        navegadorMobile.style.display = 'flex';
        plus.style.transform = 'rotate(45deg)';
        plus.style.transition = '.3s';
    }
})
