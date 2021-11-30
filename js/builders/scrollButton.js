// Get position on screen to bring the user back to the top of the website page
export default function scrollBtn() {
    window.addEventListener('scroll', () => {
        let button = document.getElementById('main-photographer-button');
        let axisY = window.scrollY;

        if (axisY >= 110) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
};
