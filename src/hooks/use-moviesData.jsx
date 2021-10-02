import { useCallback, useEffect, useState } from 'react';
import { API_KEY } from '../API_KEY';

export const useShows = (url, query) => {
  const [shows, setShows] = useState([]);
  if (!query) query = '';
  const fetchData = useCallback(async () => {
    const movieUrl = `https://api.themoviedb.org/3${url}&${API_KEY}`;
    const data = await fetch(movieUrl);
    const response = await data.json();
    setShows(response.results);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { shows };
};

export const useGenere = (url) => {
  const [genre, setGenre] = useState([]);
  const [loading, setLoading] = useState();
  const fetchGenere = useCallback(async () => {
    try {
      setLoading(true);
      const genreTypeUrl = `https://api.themoviedb.org/3${url}${API_KEY}&language=en-US`;
      const data = await fetch(genreTypeUrl);
      const response = await data.json();
      setGenre(response.genres);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchGenere();
  }, [fetchGenere]);

  return { genre, loading };
};
export const useDeatils = (url) => {
  const [detail, setDeatil] = useState([]);
  const fetchGenere = useCallback(async () => {
    const detailUrl = `https://api.themoviedb.org/3${url}?${API_KEY}&language=en-US&page=1`;
    const data = await fetch(detailUrl);
    const response = await data.json();

    setDeatil(response);
  }, [url]);

  useEffect(() => {
    fetchGenere();
  }, [fetchGenere]);

  return { detail };
};

export const useTrailor = (path) => {
  const [trailor, setTrailor] = useState([]);
  // const [loading, setLoading] = useState(false);
  const fetchTrailor = useCallback(async () => {
    try {
      // setLoading(true);
      const url = `https://api.themoviedb.org/3${path}?${API_KEY}&language=en-US`;
      const data = await fetch(url);
      const response = await data.json();
      setTrailor(response.results);
      // setLoading(false);
    } catch (e) {
      // setLoading(false);
    }
  }, [path]);

  useEffect(() => {
    fetchTrailor();
  }, [fetchTrailor]);

  return { trailor };
};
