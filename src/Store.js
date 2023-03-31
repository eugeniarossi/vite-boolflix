// definisco uno store globale
import { reactive } from 'vue';

export const store = reactive({
    searchKey: '',
    movieResults: [],
    tvshowsResults: [],
    allResults: [],
    defaultLang: 'it-IT',
    // stato della ricerca - default true
    searchMoviesResult: true,
    searchTvshowsResult: true,
    // API URLs
    config: {
        api_key: 'f1c31a29b4d3e9f69bb0fd4c18555bd6',
        url_movies: 'https://api.themoviedb.org/3/search/movie',
        url_tvshows: 'https://api.themoviedb.org/3/search/tv',
        url_img: 'https://image.tmdb.org/t/p/',
        img_size: 'w342',
        /*
        "poster_sizes": [
  "w92",
  "w154",
  "w185",
  "w342",
  "w500",
  "w780",
  "original"
]
*/
        nStar: 5
    }
});