
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar, faUtensils, faStopwatch, faShield, faBolt } from '@fortawesome/free-solid-svg-icons'

library.add(faStar, faUtensils, faStopwatch, faShield, faBolt)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
