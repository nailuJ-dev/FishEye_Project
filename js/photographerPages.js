// import ScrollButton from './builders/scrollButton.js';
import FishEyeApi from './fisheyeapi.js';
import ShowPhotographers from './builders/photographerPageBuilder.js';
import Modal from './photographer-page/modal.js';
import ContactForm from './photographer-page/form.js';
import GalleryLightbox from './utils/galleryLightbox.js';
import MediaContentBuilder from './builders/mediaContent.js';

/*
async function displayPhotgrapherPage() {
    const api = new FishEyeApi();
    await api.grabDatasApi().then((datas) => {
        const photographerDatas = datas.photographers
        const id = window.location.search.split('id=')[1];
        const photographers = !id ? photographerDatas : photographerDatas.filter(photographer => photographer.id === id);
        const sectionPhotographerProfil = document.getElementById('photographer-page_header-section');
        console.log(photographers)
        const templatePhotographerProfil = `
            <div class="photographer-page_header">
                <div class="photographer-page_header_content">
                    <h1 class="photographer-page_header_content_title">${photographers.name}</h1>
                    <p class="photographer-page_header_content_localization">${photographers.localization}</p>
                    <p class="photographer-page_header_content_tagline">${photographers.tagline}</p>
                    <ul class="photographer-page_header_content_taglist">${photographers.tags.map(tag => `<li href="../index.html" class="photographer-page__header__content__tags">#${tag}</li>`).join(" ")}</ul>
                </div>
                <button class="photographer-page_contact_button focus_element-secondary" onclick="displayPhotographerModale()" aria-label="Contacter le photographe ${this.name}">Contactez-moi
                </button>
                <img src="${photographers.picture}" class="photographer-page_header_photo" alt="Photographie de profil de ${photographers.name}">
            </div>
            `
        sectionPhotographerProfil.innerHTML = templatePhotographerProfil;
        new Modal().modal(photographerDatas);
        new ContactForm().formFields();
    });
}(); */


const elementContentGallery = document.querySelector('.photographer-page_gallery');

// Filter content of media gallery with selected parameters
const filterByCriterias = (contentMedia, filter) => {
    switch(filter) {
        case 'popularity':
            return contentMedia.sort((a, b) => {
                return b.likes - a.likes;
            });
        case 'date':
            return contentMedia.sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
        });
        case 'title':
            return contentMedia.sort((a, b) => a.title.localeCompare(b.title));
        default:
            return contentMedia.sort((a, b) => {
                return b.likes - a.likes;
            });
    };
};

function updateContentMedia(contentGallery) {
    contentGallery.forEach((media) => {
        let medias = new MediaContentBuilder(media);
        elementContentGallery.innerHTML = medias.createHtmlContent()
    });
}

// Show photographer datas with photographer ID

async function showPhotographerDatas() {
    const api = new FishEyeApi();
    const { media, photographers } = await api.grabDatasApi()
    const parameters = new URLSearchParams(document.location.search.substring(1));
    const ident = parameters.get('id');
    const photographerDatasSelected = photographers.find((photographer) => photographer.id == ident);
    console.log(photographerDatasSelected)

/*    const photographerBuilder = new ShowPhotographers(photographerDatasSelected);
    photographerBuilder.documentTitle(); */

/*
    const contentMedia = media.filter((media) => media.photographerId == ident)
    updateContentMedia(contentMedia);
*/
    document.addEventListener('change', function (event) {
        elementContentGallery.innerHTML = '';
        const filter = filterByCriterias(contentMedia, event.target.value);
        updateContentMedia(filter);
        GalleryLightbox.init();
    })

    const photographerHeader = document.querySelector('.photographer-page_header-section');
	const photographerFooter = document.querySelector('.photographer-page_footer-section');
    console.log(new ShowPhotographers(photographerDatasSelected).userHeader)
	photographerHeader.innerHTML += new ShowPhotographers(photographerDatasSelected).userHeader;
	photographerFooter.innerHTML += new ShowPhotographers(photographerDatasSelected).userFooter;
};

const init = async () => {
    await showPhotographerDatas();
    // GalleryLightbox.init()
};

init();
