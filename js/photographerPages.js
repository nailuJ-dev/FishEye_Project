// import ScrollButton from './builders/scrollButton.js';
import FishEyeApi from './fisheyeapi.js';
import ShowPhotographers from './builders/photographerPageBuilder.js';

(async () => {
    const api = new FishEyeApi();
    await api.grabDatasApi().then((datas) => {
        const photographerDatas = datas.photographers
        const id = window.location.search.split('id=')[1];
        const photographers = !id ? photographerDatas : photographerDatas.filter(photographer => photographer.id === id);
        const sectionPhotographerProfil = document.getElementById('photographer-page_header-section');
        const templatePhotographerProfil = `
            <article aria-label="Photographer Profil" class="photographer-page_header">
                <div class='photographer-page_header_content'>
                    <h2>${photographers.name}</h2>
                    <p class="photographer-page_header_content_city">${photographers.city}, ${photographers.country}</p>
                    <p class="photographer-page_header_content_tagline">${photographers.tagline}</p>
                    <p >${photographers.tags.map(tag => `<a class="photographer-page_header_content_tags" href="index.html">#${tag}</a>`).join(" ")}</p>
                </div>
                <button class="photographer-page_contact" title='Contact Me'>Contactez-moi</button>
                <a href='#' title='${photographers.alt}'><img src="${photographers.portrait}" alt="${photographers.alt}"></a>
            </article>
            `
        sectionPhotographerProfil.innerHTML = templatePhotographerProfil;
        new Modal().modal(photographersData);
        new ContactForm().formFields();
    });
})();

/*
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
    const photographerDatasSelected = photographers.find((photographer) => photographer.id === ident);
    const photographerBuilder = new ShowPhotographers(photographerDatasSelected);
    photographerBuilder.document.title;

    const contentMedia = media.filter((media) => media.photographerId === ident)
    updateContentMedia(contentMedia);

    document.addEventListener('change', function (event) {
        elementContentGallery.innerHTML = '';
        const filter = filterByCriterias(contentMedia, event.target.value);
        updateContentMedia(filter);
        GalleryLightbox.init();
    })
};

const init = async () => {
    await showPhotographerDatas();
    GalleryLightbox.init()
};
*/