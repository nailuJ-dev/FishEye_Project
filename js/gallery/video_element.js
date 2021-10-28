// CREATE VIDEO ELEMENT IN HTML FILE

export default class VideoElement {
    createHTML(element) {
        let videoElem = document.createElement('video');
        videoElem.setAttribute('controls', 'controls');
        videoElem.setAttribute('src', element.image);
        videoElem.setAttribute('alt', element.alt);
        videoElem.setAttribute('role', 'button');
        videoElem.className = 'photographer-works-media';
        return videoElem;
    };
};