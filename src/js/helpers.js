import { getImagesByQuery } from "./pixabay-api"
import {
	createGallery,
	showLoader,
	hideLoader,
	showLoadMoreButton,
	hideLoadMoreButton,
} from "./render-functions"
import { PIXABAY_API_PER_PAGE } from "./settings"
import iziToast from "izitoast"
import "izitoast/dist/css/iziToast.min.css"
let page = 1
const gallery = document.querySelector(".gallery")
const resetPage = () => (page = 1)
const getQuery = target => {
	const query = target.elements["search-text"].value.trim() || ""
	if (!query) {
		iziToast.error({
			title: "Error!",
			message: "Failed to load images",
		})
		return false
	}
	return query
}
const loadData = async query => {
	hideLoadMoreButton()
	showLoader()
	getImagesByQuery(query, page)
		.then(({ hits, totalHits }) => {
			if (!hits.length) {
				iziToast.error({
					title: "Error!",
					message:
						"Sorry, there are no images matching your search query. Please try again!",
				})
				return
			}
			createGallery(hits)
			if (page * PIXABAY_API_PER_PAGE < totalHits) {
				page += 1
				showLoadMoreButton()
			} else {
				hideLoadMoreButton()
				iziToast.info({
					message: "We're sorry, but you've reached the end of search results.",
				})
			}
			scrollBy({
				top: -gallery.getBoundingClientRect().y * 2,
				behavior: "smooth",
			})
		})
		.catch(() => {
			iziToast.error({
				title: "Error!",
				message: "Failed to load images",
			})
		})
		.finally(hideLoader)
}
export { getQuery, loadData, resetPage }
