// EXTRACT DATA FROM FISHEYEDATA.JSON - TWO CATEGORIES: PHOTOGRAPHERS & MEDIAS
export default class FishEyeApi {
    async grabDatasApi () {
        const url = './FishEyeApi/FishEyeData.json'
        let dataReturn = await fetch(url);
        let datas = await dataReturn.json();

        const datasPhotographer = [...datas.photographers];
        const datasMedia = [...datas.media];

        return {
            'photographers': datasPhotographer,
            'media': datasMedia
        };
    };
};