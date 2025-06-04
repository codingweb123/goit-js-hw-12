import { getImagesByQuery } from "./js/pixabay-api"
import {
	clearGallery,
	createGallery,
	showLoader,
	hideLoader,
	showLoadMoreButton,
	hideLoadMoreButton,
} from "./js/render-functions"
import { PIXABAY_API_PER_PAGE } from "./js/settings"
import iziToast from "izitoast"
import "izitoast/dist/css/iziToast.min.css"
const form = document.querySelector(".form"),
	loadMore = document.querySelector(".gallery .more"),
	gallery = document.querySelector(".gallery")
let page = 1
form.addEventListener("submit", e => {
	e.preventDefault()
	const query = getQuery(e.target)
	if (!query) return
	page = 1
	clearGallery()
	loadData(query)
})
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
const loadData = query => {
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
loadMore.addEventListener("click", e => {
	e.preventDefault()
	const query = getQuery(form)
	if (!query) return
	loadData(query)
})
