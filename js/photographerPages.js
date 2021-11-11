// import ScrollButton from './builders/scrollButton.js';
import FishEyeApi from './fisheyeapi.js';
import ShowPhotographers from './builders/photographerPageBuilder.js';

/*
// SHOW ALL PHOTOGRAPHERS FOR HOMEPAGE
function showPhotographers (data) {
    document.getElementById('photographers_part').innerHTML = '';
    const photographers = data
    photographers.map(photograph => {
        let photographersPart = document.getElementById('photographers_part');
        let photographersArticle = document.createElement('article');
        photographersArticle.className = photograph.tags.join(' ') + ' photographerArticle';
        let modelPhotographerCard = `
            <a href="photographers.html?id=${photograph.id}" title="${photograph.name}">
                <img src="${photograph.portrait}" alt="${photograph.alt}">
                <h2 class="filter-name">${photograph.name}</h2>
            </a>
            <p class="filter-location">${photograph.city}, ${photograph.country}</p>
            <p class="filter-tagline">${photograph.tagline}</p>
            <p class="filter-price">${photograph.price}€/jour</p>
            <ul class="filter">${photograph.tags.map(tag =>
                `<li data-filter="${tag}">#${tag}</li>`).join(' ')}</ul> 
            `
        photographersPart.appendChild(photographersArticle);
        return (
            photographersArticle.innerHTML = modelPhotographerCard);
        });
    new ScrollButton().scrollBtn();
};
*/

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