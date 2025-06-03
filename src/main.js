import { getImagesByQuery } from "./js/pixabay-api"
import {
	clearGallery,
	createGallery,
	showLoader,
	hideLoader,
} from "./js/render-functions"
import iziToast from "izitoast"
import "izitoast/dist/css/iziToast.min.css"
const form = document.querySelector(".form")
form.addEventListener("submit", e => {
	e.preventDefault()
	const query = e.target.elements["search-text"].value.trim() ?? ""
	if (query === "") {
		iziToast.error({
			title: "Error!",
			message: "Failed to load images",
		})
		return
	}
	clearGallery()
	showLoader()
	getImagesByQuery(query)
		.then(data => {
			if (data.hits.length > 0) {
				createGallery(data.hits)
			} else {
				iziToast.error({
					title: "Error!",
					message:
						"Sorry, there are no images matching your search query. Please try again!",
				})
			}
		})
		.catch(() => {
			iziToast.error({
				title: "Error!",
				message: "Failed to load images",
			})
		})
		.finally(hideLoader)
})
