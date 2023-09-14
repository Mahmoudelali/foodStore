import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);

		axios
			.get(url)
			.then((response) => {
				setData(response.data);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	}, [url]);

	return [data, loading, setData, setLoading];
};

export default useFetch;
