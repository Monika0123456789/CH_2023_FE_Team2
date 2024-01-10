import $ from "jquery";

$(() => {
    var adminData = {
        email : "hotel.booking.admin@gmail.com",
        password : "admin@123"
    }
    localStorage.setItem("adminData", JSON.stringify(adminData));
})