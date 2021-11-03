import ScrollButton from './scrollButton.js';

// FILTERS SELECTED

/* function onTagFilter = (tag, list) => {
    return list.filter((item) => item.tags.includes(tag));
};
let articlePart = document.querySelectorAll('.photographerArticle').innerHTML; */

function filterActived () {
    let articlePart = document.querySelectorAll('.photographerArticle');
    let listTags = document.querySelector('ul')
    let getFilters = listTags.querySelectorAll('li');
    console.log('merde')
    getFilters.addEventListener('click', onTagFilter (tag, list) => {
        return list.filter((item) => item.tags.includes(tag));
    })
    articlePart.innerHTML = list;
};

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
        new ScrollButton().scrollBtn();
    };
};
