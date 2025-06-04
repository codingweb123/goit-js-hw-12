import { clearGallery } from "./js/render-functions"
import { getQuery, loadData, resetPage } from "./js/helpers"
const form = document.querySelector(".form"),
	loadMore = document.querySelector(".gallery .more")
form.addEventListener("submit", e => {
	e.preventDefault()
	const query = getQuery(e.target)
	if (!query) return
	resetPage()
	clearGallery()
	loadData(query)
})
loadMore.addEventListener("click", e => {
	e.preventDefault()
	const query = getQuery(form)
	if (!query) return
	loadData(query)
})
