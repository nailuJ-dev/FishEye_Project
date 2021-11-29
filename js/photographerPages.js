// import ScrollButton from './builders/scrollButton.js';
import FishEyeApi from './fisheyeapi.js';
import ShowPhotographers from './builders/photographerPageBuilder.js';
import GalleryLightbox from './utils/galleryLightbox.js';
import { PhotographyContent, VideoContent } from './builders/mediaContent.js';
import modalCreationAndOpening from './utils/modal.js';

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
        const medias = media.image ? new PhotographyContent(media) : new VideoContent(media);
	    elementContentGallery.innerHTML += medias.createHtmlContent()
    });
}


// Show photographer datas with photographer ID

async function showPhotographerDatas() {
    const api = new FishEyeApi();
    const { media, photographers } = await api.grabDatasApi()
    const parameters = new URLSearchParams(document.location.search.substring(1));
    const ident = parameters.get('id');
    const photographerDatasSelected = photographers.find((photographer) => photographer.id == ident);
    const showPhotographer = new ShowPhotographers(photographerDatasSelected);
    showPhotographer.documentTitle;

	const contentMedia = media.filter((media) => media.photographerId == ident); // check for problem todisplay gallery
	updateContentMedia(contentMedia);
	
    document.addEventListener('change', function (event) {
	    elementContentGallery.innerHTML = '';
	    const filter = filterByCriterias(contentMedia, event.target.value);
	    updateContentMedia(filter);
	    GalleryLightbox.init();
    });

    const photographerHeader = document.querySelector('.photographer-page_header-section');
    const photographerFooter = document.querySelector('.photographer-page_footer-section');
    photographerHeader.innerHTML += showPhotographer.profileHeader();
    photographerFooter.innerHTML += showPhotographer.profileFooter();
    modalCreationAndOpening()
    const photographerName = document.getElementById('photographer-name-for-form');
    photographerName.innerHTML += showPhotographer.profileContact();
};

function getLikesStatus() {
    const likesPart = document.querySelectorAll('.photographer-page_gallery_media_footer_like-section');
    
    function likesReloader() {
        let countLikes = document.querySelector('.photographer-page_footer_aside_total-likes');
		let totalLikes= document.querySelectorAll('.photographer-page_gallery_media_footer_like-section-counter');
		let sumOfLikes = 0;
		totalLikes.forEach(function (like) {
			let likeAmount = Number(like.textContent)
			sumOfLikes += likeAmount;
		});
		countLikes.innerHTML = sumOfLikes;
		return sumOfLikes;
    };

    likesPart.forEach(function (e) {
		e.addEventListener('click', function () {
			let countElements = e.querySelector('.photographer-page_gallery_media_footer_like-section-counter');
			let buttonLike = e.querySelector('.photographer-page_gallery_media_footer_like-section-button');
			let iconButtonLike = e.querySelector('.fa-heart');
			let sumOfLike = Number(countElements.textContent);
			const liked = e.dataset.liked === 'true';
			e.dataset.liked = !liked;
			countElements.innerHTML = sumOfLike + (!liked ? 1 : -1);
			if (liked) {
				likesReloader();
				iconButtonLike.classList.add('far');
				iconButtonLike.classList.remove('fas');
				buttonLike.ariaLabel = "J'aime pas";
			} else if (!liked) {
				likesReloader();
				iconButtonLike.classList.add('fas');
				iconButtonLike.classList.remove('far');
				buttonLike.ariaLabel = "J'aime";
			}
		});
	});
};


const init = async () => {
    await showPhotographerDatas();
    getLikesStatus();
    GalleryLightbox.init()
};

init();
