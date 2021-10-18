// Function for filter's tags
export default class filter {
    // Get filters activated
    filterActived() {
        let getFilters = document.querySelector('ul');
        let articlePart = document.querySelectorAll('.articlePartPhotographers');

        // Events on click li elements
        getFilters.addEventListener('click', event => {
            let classValue = event.target.classList.value;
            if (classValue.indexOf('activated')) {
                event.target.classList.add('activated')
            } else {
                event.target.classList.remove('activated')
            }
            this.sortingDomArticles(articlePart);
        });
    };

    // Grab filters with activated class and place its in an array
    getActivatedFilters() {
        let activatedFilters = document.querySelectorAll('ul li.activated');
        let filtersActivated = [];
        activatedFilters.forEach(function (selectedFilters) {
            filtersActivated.push(selectedFilters.getAttribute('data-filter'));
        });
        return filtersActivated;
    };

    // Check if filter = article class
    checkAllFilters(article) {
        let filters = this.getActivatedFilters();
        let classValues = article.classList.value;
        let tagSelected = classValues.split(' ');
        let crossCheck = filters.filter(value => tagSelected.includes(value));
        return filters.length == crossCheck.length;
    };

    // Show and Hide articles
    sortingDomArticles(articlePart) {
        articlePart.forEach((article) => {
            if (this.checkAllFilters(article)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    };
};
