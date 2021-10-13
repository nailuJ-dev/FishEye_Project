// EXTRACT DATA FROM FISHEYEDATA.JSON - TWO CATEGORIES: PHOTOGRAPHERS & MEDIAS
export default class fishEyeApi {
    async extractDataFishEyeApi() {
        let pathway = './FishEyeApi/FishEyeData.json';
        let res = await fetch(pathway);
        let json = await res.json();

        const dataPhotographers = [...json.photographers];
        const dataMedias = [...json.media];

        return {
            'photographers': dataPhotographers,
            'media': dataMedias
        };
    };
};