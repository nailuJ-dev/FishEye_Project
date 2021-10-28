import Filter from './filters.js';
import ScrollButton from './scrollButton.js';

// SHOW ALL PHOTOGRAPHERS FOR HOMEPAGE
export default class PageBuilder {
    showPhotographers(datas) {
        let photographers = datas.photographers;
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
            photographersArticle.innerHTML = modelPhotographerCard;
        });
        new Filter().filterActived();
        new ScrollButton().scrollBtn();
    };
};