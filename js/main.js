// IMPORT DATAS
import fishEyeApi from "./fisheyeapi.js";

// IMPORT HOMEPAGE BUILDER
import homepageBuilder from "./homepage/homepageBuilder.js";

// IMPORT PROFILE PAGE BUILDER ELEMENTS


// FUNCTION TO DISPATCH ELEMENTS FOR EACH PHOTOGRAPHERS 
(function apiDispatch() {
    new fishEyeApi().extractDataFishEyeApi().then((json) => {
        new homepageBuilder().showPhotographers(json);
    }).catch(() => {
        console.error('fishEyeApi loading has failed');
    });
})();