function toggleEvenColor() {
    let spanElements = document.querySelectorAll('#numbers span');
    for (let i = 1; i < spanElements.length; i+=2) {
        if (spanElements[i].style.backgroundColor !== 'yellow') {
            spanElements[i].style.backgroundColor = 'yellow'
        } else {
            spanElements[i].style.backgroundColor = 'transparent'
        }
    }
}