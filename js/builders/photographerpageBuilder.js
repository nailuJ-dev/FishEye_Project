class ShowPhotographers {
    constructor (datas, choices) {
        this._id = datas.id
        this._city = datas.city
        this._country = datas.country
        this._name = datas.name
        this._picture = datas.portrait
        this._price = datas.price
        this._tagline = datas.tagline
        this._tags = datas.tags
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

    get profileUser () {
        return `
            <a href="pages/photographer-page.html?id=${this._id}" class="focus_element" aria-label="Aller sur la page de ${this._name} basé dans la ville de ${this.localization} son tarif journalier est de ${this._price} euros par jour. Sa spécialité est ${this._tags} et son mantra est ${this._tagline}" >
                <article class="photographer">
                    <img class="photographer_img" src="${this.picture}" alt="Photographie de profil de ${this._name}">
                    <h2 class="photographer_name">${this._name}</h2>
                    <p class="photographer_localization">${this.localization}</p>
                    <p class="photographer_tagline">${this._tagline}</p>
                    <p class="photographer_price">${this._price}€/jour</p>
                    <ul class="photographer_taglist">${this._tags.map(tag => `<li class="photographer_tag">#${tag}</li>`).join('')}</ul>
                </article>
            </a>`
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
