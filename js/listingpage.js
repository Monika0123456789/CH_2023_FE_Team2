
$(document).ready(function () {
    $.getJSON("hotels.json", function (data) {

      // looping through the array of objects
      data.items.forEach(function (hotelData) {

        // obtaining the attributes of each object
        var hotelId = hotelData.id;
        var hotelName = hotelData.name;
        var hotelLocation = "Bengaluru";
        var hotelImage = hotelData.img;
        var hotelDiscount = "30%";
        var hotelPrice = hotelData.price;
        var facilities = hotelData.Facilities;

        // code block to display facilities
        var facilitiesList = "<ul>";
        for (var i = 0; i < Math.min(facilities.length, 3); i++) {
          facilitiesList += `<li>${facilities[i]}</li>`;
        }
        facilitiesList+=`<li><a href="#" onclick="openPopup(${hotelId})" title="More details about the Hotel">More+</a></li>`
        facilitiesList += '</ul>';


        // variable to render page1 data
        var hotelList1;

        // code block to render page1 of hotel lists
        if(hotelId===1){
          hotelsList1 = `
                    <div class="hotel-list-maincontainer">
                        <div class="hotel-list-leftcontainer">
                            <img class="container-image" src="${hotelImage}" alt="roomimage">
                            <div class="offer-div">${hotelDiscount} Off</div>
                        </div>
                        <div class="hotel-list-rightcontainer">
                            <div class="rightcontainer-section1">
                                <article>
                                    ${'<i class="fa-solid fa-star fa-sm" style="color: #e1f014;"></i>'.repeat(
                                      4
                                    )}
                                    <i class="fa-solid fa-star-half-stroke fa-sm" style="color: #e1f014;"></i>
                                </article>
                                <article>
                                    <div class="iconcontainer-main">
                                        <div class="iconcontainer hearticon" title="Like"><i class="fas fa-heart fa-xs"></i></div>
                                        <div class="iconcontainer shareicon" title="Share"><i class="fas fa-share-nodes fa-xs"></i></div>
                                    </div>
                                </article>
                            </div>
                            <div class="rightcontainer-section2">
                                <h3>${hotelName}</h3>
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="location" style="display: inline;">${hotelLocation}</div>

                                ${facilitiesList}
                                <p><i class="fa-solid fa-circle-check fa-xs" style="color: rgb(3, 185, 3);"></i>&nbsp Free Cancellation till 7 jan 2022<br>
                                <i class="fa-solid fa-circle-check fa-xs" style="color: rgb(3, 185, 3);"></i>&nbsp Free Breakfast</p>
                            </div>
                            <div class="rightcontainer-section3">
                                <p><b class="hotel-pricing">${hotelPrice}</b>/day &nbsp<s>$1000</s></p>
                                <button class="Select-room-button" onclick="window.location.href='hotel-details.html'">Select Room</button>
                            </div>
                        </div>
                    </div>`;

          $("#page1-container").append(hotelsList1);
        }
        else{
          hotelsList1 = `
                    <div class="hotel-list-maincontainer">
                        <div class="hotel-list-leftcontainer">
                            <img class="container-image" src="${hotelImage}" alt="roomimage">
                            
                        </div>
                        <div class="hotel-list-rightcontainer">
                            <div class="rightcontainer-section1">
                                <article>
                                    ${'<i class="fa-solid fa-star fa-sm" style="color: #e1f014;"></i>'.repeat(
                                      4
                                    )}
                                    <i class="fa-solid fa-star-half-stroke fa-sm" style="color: #e1f014;"></i>
                                </article>
                                <article>
                                    <div class="iconcontainer-main">
                                        <div class="iconcontainer hearticon" title="Like"><i class="fas fa-heart fa-xs"></i></div>
                                        <div class="iconcontainer shareicon" title="Share"><i class="fas fa-share-nodes fa-xs"></i></div>
                                    </div>
                                </article>
                            </div>
                            <div class="rightcontainer-section2">
                                <h3>${hotelName}</h3>
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="location" style="display: inline;">${hotelLocation}</div>

                                ${facilitiesList}
                                <p><i class="fa-solid fa-circle-check fa-xs" style="color: rgb(3, 185, 3);"></i>&nbsp Free Cancellation till 7 jan 2022<br>
                                <i class="fa-solid fa-circle-check fa-xs" style="color: rgb(3, 185, 3);"></i>&nbsp Free Breakfast</p>
                            </div>
                            <div class="rightcontainer-section3">
                                <p><b class="hotel-pricing">${hotelPrice}</b>/day &nbsp<s>$1000</s></p>

                                <button class="Select-room-button" onclick="window.location.href='hotel-details.html'">Select Room</button>
                            </div>
                        </div>
                    </div>`;

          $("#page1-container").append(hotelsList1);
        }
      });
    });

    $.getJSON("hotels.json", (data) => {

      // reverse the items array
      var revData = data.items.reverse();
      
      // looping through the array of objects
      revData.forEach((hotelData) => {

        // obtaining the attributes of each object
        var hotelName = hotelData.name,
        hotelId = hotelData.id,
        hotelLocation = "Bangalore",
        hotelImage = hotelData.img,
        hotelDiscount = "25%",
        hotelPrice = hotelData.price,
        facilities = hotelData.Facilities;

        // console.log(hotelName)

        // code block to display facilities
        var facilitiesList = "<ul>";
        for (var i = 0; i < Math.min(facilities.length, 3); i++) {
          facilitiesList += `<li>${facilities[i]}</li>`;
        }
        facilitiesList+=`<li><a href="#" onclick="openPopup(${hotelId})" title="View more Hotels">More+</a></li>`
        facilitiesList += "</ul>";

        // variable to render page2 data
        var hotelsList2;

        // code block to render page2 of hotel lists
        if(hotelId===5){
          hotelsList2 = `
                    <div class="hotel-list-maincontainer">
                        <div class="hotel-list-leftcontainer">
                            <img class="container-image" src="${hotelImage}" alt="roomimage">
                            <div class="offer-div">${hotelDiscount} Off</div>
                        </div>
                        <div class="hotel-list-rightcontainer">
                            <div class="rightcontainer-section1">
                                <article>
                                    ${'<i class="fa-solid fa-star fa-sm" style="color: #e1f014;"></i>'.repeat(
                                      4
                                    )}
                                    <i class="fa-solid fa-star-half-stroke fa-sm" style="color: #e1f014;"></i>
                                </article>
                                <article>
                                    <div class="iconcontainer-main">
                                        <div class="iconcontainer hearticon" title="Like"><i class="fas fa-heart fa-xs"></i></div>
                                        <div class="iconcontainer shareicon" title="Share"><i class="fas fa-share-nodes fa-xs"></i></div>
                                    </div>
                                </article>
                            </div>
                            <div class="rightcontainer-section2">
                                <h3>${hotelName}</h3>
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="location" style="display: inline;">${hotelLocation}</div>

                                ${facilitiesList}
                                <p><i class="fa-solid fa-circle-check fa-xs" style="color: rgb(3, 185, 3);"></i>&nbsp Free Cancellation till 7 jan 2022<br>
                                <i class="fa-solid fa-circle-check fa-xs" style="color: rgb(3, 185, 3);"></i>&nbsp Free Breakfast</p>
                            </div>
                            <div class="rightcontainer-section3">
                                <p><b class="hotel-pricing">${hotelPrice}</b>/day &nbsp<s>$1000</s></p>
                                <button class="Select-room-button" onclick="window.location.href='hotel-details.html'">Select Room</button>
                            </div>
                        </div>
                    </div>`;

          $("#page2-container").append(hotelsList2);
        }
        else{
          hotelsList2 = `
                    <div class="hotel-list-maincontainer">
                        <div class="hotel-list-leftcontainer">
                            <img class="container-image" src="${hotelImage}" alt="roomimage">
                            
                        </div>
                        <div class="hotel-list-rightcontainer">
                            <div class="rightcontainer-section1">
                                <article>
                                    ${'<i class="fa-solid fa-star fa-sm" style="color: #e1f014;"></i>'.repeat(
                                      4
                                    )}
                                    <i class="fa-solid fa-star-half-stroke fa-sm" style="color: #e1f014;"></i>
                                </article>
                                <article>
                                    <div class="iconcontainer-main">
                                        <div class="iconcontainer hearticon" title="Like"><i class="fas fa-heart fa-xs"></i></div>
                                        <div class="iconcontainer shareicon" title="View more Hotels"><i class="fas fa-share-nodes fa-xs"></i></div>
                                    </div>
                                </article>
                            </div>
                            <div class="rightcontainer-section2">
                                <h3>${hotelName}</h3>
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="location" style="display: inline;">${hotelLocation}</div>

                                ${facilitiesList}
                                <p><i class="fa-solid fa-circle-check fa-xs" style="color: rgb(3, 185, 3);"></i>&nbsp Free Cancellation till 7 jan 2022<br>
                                <i class="fa-solid fa-circle-check fa-xs" style="color: rgb(3, 185, 3);"></i>&nbsp Free Breakfast</p>
                            </div>
                            <div class="rightcontainer-section3">

                                <p><b class="hotel-pricing">${hotelPrice}</b>/day &nbsp<s>$1000</s></p>
                                <button class="Select-room-button" onclick="window.location.href='hotel-details.html'">Select Room</button>
                            </div>
                        </div>
                    </div>`;
                    $("#page2-container").append(hotelsList2);
        }
      })
    });
});

var data; //declare the variable data

//fetch hotel data
$.getJSON("hotels.json",function(hotelData){
    data = hotelData;
});

//function to match the id of hotel to respective id in the json data
function getHotelDataById(hotelId){
    for(var i=0;i<data.items.length;i++){
        if(data.items[i].id === hotelId){
          return data.items[i];
        }
    }
    return null;
}


// function to open the popup
function openPopup(hotelId){
    var hotelData = getHotelDataById(hotelId);
    if(hotelData){
        $("#popup-hotel-name").text(hotelData.name);
        $("#popup-long-desc").text(hotelData.longDesc);

        var facilitiesList = $("#popup-facilities-list");
        facilitiesList.empty();
        hotelData.Facilities.forEach(function (facility){
            var li = $("<li>").text(facility);
            facilitiesList.append(li);
        });
        $("#popup-container").show();
    }
}
//function to close the popup
function closePopup(){
    $("#popup-container").hide();
}

// function to switch to page2
function changePageToTwo(){
    // hide page1 and show page2 as well as change the color of button2 to active
    $("#page1-container").hide();
    $("#page2-container").show();

    $("#toggle-button1").css({"background-color":"rgb(216, 204, 189)", "color":"black"});
    $("#toggle-button2").css({"background-color":"blue", "color":"white"});
}

// function to switch to page1
function changePageToOne(){
    // hide page2 and show page1 as well as change the color of button1 to active
    $("#page2-container").hide();
    $("#page1-container").show();

    $("#toggle-button2").css({"background-color":"rgb(216, 204, 189)", "color":"black"});
    $("#toggle-button1").css({"background-color":"blue", "color":"white"});
}



$(() => {
    // // hide page2 on page load
    $("#page2-container").hide();

    $("#toggle-button1").css({"background-color":"blue","color":"white"});

    
    // invoke function changePagetoTwo upon clicking toggle button 2
    $("#toggle-button2").on("click",changePageToTwo);

    // invoke function changePagetoOne upon clicking toggle button 1
    $("#toggle-button1").on("click",changePageToOne);
})