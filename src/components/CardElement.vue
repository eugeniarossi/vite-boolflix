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
        },
        getOverview() {
            if (this.info.overview.length > 370) {
                return this.info.overview.substring(0, 370) + "...";
            } else {
                return this.info.overview
            }
        }
    }
}
</script>

<template>
    <!-- card -->
    <article class="flip-card">
        <div class="flip-card-inner">
            <!-- cover -->
            <div class="cover flip-card-front">
                <img :src="imageUrl + info.poster_path" :alt="title" v-if="info.poster_path !== null">
                <!-- alt cover -->
                <div class="alt-cover" v-else>
                    <div>
                        <h3>{{ title }}</h3>
                        <h4>{{ original_title }}</h4>
                    </div>
                    <div class="not-available">Copertina non disponibile</div>
                </div>
                <!-- /alt cover -->
            </div>
            <!-- /cover -->
            <!-- caption -->
            <div class="caption flip-card-back">
                <h3>{{ title }}</h3>
                <h4>{{ original_title }}</h4>
                <div class="infos">
                    <!-- flag lingua -->
                    <country-flag :country="getLanguage" size='small' class="flag" />
                    <!-- voto stelle -->
                    <div class="stars-vote">
                        <!-- ciclo for stelle piene -->
                        <font-awesome-icon icon="fa-star" v-for="n in getVote" />
                        <!-- ciclo for stelle vuote -->
                        <font-awesome-icon icon="fa-regular fa-star" v-for="n in nStar - getVote" />
                    </div>
                    <!-- /voto stelle -->
                </div>
                <!-- overview -->
                <div class="overview">{{ getOverview }}</div>
            </div>
            <!-- /caption -->
        </div>
    </article>
    <!-- /card -->
</template>

<style scoped lang="scss">
@use '../assets/_partials/variables' as *;

article {
    height: 31.875rem;
    width: 21.375rem;
    margin: 2px;
    overflow: hidden;
    display: flex;
    background-color: #171717;

    .cover {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        img {
            min-height: 100%;
            width: auto;
        }

        .alt-cover {
            height: 100%;
            width: 100%;
            padding: 2.1875rem 1.375rem;
            border: 1px solid $secondary-font-color;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .not-available {
                align-self: center;
                padding-bottom: 1.875rem;
                text-align: center;
            }
        }
    }

    .caption {
        height: 100%;
        padding: 2.1875rem 1.375rem;
        overflow: hidden;
        background-color: $primary-color;

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

            .stars-vote {
                color: $secondary-font-color;
            }
        }

        .overview {
            line-height: 1.3;
        }
    }
}

.flip-card {
    background-color: transparent;
    perspective: 1000px;
    /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    background-color: $primary-color;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;
}

/* Style the back side */
.flip-card-back {
    transform: rotateY(180deg);
}
</style>