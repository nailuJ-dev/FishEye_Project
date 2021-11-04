// IMPORT DATAS
import FishEyeApi from './fisheyeapi.js';

// IMPORT PAGEBUILDER
import PageBuilder from './builders/pageBuilder.js';

// IMPORT PHOTOGRAPHERS' PAGES ELEMENTS
import ProfilePhotographers from './photographer-page/profileCardPhotographer.js'
import DropMenu from './photographer-page/dropmenu.js';

// DISPATCH DATAS
const showDatas = () => {
    const api = new FishEyeApi();
    api.grabDatasApi().then((datas) => {
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
};

const filterByTag = async (tag, photographers) => {
    return photographers.filter((photographer) => photographer.tags.includes(tag));
};

const init = () => {
    const listTags = document.querySelector('ul');
    const getFilters = listTags.querySelectorAll('li');
    let fishapi = new FishEyeApi();
    const { photographers } = fishapi.grabDatasApi();
    getFilters.forEach((tag) => {
        tag.addEventListener('click', function () {
            let sortedPhotogoraphers = filterByTag(tag.textContent.replace(/(\s|\#)+/g, '').toLowerCase(), photographers);
            showDatas(sortedPhotogoraphers)
        });
    });
    showDatas(photographers);
};

init();