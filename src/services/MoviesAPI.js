const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '9aeb3f25134c39d746b22e1322fdcd2c';

export const getTrendingMovies = (movies) => {
    return fetch(`${BASE_URL}trending/movie/day?api_key=${KEY}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.status_message);
            }
            return resp.json();
        })
       
}

export const getDetailsMovie = (movieID) => {
    return fetch(`${BASE_URL}movie/${movieID}?api_key=${KEY}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.status_message);
            }
            return resp.json();
        })
}

export const getCastsMovie = (movieID) => {
    return fetch(`${BASE_URL}movie/${movieID}/credits?api_key=${KEY}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.status_message);
            }
            return resp.json();
        })
}

export const getReviewsMovie = (movieID) => {
    return fetch(`${BASE_URL}movie/${movieID}/reviews?api_key=${KEY}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.status_message);
            }
            return resp.json();
        })
}

export const getSearchMovie = (query) => {
    return fetch(`${BASE_URL}search/movie?api_key=${KEY}&query=${query}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.status_message);
            }
            return resp.json();
        })
}