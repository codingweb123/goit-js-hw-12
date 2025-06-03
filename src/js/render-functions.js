import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css"
const gallery = document.querySelector(".gallery"),
	loader = gallery.querySelector(".loader")
let globalLightbox
export const showLoader = () => {
	loader.innerHTML = "Loading images, please wait..."
	loader.classList.remove("visually-hidden")
}
export const hideLoader = () => loader.classList.add("visually-hidden")
export const clearGallery = () =>
	gallery.querySelectorAll(".gallery-item").forEach(i => i.remove())
export const createMarkup = ({
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
export const createGallery = images => {
	const itemsMarkup = images.reduce(
		(acc, item) => (acc += createMarkup(item)),
		""
	)
	document
		.querySelector(".gallery")
		.insertAdjacentHTML("beforeend", itemsMarkup)
	if (!globalLightbox) {
		globalLightbox = new SimpleLightbox(".gallery a", {
			captionsData: "alt",
			captionDelay: 250,
		})
	} else globalLightbox.refresh()
}
