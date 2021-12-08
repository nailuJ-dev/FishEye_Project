// Build the media content for the photographer pages
export class PhotographyContent {
    constructor (datas) {
        this._srcImage = datas.image;
        this._likesImage = datas.likes;
        this._titleImage = datas.title;
        this._photographerIdImage = datas.photographerId;
        this._altText = datas.alt;
    }

    createHtmlContent () {
        return `
        <figure class="photographer-page_gallery_card" aria-label="${this._titleImage} upper closing view">
            <img class="photographer-page_gallery_media focus_element-secondary" loading="lazy" tabindex="0" src="./media/${this._photographerIdImage}/${this._srcImage}" alt="${this._altText}"/>
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

export class VideoContent {
    constructor (datas) {
        this._srcVideo = datas.video;
        this._likesVideo = datas.likes;
        this._titleVideo = datas.title;
        this._photographerIdVideo = datas.photographerId;
    }

    createHtmlContent () {
        return `
        <figure class="photographer-page_gallery_card">
            <video controls class="photographer-page_gallery_media focus_element-secondary" id="photographer-page_gallery_video"">
                <source src="./media/${this._photographerIdVideo}/${this._srcVideo}" tabindex="0" alt="${this._altText}"/>
            </video>
            <footer class="photographer-page_gallery_media_footer">
                <figcaption class="photographer-page_gallery_media_footer_figcaption">${this._titleVideo}</figcaption>
                <aside class="photographer-page_gallery_media_footer_like-section">
                    <p class="photographer-page_gallery_media_footer_like-section-counter">${this._likesVideo}</p>
                    <button class="photographer-page_gallery_media_footer_like-section-button focus_element-secondary" title="I like it" aria-label="Add a like"><i class="far fa-heart" aria-hidden="true"></i></button>
                </aside>
            </footer>
        </figure>
        `;
    };
};
