// IMPORT DATAS
const grabDatas = async () => await fetch('./FishEyeApi/FishEyeData.json').then(response => response.json()).catch(err => console.log("An error occurs when we try to fetch photographers' datas from json", err));

// CREATE PHOTOGRAPHERS PARTS IN HTML INDEX
const showDataPhotographer = async (photographers) => {
    const elements = document.querySelector('.photographers_part');
    elements.innerHTML = '';
    photographers.forEach((photographer) => {
        let photographersModelCard = new PhotographerCard(photographer);
        elements.innerHTML += photographersModelCard.userCards;
    });
};

// TO FILTER PHOTOGRAPHERS ARRAY BY TAGS
const sortByTags = (tag, photographers) => {
    if (tag === 'all') {
        return photographers;
    } else {
        return photographers.filter((photographer) => photographer.tags.includes(tag));
    }
};

// DISPATCH DATAS & FILTER FOR SELECTED TAGS
const initApiDispatch = async () => {
    const filtersNavList = document.querySelector('.filters_navlist');
    const tags = filtersNavList.querySelectorAll('li');
    const { photographers } = await grabDatas();
    tags.forEach((tag) => {
        tag.addEventListener('click', function () {
            const sortedPhotographer = sortByTags(
                tag.textContent.replace(/(\s|\#)+/g, '').toLowerCase(), photographers
            );
            showDataPhotographer(sortedPhotographer);
        });
        tag.addEventListener('keypress', function (el) {
            if (el.key === 'Enter') {
                const sortedPhotographer = sortByTags(
                    tag.textContent.replace(/(\s|\#)+/g, '').toLowerCase(), photographers
                );
                grabDatas(sortedPhotographer);
            };
        });
    });
    grabDatas(photographers);
};

initApiDispatch();