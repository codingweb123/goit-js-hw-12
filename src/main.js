import { clearGallery } from "./js/render-functions"
import { getQuery, loadData, resetPage } from "./js/helpers"
const form = document.querySelector(".form"),
	loadMore = document.querySelector(".gallery .more")
form.addEventListener("submit", async e => {
	e.preventDefault()
	const query = getQuery(e.target)
	if (!query) return
	resetPage()
	clearGallery()
	await loadData(query)
})
loadMore.addEventListener("click", async e => {
	e.preventDefault()
	const query = getQuery(form)
	if (!query) return
	await loadData(query)
})
