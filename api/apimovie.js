import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_TMDB_API_KEY || "17502f7d08d06ce8147a188351508546";
const BASE_URL = "https://api.themoviedb.org/3";

const trendingMoviesEnpoint = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
const searchMoviesEnpoint = `${BASE_URL}/search/movie?api_key=${API_KEY}`;

const apiCall = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error al obtener películas:", error);
    return {};
  }
};

export const fetchTrendingMovies = () => {
  return apiCall(trendingMoviesEnpoint);
};

export const fetchSearchMovies = (params) => {
  return apiCall(searchMoviesEnpoint, params);
};

