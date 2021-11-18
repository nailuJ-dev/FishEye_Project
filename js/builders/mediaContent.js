export default class MediaContentBuilder {
    constructor (data) {
        if (data.type === 'image') {
            return new PhotographyContent(data);
        } else if (data.type === 'video') {
            return new VideoContent(data);
        } else {
            const err = Error('Content is unknown')
            throw err
        };
    };
};

class PhotographyContent {
    constructor (datas) {
        this._srcImage = datas.image;
        this._likesImage = datas.likes;
        this._titleImage = datas.title;
        this._photographerIdImage = datas.photographerId;
        // adding of a feature content must be checked with this._altImage = datas.description;
    }

    createHtmlContent () {
        return `
        <figure class="photographer-page_gallery_card" aria-label="${this._titleImage} upper closing view">
            <img class="photographer-page_gallery_media focus_element-secondary" loading="lazy" src="../assets/medias/${this._photographerIdImage}/${this._srcImage}" alt="${this._altImage}"/>
            <footer class="photographer-page_gallery_media_footer">
                <figcaption class="photographer-page_gallery_media_footer_figcaption">${this._titleImage}</figcaption>
                <div class="photographer-page_gallery_media_footer_like-section">
                    <p class="photographer-page_gallery_media_footer_like-section-counter">${this._likesImage}</p>
                    <button class="photographer-page_gallery_media_footer_like-section-button focus_element-secondary" title="I like it" aria-label="Add a like"><i class="far fa-heart" aria-hidden="true"></i></button>
                </div>
            </footer>
        </figure>
        `;
    };
};

class VideoContent {
    constructor (datas) {
        this._srcVideo = datas.video;
        this._likesVideo = datas.likes;
        this._titleVideo = datas.title;
        this._photographerIdVideo = datas.photographerId;
        // adding of a feature content must be checked with this._altVideo = datas.description;
    }

    createHtmlContent () {
        return `
        <figure class="photographer-page_gallery_card">
            <video controls class="photographer-page_gallery_media focus_element-secondary">
                <source src="../assets/medias/${this._photographerIdVideo}/${this._srcVideo}" alt="${this._altVideo}"/>
            </video>
            <footer class="photographer-page_gallery_media_footer">
                <figcaption class="photographer-page_gallery_media_footer_figcaption">${this._titleVideo}</figcaption>
                <aside class="photographer-page_gallery_media_footer_like-section">
                    <p class="photographer-page_gallery_media_footer_like-section-counter">${this._likesVideo}</p>
                    <button class="photographer-page_gallery_media_footer_like-section-button focus_element-secondary"><i class="far fa-heart" aria-hidden="true"></i></button>
                </aside>
            </footer>
        </figure>
        `;
    };
};
