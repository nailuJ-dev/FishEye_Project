// Function for filter's tags
export default class Filter {
    // Get filters activated
    filterActived() {
        let getFilters = document.querySelector('ul');
        let articlePart = document.querySelectorAll('.photographerArticle');

        // Events on click li elements
        getFilters.addEventListener('click', event => {
            console.log('merde')
            let classValue = event.target.classList.value;
            console.log('yes')
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
        let activatedFilters = document.querySelectorAll('li .activated');
        let filtersActivated = [];
        activatedFilters.forEach(function (activatedFilter) {
            filtersActivated.push(activatedFilter.getAttribute('data-filter'));
        });
        return filtersActivated;
    };

    // Check if filter = article class
    // Do it with 'if tags in filtersActivated ... re-use this filters.filter(value => tagSelected.includes(value)) for a function 
    checkAllFilters(article) {
        let filters = this.getActivatedFilters();
        let classValues = article.classList.value;
        let tagSelected = classValues.split(' ');
        let crossCheck = filters.filter(value => tagSelected.includes(value));
        return filters.length === crossCheck.length;
    };

    // Show and Hide articles
    // Do it with a function that includes upper comments  with a forEach loop and the keyboard binding Enter
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
