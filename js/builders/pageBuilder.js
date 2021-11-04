export default class ShowPhotographers {
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
            <a href="pages/photographer-page.html?id=${this._id}" tabindex="10" class="focus__element" aria-label="Aller sur la page de ${this._name} basé à ${this.localization} sont tarif journalier est de ${this._price} euro par jour. Sa spécialité est ${this._tags} et sa devise ${this._tagline}" >
                <article class="photographer">
                    <img class="photographer__img" src="${this.picture}" alt="Photographie de profil de ${this._name}">
                    <h2 class="photographer__name">${this._name}</h2>
                    <p class="photographer__localization">${this.localization}</p>
                    <p class="photographer__tagline">${this._tagline}</p>
                    <p class="photographer__price">${this._price}€/jour</p>
                    <ul class="photographer__taglist">${this._tags.map(tag => `<li class="photographer__tag">#${tag}</li>`).join('')}</ul>
                </article>
            </a>`
    };

    get profileHeader () {
        return `
        <div class="photographer-page__header">
             <div class="photographer-page__header__content">
                 <h1 class="photographer-page__header__content__title">${this._name}</h1>
                 <p class="photographer-page__header__content__localization">${this.localization}</p>
                 <p class="photographer-page__header__content__tagline">${this._tagline}</p>
                 <ul class="photographer-page__header__content__taglist">${this._tags.map(tag => `<li href="../index.html" class="photographer-page__header__content__tags">#${tag}</li>`).join(" ")}</ul>
             </div>
             <button class="photographer-page__contact__button focus__element-secondary" tabindex="3" onclick="displayPhotographerModale()" aria-label="Contacter le photographe ${this._name}">Contactez-moi
             </button>
             <img src="${this.picture}" class="photographer-page__header__photo" alt="Photographie de profil de ${this._name}">
         </div> 
         `
     };

     get profileFooter () {
        return `
        <section class="photographer-page__footer">
            <aside class="photographer-page__footer__aside">
            <p class="photographer-page__footer__aside__total-likes" aria-label="Nombre total de j'aime ${this.userReloadLikes}" tabindex="6">${this.userReloadLikes}</p>
            <i class="fas fa-heart" aria-hidden="true"></i>
            </aside>
            <p class="photographer-page__footer__price" tabindex="7" aria-label="Tarif du photographe ${this._price} euro par jour">${this._price}€/jour</p>
        </section>
        `
    };
};
