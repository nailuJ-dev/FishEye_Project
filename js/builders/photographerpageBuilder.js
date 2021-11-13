export default class ShowPhotographers {
    Constructor (data, choices) {
        this._id = data.id
        this._city = data.city
        this._country = data.country
        this._name = data.name
        this._picture = data.portrait
        this._price = data.price
        this._tagline = data.tagline
        this._tags = data.tags
        this._totalLikes = choices
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

    get profileHeader () {
        return `
        <div class="photographer-page_header">
             <div class="photographer-page_header_content">
                 <h1 class="photographer-page_header_content_title">${this._name}</h1>
                 <p class="photographer-page_header_content_localization">${this.localization}</p>
                 <p class="photographer-page_header_content_tagline">${this._tagline}</p>
                 <ul class="photographer-page_header_content_taglist">${this._tags.map(tag => `<li href="../index.html" class="photographer-page__header__content__tags">#${tag}</li>`).join(" ")}</ul>
             </div>
             <button class="photographer-page_contact_button focus_element-secondary" onclick="displayPhotographerModale()" aria-label="Contacter le photographe ${this._name}">Contactez-moi
             </button>
             <img src="${this.picture}" class="photographer-page_header_photo" alt="Photographie de profil de ${this._name}">
         </div> 
         `
     };

     get profileFooter () {
        return `
        <section class="photographer-page_footer">
            <aside class="photographer-page_footer_aside">
            <p class="photographer-page_footer_aside_total-likes" aria-label="Nombre total de likes ${this.userReloadLikes}">${this.userReloadLikes}</p>
            <i class="fas fa-heart" aria-hidden="true"></i>
            </aside>
            <p class="photographer-page_footer_price" aria-label="Tarif du photographe ${this._price} euros par jour">${this._price}€/jour</p>
        </section>
        `
    };
};
