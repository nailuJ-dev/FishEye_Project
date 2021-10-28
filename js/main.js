// IMPORT DATAS
import FishEyeApi from './fisheyeapi.js';

// IMPORT PAGEBUILDER
import PageBuilder from './builders/pageBuilder.js';

// IMPORT PHOTOGRAPHERS' PAGES ELEMENTS
import ProfilePhotographers from './photographer-page/profileCardPhotographer.js'
import DropMenu from './photographer-page/dropmenu.js';


// DISPATCH DATAS
(() => {
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
})();