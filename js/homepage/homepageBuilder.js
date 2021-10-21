// IMPORT OTHERS FUTURE ELEMENTS (FILTERS & SCROLL BUTTON)

import filter from "./filters.js";
import scrollButton from "./scrollButton.js";

// DISPLAY PHOTOGRAPHERS
export default class homepageBuilder {

    // Create photographers section in html index, call function for filters and feature button
    showPhotographers(json) {
        let photographers = json.photographers;
        photographers.map(photograph => {
            let sectionPartPhotographers = document.getElementById('photographers');
            let articlePartPhotographers = document.createElement('article');
            articlePartPhotographers.className = photograph.tags.join(' ') + ' articlePhoto';

            let templateModelPhotographer = () => {
                console.log("génial")
                return ( `
                <a href='photographer-page.html?id={photograph.id}' title='{photograph.name}'>
                    <img src='{photograph.portrait}' alt='{photograph.alt}'>
                    <h2 class='name>{photograph.name}</h2>
                </a>
                <p class='location'>{photograph.city}, {photograph.country}</p>
                <p class='tagline'>{photograph.tagline}</p>
                <p class='price'>{photograph.price}€/jour</p>
                <ul class='filters'>{photograph.tags.map(function (tag) => '<li data-filter='{tag}'>' + '#{tag}' + '</li>').join(' ')}</ul> `
            )};
            
            sectionPartPhotographers.appendChild(articlePartPhotographers);
            articlePartPhotographers.innerHTML = templateModelPhotographer;
        })
        new scrollButton().scrollBtn();
        new filter().filterActived();
    }
}