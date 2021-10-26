// EXTRACT DATA FROM FISHEYEDATA.JSON - TWO CATEGORIES: PHOTOGRAPHERS & MEDIAS
const grabDatas = () => fetch('./FishEyeApi/FishEyeData.json').then(response => response.json()).catch(err => console.log("An error occurs when we try to fetch photographers' datas from json", err));
