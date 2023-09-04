import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, method = 'GET', postData = null) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true); // Set loading to true when a new request is initiated.

		const axiosConfig = {
			method,
			url,
			data: postData, // Include the request body for POST requests.
		};

		axios(axiosConfig)
			.then((response) => {
				setData(response.data);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	}, [url, method, postData]);

	return [data, loading];
};

export default useFetch;
