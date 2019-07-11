import apisauce from "apisauce"

// define the api

const create = () => {
	const apiPlayground = apisauce.create({
		baseURL: "https://api.github.com",
		headers: { Accept: "application/vnd.github.v3+json" }
	})

	const apiWeather = apisauce.create({
		baseURL: "http://api.openweathermap.org"
	})

	const getUser = () => {
		return apiPlayground.get(`/users/irfanrosly`)
	}

	const getWeather = () => {
		return apiWeather.get(
			`/data/2.5/forecast?q=Singapore&APPID=4b8ec7537dddbc6fec21aca73d96d6e2&mode=json`
		)
	}

	return {
		getUser,
		getWeather
	}
}

export default { create }
