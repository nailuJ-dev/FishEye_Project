export default class ShowPhotographers {
    constructor (data, likes) {
        this._id = data.id
        this._city = data.city
        this._country = data.country
        this._name = data.name
        this._picture = data.portrait
        this._price = data.price
        this._tagline = data.tagline
        this._tags = data.tags
        this._totalLikes = likes
    };

    get picture () {
        return `../media/Portraits/${this._picture}`
    };

    get location () {
        return `${this._city}, ${this._country}`
    };

    get documentTitle () {
        document.title += ` - ${this._name}`
    };

    profileHeader () {
        return `
        <div class="photographer-page_header">
            <div class="photographer-page_header_content">
                <h1 class="photographer-page_header_content_title">${this._name}</h1>
                <p class="photographer-page_header_content_localization">${this._city}, ${this._country}</p>
                <p class="photographer-page_header_content_tagline">${this._tagline}</p>
                <ul class="photographer-page_header_content_taglist">${this._tags.map(tag => `<li href="../index.html" class="photographer-page_header_content_tags">#${tag}</li>`).join(" ")}</ul>
            </div>
            <button class="photographer-page_contact_button focus_element-secondary" id="contact-me-button" aria-label="Contacter le photographe ${this._name}">Contactez-moi</button>
            <img src="${this._picture}" class="photographer-page_header_photo" alt="Photographie de profil de ${this._name}">
        </div>      
        `
    };

    profileFooter () {
        return `
        <section class="photographer-page_footer">
            <aside class="photographer-page_footer_aside">
            <p class="photographer-page_footer_aside_total-likes" aria-label="Nombre total de likes ${this.userLikesReload}">${this.userLikesReload}</p>
            <i class="fas fa-heart" aria-hidden="true"></i>
            </aside>
            <p class="photographer-page_footer_price" aria-label="Tarif du photographe ${this._price} euros par jour">${this._price}€/jour</p>
        </section>
        `
    };

    profileContact () {
        return `
        <span aria-label='Contact me ${this._name}' aria-labelledby='photographer-name'>Contactez-moi</span>
        <a id='photographer-name'>${this._name}</a>
        `
    }

    get userLikesReload() {
        let totalLikesEl = document.querySelectorAll('.photographer-page_gallery_media_footer_like-section-counter');
        let sumOfLikes = 0
        totalLikesEl.forEach(function (like) {
            let likeEl = Number(like.textContent)
            sumOfLikes += likeEl;
        });
        return sumOfLikes;
    };
};
