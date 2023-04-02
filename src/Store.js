// definisco uno store globale
import { reactive } from 'vue';

export const store = reactive({
    searchKey: '',
    selectValue: 'all',
    moviesResults: [],
    tvshowsResults: [],
    defaultLang: 'it-IT',
    // stato della ricerca - default true
    searchMoviesResult: true,
    searchTvshowsResult: true,
    // API URLs
    config: {
        api_key: 'f1c31a29b4d3e9f69bb0fd4c18555bd6',
        url_api: 'https://api.themoviedb.org/3/',
        url_movies: 'search/movie',
        url_tvshows: 'search/tv',
        url_img: 'https://image.tmdb.org/t/p/',
        img_size: 'w342',
        nStar: 5
    }
});