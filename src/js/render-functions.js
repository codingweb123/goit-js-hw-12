import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css"
const gallery = document.querySelector(".gallery"),
	loader = gallery.querySelector(".loader"),
	loadMore = gallery.querySelector(".more")
let globalLightbox
const showLoader = () => loader.classList.remove("visually-hidden")
const hideLoader = () => loader.classList.add("visually-hidden")
const showLoadMoreButton = () => loadMore.classList.remove("visually-hidden")
const hideLoadMoreButton = () => loadMore.classList.add("visually-hidden")
const clearGallery = () =>
	gallery.querySelectorAll(".gallery-item").forEach(i => i.remove())
const createMarkup = ({
	webformatURL,
	largeImageURL,
	tags,
	likes,
	views,
	comments,
	downloads,
}) => {
	return `
	<li class="gallery-item">
		<a href="${largeImageURL}">
			<img src="${webformatURL}" data-src="${largeImageURL}" alt="${tags}" />
		</a>
		<div class="info">
			<p>
				<b>Likes</b>
				${likes}
			</p>
			<p>
				<b>Views</b>
				${views}
			</p>
			<p>
				<b>Comments</b>
				${comments}
			</p>
			<p>
				<b>Downloads</b>
				${downloads}
			</p>
		</div>
	</li>
	`
}
const createGallery = images => {
	const itemsMarkup = images.reduce(
		(acc, item) => (acc += createMarkup(item)),
		""
	)
	gallery
		.querySelector(".helpers")
		.insertAdjacentHTML("beforebegin", itemsMarkup)
	if (!globalLightbox) {
		globalLightbox = new SimpleLightbox(".gallery a", {
			captionsData: "alt",
			captionDelay: 250,
		})
	} else globalLightbox.refresh()
}

export {
	showLoader,
	hideLoader,
	showLoadMoreButton,
	hideLoadMoreButton,
	clearGallery,
	createMarkup,
	createGallery,
}
