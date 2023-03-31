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
            <h3>{{ title }}</h3>
            <h4>{{ original_title }}</h4>
            <div class="infos">
                <!-- flag lingua -->
                <country-flag :country="getLanguage" size='small' class="flag" />
                <!-- voto stelle -->
                <div>
                    <!-- ciclo for stelle piene -->
                    <font-awesome-icon icon="fa-star" v-for="n in getVote" />
                    <!-- ciclo for stelle vuote -->
                    <font-awesome-icon icon="fa-regular fa-star" v-for="n in nStar - getVote" />
                </div>
                <!-- /voto stelle -->
            </div>
            <!-- overview -->
            <div class="overview">{{ info.overview }}</div>
        </div>
        <!-- /caption -->
    </article>
    <!-- /card -->
</template>

<style scoped lang="scss">
article {
    height: 31.875rem;
    width: 21.375rem;
    display: flex;
    overflow: hidden;
    margin: 2px;

    img {
        min-height: 100%;
        width: auto;
        align-self: center;
        justify-self: center;
    }

    &:hover .image {
        display: none;
    }

    &:hover .caption {
        display: block;
    }

    .caption {
        padding: 2.1875rem 1.25rem;
        display: none;
        overflow: hidden;
        margin-bottom: 2.1875rem;

        h3 {
            padding-bottom: .3125rem;
        }

        h4 {
            margin-bottom: .9375rem;
        }

        .infos {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.75rem;
        }

        .overview {
            line-height: 1.3;
        }
    }
}

.alt-cover {
    width: 21.375rem;
}
</style>