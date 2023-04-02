import { createApp } from 'vue'

// import main scss
import './assets/main.scss'
// import main css
import './assets/main.css'
import App from './App.vue'

// import font
import "@fontsource/lato";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faStar, faStarSolid, faMagnifyingGlass)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')