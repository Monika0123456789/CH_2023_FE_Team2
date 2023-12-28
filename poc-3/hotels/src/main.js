
import { createApp } from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faEarthAsia, faEnvelope, faHotel, faPhone, faPlane, faStar, faStarHalfStroke, faTaxi, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faCcApplePay, faCcMastercard, faCcPaypal, faCcVisa, faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faPhone,faEnvelope,faHotel,faPlane,faEarthAsia,faTaxi,faUserShield,faCcPaypal,faCcVisa,faCcMastercard,faCcApplePay,faFacebook,faInstagram,faTwitter,faLinkedin,faStar,faStarHalfStroke);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
