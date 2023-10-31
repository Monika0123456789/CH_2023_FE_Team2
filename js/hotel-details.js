function clickHandler() {
  document.getElementsByClassName("map-container1")[0].style.display = "block";
}

function closeHandler() {
  document.getElementsByClassName("map-container1")[0].style.display = "none";
}

function init() {
  document.getElementById("openMap").addEventListener("click", clickHandler);
  document.getElementById("closeMap").addEventListener("click", closeHandler);

// to load the room details when a user selects the room
  document.getElementById("room-popup").addEventListener("click", function () {
    $("#popup-container").html(`


<section class="card">
<div class="popup-head">
<h3>Room Detail</h3>
<h3  id="close-popup">X</h3>
</div>

<hr>
<img src="./assets/images/12(1).jpg" alt="Room Image">
<div class="room-details">
<h1>Deluxe Pool View</h1>
<p>Club rooms are well furnished with air conditioner,32 inch LCD television and a mini bar.
    They have attached bathroom with shower head and hair dryer and 24 hours supply of hot water.
    Complimentary wireless internet access is available. Additional amenities include bottled water, a
    safe
    and a desk.
</p>
<h3>
    Amenities
</h3>
<table>
    <tbody>
        <tr>
            <td><img src="./assets/images/tick.svg" alt="tick"> Swiming Pool</td>
            <td><img src="./assets/images/tick.svg" alt="tick"> TV</td>
        </tr>
        <tr>
            <td><img src="./assets/images/tick.svg" alt="tick"> Spa</td>
            <td><img src="./assets/images/tick.svg" alt="tick"> Mirror</td>
        </tr>
        <tr>
            <td><img src="./assets/images/tick.svg" alt="tick"> Kids Play Are</td>
            <td><img src="./assets/images/tick.svg" alt="tick"> AC</td>
        </tr>
        <tr>
            <td><img src="./assets/images/tick.svg" alt="tick"> Gym</td>
            <td><img src="./assets/images/tick.svg" alt="tick"> Slippers</td>
        </tr>
    </tbody>
</table>
</div>
</section>

`);
    document.getElementById("popup-container").style.display = "block";
  });

  document
    .getElementById("popup-container")
    .addEventListener("click", function (event) {
      if (event.target.id === "close-popup") {
        document.getElementById("popup-container").style.display = "none";
      }
    });
}

document.addEventListener("DOMContentLoaded", init);
