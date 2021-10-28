// CREATE DROPMENU POPULARITY, DATE & TITLE

export default class DropMenu {
// OPEN & CLOSE MENU
    droppingMenu(datas) {
        let downOpen = document.getElementsByClassName('sorting-button');
        let upClose = document.getElementsByClassName('arrow-up-close');
        let hiddenDropList = document.getElementsByClassName('hidden-sorting-filter');

        if (downOpen) {
            downOpen[0].addEventListener('click', () => {
                hiddenDropList[0].style.display = 'block';
            });
            this.mediasSorted(datas);
        };
        if (upClose) {
            upClose[0].addEventListener('click', () => {
                hiddenDropList[0].style.display = 'none';
            });
        };
    };

// SORTING MEDIAS BY CRITERIAS
    mediasSorted(datas) {
        // extract medias from json, select element from html, create array to attribute an index to sort medias with it
    };

// SHOW SORTED MEDIAS WITH GALLERY (IMPORT GALLERY CLASS)
};