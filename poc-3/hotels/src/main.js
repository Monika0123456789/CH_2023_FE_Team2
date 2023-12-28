
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faUserSecret, faStar, faLocationDot, faUtensils, faStopwatch, faShield, faBolt,faEarthAsia, faEnvelope, faHotel, faPhone, faPlane, faStar, faStarHalfStroke, faTaxi, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faCcApplePay, faCcMastercard, faCcPaypal, faCcVisa, faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
/* add icons to the library */
library.add(faUserSecret,faStar,faLocationDot, faUtensils, faStopwatch, faShield, faBolt,faPhone,faEnvelope,faHotel,faPlane,faEarthAsia,faTaxi,faUserShield,faCcPaypal,faCcVisa,faCcMastercard,faCcApplePay,faFacebook,faInstagram,faTwitter,faLinkedin,faStar,faStarHalfStroke);

const app = createApp(App);

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');

