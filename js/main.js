// IMPORT DATAS
import FishEyeApi from './fisheyeapi.js';

// IMPORT PAGEBUILDER
import PageBuilder from './builders/pageBuilder.js';

// IMPORT PHOTOGRAPHERS' PAGES ELEMENTS
import ProfilePhotographers from 
import DropMenu from
import BuilderMediaPhoto from 

// DISPATCH DATAS
(function initApiDispatch () {
    new FishEyeApi().grabDatasApi().then((datas) => {
        if (window.location.pathname.includes('./photographer-page.html')) {
            new ProfilePhotographers().showProfilePhotographers(datas);
            new DropMenu().dropDownMenu(datas);
            new BuilderMediaPhoto().photoMedia(datas);
        }
        new PageBuilder().showPhotographers(datas);
    }).catch(() => {
        console.error('Failure in loading FishEyeApi datas');
    });
})();