import Modal from './modal.js';
import ContactForm from './form.js';

export default class ProfilePhotographers {
    showProfilePhotographers(datas) {
        let photographerDatas = datas.photographers;
        const elementId = window.location.search.split('id=')[1];
        const photographers = !elementId ? photographerDatas : photographerDatas.filter(photograph => photograph.elementId === elementId);
        const photographerProfilePart = document.getElementById('photographer-profile-header')
        const modelPhotographerProfileCard = `
        <article aria-label="Photographer Profile" class="photographers-profile-card">
            <div class='photographers-infos'>
                <h2>${photographers[0].name}</h2>
                <p class="photographers-city">${photographers[0].city}, ${photographers[0].country}</p>
                <p class="photographers-tagline">${photographers[0].tagline}</p>
                <p >${photographers[0].tags.map(tag => `<a class="photographers-tags" href="index.html">#${tag}</a>`).join(" ")}</p>
            </div>
            <button id="photographers-contact" title='Contact Me'>Contactez-moi</button>
            <a href='#' title='${photographers[0].alt}'><img src="${photographers[0].portrait}" alt="${photographers[0].alt}"></a>
        </article>
        `
        photographerProfilePart.innerHTML = modelPhotographerProfileCard;
        new Modal().modal(photographerDatas);
        new ContactForm().formFields(); // add this name in form.js
    };
};
