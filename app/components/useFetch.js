import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (url == null) return;
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err, url);
        setLoading(false);
      });
  }, [url]);

  const reFetch = async () => {
    if (url == null) return;
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err, url);
        setLoading(false);
      });
  };

  return [data, loading, setData, setLoading, reFetch];
};

export default useFetch;
