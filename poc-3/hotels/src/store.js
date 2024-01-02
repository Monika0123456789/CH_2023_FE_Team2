import { reactive } from "vue";

export const store = reactive({
    rooms : 1,
    name : "",
    email : "",
    phone : "",
    nationality : "",
    gender : "",
    address : "",
    dob : "",
    checkin :null,
    checkout : null,
    checkinDate : null, // Sat Dec 30 2023 05:30:00 GMT+0530 (India Standard Time)
    checkoutDate : null,
    travellerDetailArr : [],
    travellerCount : 0
})