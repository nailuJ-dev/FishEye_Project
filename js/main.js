// IMPORT DATAS
import FishEyeApi from './fisheyeapi.js';

// IMPORT PAGEBUILDER
import PageBuilder from './builders/pageBuilder.js';

// IMPORT PHOTOGRAPHERS' PAGES ELEMENTS
import ProfilePhotographers from './photographer-page/profileCardPhotographer.js'
import DropMenu from './photographer-page/dropmenu.js';

// DISPATCH DATAS
/*(async () => {
    const api = new FishEyeApi();
     await api.grabDatasApi().then((datas) => {
        if (window.location.pathname.includes('./photographers.html')) {
            const profile = new ProfilePhotographers()
            const downMenu = new DropMenu()
            const buildMedias = new BuilderMediaPhoto()
            profile.showProfilePhotographers(datas);
            downMenu.dropDownMenu(datas);
            buildMedias.photoMedia(datas);
        }
        new PageBuilder().showPhotographers(datas);
    }).catch(() => {
        console.error('Failure in loading FishEyeApi datas');
    });
})(); */

/* const filterByTag = async (tag, photographers) => {
    if (tag in photographers.tags) {
        return photographers.filter((photographer) => photographer.tags.includes(tag));
    } else {
        return photographers;
    };
};*/

(async () => {
    const api = new FishEyeApi();
    await api.grabDatasApi().then((datas) => {
        const photographerList = datas.photographers
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
