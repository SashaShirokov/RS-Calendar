import axios from 'axios';

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=bb09834647ad2a3325787608de50b536&units=metric";

// bb09834647ad2a3325787608de50b536

module.exports = {
	getTemp: function(city) {
		var encodedCity = encodeURIComponent(city);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedCity}`;

		return axios.get(requestUrl).then(function(res) {
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function(res) {
			// throw new Error(res.response.data.message);
			throw new Error("Unable to fetch weather for that location.");
		});
	}
}
