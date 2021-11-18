export default class GalleryLightbox {
    static init() {
		const galleryPart = document.querySelector('.photographer-page_gallery');
		const linksArr = Array.from(galleryPart.querySelectorAll('img[src$=".jpg"],source[src$=".mp4"]'));
		const galleryContent = linksArr.map((linkArr) => linkArr.getAttribute('src'));
		linksArr.forEach((linkArr) => {
			linkArr.addEventListener('click', (el) => {
				el.preventDefault();
				new GalleryLightbox(e.currentTarget.getAttribute('src'), galleryContent);
			});
			linkArr.addEventListener('keyup', (el) => {
				if (el.keyCode === 13) {
					el.preventDefault();
					new GalleryLightbox(e.currentTarget.getAttribute('src'), galleryContent);
				} else {
					return;
				};
			});
		});
	};

 // alt deleted if no description added in json
    constructor (url, gallery, alt) {
		this.element = this.buildHtmlDom(url, alt);
		this.gallery = gallery;
		this.loadContent(url, alt, gallery);
		this.formatSrcContentLightbox(url);
		this.onKeyup = this.onKeyup.bind(this);
		document.body.appendChild(this.element);
		document.addEventListener('keyup', this.onKeyup);
	};

	formatSrcContentLightbox(src) {
		let lightboxContentLink = src.split('/');
		lightboxContentLink.splice(4, 0, 'lightbox');
		const formatedLightboxContentLink = lightboxContentLink.join('/');
		return formatedLightboxContentLink;
	};

    loadContent(url, alt) {
		this.url = url;
		this.alt = alt;
		if (url.endsWith('.mp4')) {
			const video = document.createElement('video');
			const wrapper = this.element.querySelector('.lightbox_container');
			const desc = document.createElement('p');
			desc.innerHTML += this.getFormatedTitle(url);
			wrapper.innerHTML = '';
			wrapper.appendChild(video);
			wrapper.appendChild(desc);
			video.setAttribute('controls', '');
			video.src = url;
		} else if (url.endsWith('.jpg')) {
			const image = new Image();
			const wrapper = this.element.querySelector('.lightbox_container');
			const desc = document.createElement('p');
			desc.innerHTML += this.getFormatedTitle(url);
			wrapper.innerHTML = "";
			wrapper.appendChild(image);
			wrapper.appendChild(desc);
			image.alt = this.getFormatTitle(url);
			image.src = this.formatSrcContentLightbox(url);
			image.classList.add('lightbox_container_img');
		};
	};

    getFormatTitle(path) {
		const splitedPath = path.split("/");
		const string = splitedPath[splitedPath.length - 1].split(".")[0];
		const formatedTitle = string.replaceAll("_", " ");
		return formatedTitle;
	};

    onKeyup (el) {
		if (el.key === 'Escape') {
			this.close(el);
		} else if (el.key === 'ArrowLeft') {
			this.next(el);
		} else if (el.key === 'ArrowRight') {
			this.previous(el);
		};
	};

    close(el) {
		el.preventDefault();
		this.element.classList.add('fadeOut');
		window.setTimeout(() => {
			this.element.parentElement.removeChild(this.element);
		}, 500);
		document.removeEventListener('keyup', this.onKeyup);
	};

    next(el) {
		el.preventDefault();
		let i = this.gallery.findIndex((image) => image === this.url);
		if (i === this.gallery.length - 1) {
			i = -1;
		}
		this.loadContent(this.gallery[i + 1]);
	};

    previous(el) {
		el.preventDefault();
		let i = this.gallery.findIndex((image) => image === this.url);
		if (i === 0) {
			i = this.gallery.length;
		}
		this.loadContent(this.gallery[i - 1]);
	};

    buildHtmlDom() {
		const htmlDom = document.createElement('div');
		htmlDom.classList.add('lightbox');
		htmlDom.innerHTML = `
    <button class="lightbox_close" aria-label="Close content window">Fermer</button>
    <button class="lightbox_next" aria-label="Next media">Suivant</button>
    <button class="lightbox_previous" aria-label="Previous media">Précédent</button>
    <div class="lightbox_container" role="dialog" aria-label="">
    <p class="lightbox_container_img-title"></p>
    </div>`;
        htmlDom.querySelector('.lightbox_close').addEventListener('click', this.close.bind(this));
        htmlDom.querySelector('.lightbox_next').addEventListener('click', this.next.bind(this));
        htmlDom.querySelector('.lightbox_previous').addEventListener('click', this.previous.bind(this));
		return htmlDom;
	}
};