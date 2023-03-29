// definisco uno store globale
import { reactive } from 'vue';

export const store = reactive({
    searchKey: '',
    movieResults: null,
    tvshowsResults: null,
    // stato della ricerca - default true
    searchStatus: true,
    // API URLs
    config: {
        api_key: 'f1c31a29b4d3e9f69bb0fd4c18555bd6',
        url_movies: 'https://api.themoviedb.org/3/search/movie',
        url_tvshows: 'https://api.themoviedb.org/3/search/tv'
    }
});