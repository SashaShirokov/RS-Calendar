import axios from 'axios';

const EVENTS_API = "http://128.199.53.150/events/";

module.exports = {
  passDescription(id) {
    let requestUrl = `${EVENTS_API}${id}`;

    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
        let data= {
          loc: res.data.location,
          start: res.data.start
        }
				return data;
			}
    }, function(res) {
      throw new Error(res.data.message);
    })
  }
}
