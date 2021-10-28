export default class ScrollButton {
    // Get position on screen to bring the user back to the top of the website page
    scrollBtn() {
        window.addEventListener('scroll', () => {
            let button = document.getElementById('main-photographer-button');
            let axisY = window.scrollY;

            if (axisY >= 130) {
                button.style.display = 'block';  // check once css is done !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            } else {
                button.style.display = 'none';
            }
        });
    }
}
