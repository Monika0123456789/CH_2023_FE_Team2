
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("openMap").addEventListener("click", function () {
        var mapPopup = document.getElementById("mapPopup");
        mapPopup.style.display = "block";
    
        // Embed Google Map (replace with your own Google Maps embed code)
        var mapContainer = document.getElementById("mapContainer");
        mapContainer.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1698044038173!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    });
    
    document.getElementById("closeMap").addEventListener("click", function () {
        var mapPopup = document.getElementById("mapPopup");
        mapPopup.style.display = "none";
    });
    

});
