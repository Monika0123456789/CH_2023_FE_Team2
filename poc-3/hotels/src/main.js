import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret, faStar, faLocationDot, faUtensils, faStopwatch, faBolt,faCircleCheck,faWifi,faWaterLadder,faSnowflake,faBell,faPersonBiking,faCreditCard,faShield,faVolumeHigh} from '@fortawesome/free-solid-svg-icons';

library.add(faUserSecret,faStar,faLocationDot, faUtensils, faStopwatch, faShield, faBolt,faCircleCheck,faWifi,faWaterLadder,faSnowflake,faBell,faPersonBiking,faCreditCard,faShield,faVolumeHigh)

const app = createApp(App);

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');
