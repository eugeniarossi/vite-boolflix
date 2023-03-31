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
                // to do - add: ko *****
                default:
                    return this.info.original_language;
            }
        },
        // gestione titolo per film e tvshows
        title() {
            return this.info.title || this.info.name
        },
        original_title() {
            return this.info.original_title || this.info.original_name
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
    <article>
        <!-- image -->
        <div class="image">
            <img :src="imageUrl + info.poster_path" :alt="title" v-if="info.poster_path !== null">
            <!-- alt cover -->
            <div class="alt-cover" v-else>Copertina non disponibile</div>
        </div>
        <!-- /image -->
        <!-- caption -->
        <div class="caption">
            <!-- /img cover -->
            <h3>{{ title }}</h3>
            <h4>{{ original_title }}</h4>
            <!-- flag lingua -->
            <country-flag :country="getLanguage" size='small' />
            <!-- voto stelle -->
            <div>
                <!-- ciclo for stelle piene -->
                <font-awesome-icon icon="fa-star" v-for="n in getVote" />
                <!-- ciclo for stelle vuote -->
                <font-awesome-icon icon="fa-regular fa-star" v-for="n in nStar - getVote" />
            </div>
            <!-- /voto stelle -->
        </div>
        <!-- /caption -->
    </article>
    <!-- /card -->
</template>

<style scoped lang="scss">
article {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    .caption {
        padding: .625rem 1.25rem;
    }
}

.alt-cover {
    width: 21.375rem;
}
</style>