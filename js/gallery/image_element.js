// CREATE IMAGE ELEMENT IN HTML FILE

export default class ImageElement {
    createHTML(element) {
        let imageElem = document.createElement('img');
        imageElem.setAttribute('src', element.image);
        imageElem.setAttribute('alt', element.alt);
        imageElem.setAttribute('role', 'button');
        imageElem.className = 'photographer-works-media';
        return imageElem;
    };
};