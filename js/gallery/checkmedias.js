// CHECKING THE MEDIA CATEGORIES : VIDEO OR IMAGE ?

import ImageElement from './image_element.js';
import VideoElement from './video_element.js';

export default class CheckMedias {
    mediaChecked(element) {
        let checking = null;
        if (element.hasOwnProperty('image')) {
            checking = new ImageElement();
        } else if (element.hasOwnProperty('video')) {
            checking = new VideoElement();
        };
        return checking.createHTML(element);
    };
};