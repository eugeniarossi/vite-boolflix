<script>
// import pacchetto bandiere
import CountryFlag from 'vue-country-flag-next';

export default {
    name: 'CardElement',
    props: {
        info: Object,
        imageUrl: String
    },
    components: {
        CountryFlag
    },
    computed: {
        // gestione casi limite lang/flags
        getLanguage() {
            switch (this.info.original_language) {
                case 'en':
                    return 'gb';
                case 'ja':
                    return 'jpn';
                // to do - add: ko
                default:
                    return this.info.original_language;
            }
        },
        // gestione titolo per film e tvshows
        getTitle() {
            if (this.info.myType === 'movie') {
                return this.info.title;
            } else {
                return this.info.original_name;
            }
        },
        // calcolo del voto da 1 a 5 per eccesso
        getVote() {
            return Math.ceil(this.info.vote_average / 2);
        }
    }
}
</script>

<template>
    <!-- card -->
    <div>
        <img :src="imageUrl + info.poster_path" :alt="getTitle" v-if="info.poster_path !== null">
        <div v-else>Copertina non disponibile</div>
        <h3>{{ getTitle }}</h3>
        <h4>{{ info.original_title }}</h4>
        <country-flag :country="getLanguage" size='small' />
        <div>{{ getVote }}</div>
        <!-- test font awesome -->
        <font-awesome-icon icon="fa-regular fa-star" />
        <font-awesome-icon icon="fa-star" />
        <!-- /test font awesome -->
    </div>
    <!-- /card -->
</template>