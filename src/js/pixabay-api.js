import axios from "axios"
import { PIXABAY_API_KEY, PIXABAY_API_PER_PAGE } from "./settings"
axios.defaults.baseURL = "https://pixabay.com/api/"
export const getImagesByQuery = async (query, page) => {
	const response = await axios
		.get("", {
			params: {
				key: PIXABAY_API_KEY,
				q: query,
				page,
				per_page: PIXABAY_API_PER_PAGE,
				image_type: "photo",
				orientation: "horizontal",
				safesearch: true,
			},
		})
	return response.data
}
