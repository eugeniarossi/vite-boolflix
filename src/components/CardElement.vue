<script>
// import pacchetto bandiere
import CountryFlag from 'vue-country-flag-next';

export default {
    name: 'CardElement',
    // dichiaro le props
    props: {
        info: Object,
        imageUrl: String,
        nStar: Number
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
        <!-- voto stelle -->
        <div>
            <font-awesome-icon icon="fa-star" v-for="n in getVote" />
            <font-awesome-icon icon="fa-regular fa-star" v-for="n in nStar - getVote" />
        </div>
        <!-- /voto stelle -->
    </div>
    <!-- /card -->
</template>