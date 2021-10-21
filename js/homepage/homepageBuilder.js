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
                <a href='photographer-page.html?id={photographers.id}' title='{photographers.name}'>
                    <img src='{photographers.portrait}' alt='{photographers.alt}'>
                    <h2 class='name>{photographers.name}</h2>
                </a>
                <p class='location'>{photographers.city}, {photographers.country}</p>
                <p class='tagline'>{photographers.tagline}</p>
                <p class='price'>{photographers.price}€/jour</p>
                <ul class='filters'>{photographers.tags.map(function (tag) => '<li data-filter='{tag}'>' + '#{tag}' + '</li>').join(' ')}</ul> `
            )};
            
            sectionPartPhotographers.appendChild(articlePartPhotographers);
            articlePartPhotographers.innerHTML = templateModelPhotographer;
        })
        new scrollButton().scrollBtn();
        new filter().filterActived();
    }
}