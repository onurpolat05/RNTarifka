import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const {
        data: {categories: responseData},
      } = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return {error, data, loading};
};
export default useFetch;
