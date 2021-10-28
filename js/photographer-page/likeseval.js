export default class AddRemoveLikes {
    constructor () {
        let contentMedias = document.getElementById('photographer-work-examples');

        contentMedias.addEventListener('click', (el) => {
            let classTargeted = typeof el.target.classList === 'undefined' ? [] : el.target.classList.value.split(' ');
            let classButton = classTargeted.indexOf('heart-button') !== -1 // add 'heart-button' for 'fa-heart' in gallery files
            if (classButton) {
                let likesTotal = parseInt(document.getElementById('likes-total-count').innerHTML); // add likes-total-count in showMediaBuilder with creating likes box template
                let likesCount = el.target.parentNode.firstElementChild.firstElementChild; // check if it's the right path, estimated in my spirit so not sure
                let likesValues = parseInt(likesCount.innerHTML);
                let liked = classTargeted.indexOf('liked') !== -1;

                document.getElementById('likes-total-count').innerHTML = liked ? --likesTotal : ++likesTotal;
                likesCount.innerHTML = liked ? --likesValues : ++likesValues;

                if (liked) {
                    el.target.classList.remove('liked');
                    el.target.classList.replace('fas', 'far');
                } else {
                    el.target.classList.add('liked');
                    el.target.classList.replace('far', 'fas');
                };
            };
        });
    };
};