// GET DATA & CREATE PHOTOGRAPHERS CARDS WITH THEM
class PhotographerCard {
    constructor (datas, choices) {
        this._id = datas.id
        this._city = datas.city
        this._country = datas.country
        this._name = datas.name
        this._picture = datas.portrait
        this._price = datas.price
        this._tagline = datas.tagline
        this._tags = datas.tags
        this._numberChoices = choices
    };

    get picture () {
        return `./media/Photographers_ID_Photos/${this._picture}`
    };

    get locate () {
        return `${this._city}, ${this._country}`
    };

    get docTitle () {
        document.title += ` - ${this._name}`
    };

    get userCards () {
        return `
            <a href="./photographer-page.html?id=${this._id}" class="select__element" aria-label="Accéder à la page de ${this._name} basé à {this.locate}. Son tarif journalier est de ${this._price} euros par jour. Sa spécialité : ${this._tags} Son leitmotiv : ${this._tagline}">
                <article class="photographer">
                    <img class="photographers__picture" src="${this._picture}" alt="Photo de profil de ${this._name}"></img>
                    <h2 class="photographers__name">${this._name}</h2>
                    <p class="photographers__locate">${this.locate}</p>
                    <p class="photographers__tagline">${this._tagline}</p>
                    <p class="photographers__price">${this._price}</p>
                    <ul class="photographers__taglist">${this._tags.map(tag => `<li class="photographers__tag">#${tag}</li>`).join('')}</ul>
                </article>
            </a>`
    };

    get profileHeader () {
        return `
        <div class="photographer-page__profile">
            <div class="photographer-page__header">
                <h1 class="photographer-page__profile__header__title">${this._name}</h1>
                <p class="photographer-page__profile__header__locate">${this.locate}</p>
                <p class="photographer-page__profile__header__tagline">${this._tagline}</p>
                <ul class="photographer-page__profile__header__taglist">${this._tags.map(tag => `<li href="./index.html" class="photographer-page__profile__header__tag">#${tag}</li>`).join(' ')}</ul>
            </div>
            <button class="photographer-page__profile__contact__button focus__element-secondary" onclick="displayModal()" aria-label="Contacter ${this._name}">Contactez-moi</button>
            <img src="${this.picture}" class="photographer-page__profile__header__photo" alt="Photo du profil de ${this._name}">
        </div> 
        `
    };

    get profileFooter () {
        return `
        <section class="photographer-page__profile__footer">
            <article class="photographer-page__profile__footer__article">
                <p class="photographer-page__profile__footer__article__total-likes" aria-label="Total de like ${this.newChoices}" tabindex="6">${this.newChoices}</p>
                <i class="fas fa-heart" aria-hidden="true"></i>
            </article>
            <p class="photographer-page__profile__footer__price" tabindex="7" aria-label="Tarif du photographe ${this._price} euros par jour">${this._price}€/jour</p>
        </section>
        `
    };

    get newChoices () {
        let totalChoicesCraft = document.querySelectorAll('.photographer-page__gallery__prod__footer__likes-count');
        let likesCounter = 0;
        totalChoicesCraft.forEach(function (likes) {
            let like = Number(likes.textContent)
            likesCounter += like
        });
        return likesCounter
    };
};
