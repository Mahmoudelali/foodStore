import axios from 'axios';

class BackendManager {
	static getInstance() {
		if (!this.instance) {
			this.instance = new BackendManager();
		}
		return this.instance;
	}

	parseGetParams(params) {
		if (params) {
			let arrayOfParams = [];
			for (let key in params) {
				arrayOfParams.push(key + '=' + params[key]);
			}
			if (arrayOfParams.length) return '?' + arrayOfParams.join('&');
		}
		return '';
	}

	getBaseURL() {
		return 'http://127.0.0.1:8000/';
	}

	async getRequest(path, queries, payload, headers) {
		var url = this.getBaseURL() + this.parseGetParams(queries);
		let response = await axios.get(url + path, payload, headers);
		let data = response.data;
	}
}
