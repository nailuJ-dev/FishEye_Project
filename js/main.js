// IMPORT DATAS
import FishEyeApi from './fisheyeapi.js';

// IMPORT PAGEBUILDER
import PageBuilder from './builders/pageBuilder.js';

// IMPORT PHOTOGRAPHERS' PAGES ELEMENTS
import ProfilePhotographers from './photographer-page/profileCardPhotographer.js'


// DISPATCH DATAS
(function initApiDispatch () {
    new FishEyeApi().grabDatasApi().then((datas) => {
        if (window.location.pathname.includes('./photographers.html')) {
            new ProfilePhotographers().showProfilePhotographers(datas);
            new DropMenu().dropDownMenu(datas);
            new BuilderMediaPhoto().photoMedia(datas);
        }
        new PageBuilder().showPhotographers(datas);
    }).catch(() => {
        console.error('Failure in loading FishEyeApi datas');
    });
})();