// import ScrollButton from './builders/scrollButton.js';
import FishEyeApi from './fisheyeapi.js';
import ShowPhotographers from './builders/photographerPageBuilder.js';
import ContactForm from './photographer-page/form.js';
import GalleryLightbox from './utils/galleryLightbox.js';
import MediaContentBuilder from './builders/mediaContent.js';

const elementContentGallery = document.querySelector('.photographer-page_gallery');

// Filter content of media gallery with selected parameters
const filterByCriterias = (contentMedia, filter) => {
    switch (filter) {
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

function updateContentMedia (contentGallery) {
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
    const showPhotographer = new ShowPhotographers(photographerDatasSelected)
  
    showPhotographer.documentTitle;


	const contentMedia = media.filter((media) => media.photographerId === ident)
	updateContentMedia(contentMedia);
	
    document.addEventListener('change', function (event) {
	    elementContentGallery.innerHTML = '';
	    const filter = filterByCriterias(contentMedia, event.target.value);
	    updateContentMedia(filter);
	    GalleryLightbox.init();
    })

    const photographerHeader = document.querySelector('.photographer-page_header-section');
    const photographerFooter = document.querySelector('.photographer-page_footer-section');
    photographerHeader.innerHTML += showPhotographer.profileHeader();
    photographerFooter.innerHTML += showPhotographer.profileFooter();
};

const init = async () => {
    await showPhotographerDatas();
  // GalleryLightbox.init()
};

init();
