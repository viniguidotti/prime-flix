import axios from 'axios';

//BASE URL:   https://api.themoviedb.org
//URL DA API: movie/now_playing?api_key=a8dcc7670d0c326f01b7099dafa92c9c

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;