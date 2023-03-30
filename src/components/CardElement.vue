<script>
// import pacchetto bandiere
import CountryFlag from 'vue-country-flag-next';

export default {
    name: 'CardElement',
    props: {
        info: Object
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
                
                default:
                    return this.info.original_language;
            }
        }
    }
}
</script>

<template>
    <!-- card -->
    <div>
        <h3>{{ info.title }}</h3>
        <h4>{{ info.original_title }}</h4>
        <country-flag :country="getLanguage" size='small' />
        <div>{{ info.vote_average }}</div>
    </div>
    <!-- /card -->
</template>