import ShowPhotographers from './builders/pageBuilder.js';
// DISPATCH DATAS

const grabDatasApi = async () => await fetch('../FishEyeApi/photographers.json', { mode: 'no-cors' }).then((dataReturn) => dataReturn.json()).catch(() => console.error('Failure in loading FishEyeApi datas'));

const showDatas = async (photographers) => {
    const element = document.querySelector('.photographers_part');
    element.innerHTML = '';
    photographers.forEach((photographer) => {
        let photographerProfileCard = new ShowPhotographers(photographer);
        element.innerHTML += photographerProfileCard.userProfile;
    });
};

const filterByTag = async (tag, photographers) => {
    if (tag in photographers.tags) {
        return photographers.filter((photographer) => photographer.tags.includes(tag));
    } else {
        return photographers;
    };
};

const init = async () => {
    const listTags = document.querySelector('ul');
    const getFilters = listTags.querySelectorAll('li');
    const { photographers } = await showDatas();
    getFilters.forEach((tag) => {
        tag.addEventListener('click', function () {
            const sortedPhotogoraphers = filterByTag(tag.textContent.replace(/(\s|\#)+/g, '').toLowerCase(), photographers);
            showDatas(sortedPhotogoraphers)
        });
    });
    showDatas(photographers);
};

init();
