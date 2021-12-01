import scrollBtn from './scrollButton.js';
import FishEyeApi from '../fisheyeapi.js';


// SHOW ALL PHOTOGRAPHERS FOR HOMEPAGE
export default class PageBuilder {
    showPhotographers (data) {
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
        scrollBtn();
    };
};