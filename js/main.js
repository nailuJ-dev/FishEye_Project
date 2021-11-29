// IMPORT DATAS
import FishEyeApi from './fisheyeapi.js';

// IMPORT PAGEBUILDER
import PageBuilder from './builders/homepageBuilder.js';

(async () => {
    const api = new FishEyeApi();
    await api.grabDatasApi().then((data) => {
        const photographerList = data.photographers
        new PageBuilder().showPhotographers(photographerList);
        const listTags = document.querySelector('ul');
        const getFilters = listTags.querySelectorAll('li');
        getFilters.forEach((tag) => {
            tag.addEventListener('click', function () {
                const filteredPhotographersbyTags = photographerList.filter(photographer => photographer.tags.includes(tag.innerText.substring(1).toLowerCase()));
                new PageBuilder().showPhotographers(filteredPhotographersbyTags);
            });
        });

    })
})();
