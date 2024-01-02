
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */

import {
  faLocationDot,
  faWifi,
  faWaterLadder,
  faSnowflake,
  faBell,
  faCreditCard,
  faPersonBiking,
  faVolumeHigh,
  faEye,
  faXmark,
  faUserSecret,
  faStar,
  faUtensils,
  faStopwatch,
  faShield,
  faBolt,
  faEarthAsia,
  faEnvelope,
  faHotel,
  faPhone,
  faPlane,
  faStarHalfStroke,
  faTaxi,
  faUserShield,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";


import {
  faCcApplePay,
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";


library.add(
  faLocationDot,
  faWifi,
  faWaterLadder,
  faSnowflake,
  faBell,
  faCreditCard,
  faPersonBiking,
  faVolumeHigh,
  faEye,
  faXmark,
  faUserSecret,
  faStar,
  faUtensils,
  faStopwatch,
  faShield,
  faBolt,
  faEarthAsia,
  faEnvelope,
  faHotel,
  faPhone,
  faPlane,
  faStarHalfStroke,
  faTaxi,
  faUserShield,
  faCircleCheck,
  faCcApplePay,
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
);

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
