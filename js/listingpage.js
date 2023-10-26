// function to change the page upon button click
function changePage(event){
    // if page2 container is hidden and page1 container is not hidden
    if( !($("#page1-container").is(":hidden")) && $("#page2-container").is(":hidden") ){
        // hide page1 and display page2
        $("#page1-container").hide();
        $("#page2-container").show();

        //changing the styles of buttons
        $("#toggle-page2-button2").css({"background-color":"blue","color":"white"});

    }
    // if page1 container is hidden and page2 container is not hidden
    else if( !($("#page2-container").is(":hidden")) && $("#page1-container").is(":hidden") ){
        // hide page2 and display page1
        $("#page2-container").hide();
        $("#page1-container").show();

        //changing the styles of buttons
        $("#toggle-page1-button1").css({"background-color":"blue","color":"white"});
    }
}


$(() => {
    $("#page2-container").hide();
    $("#toggle-page1-button1").css({"background-color":"blue","color":"white"})
    
    // invoke function changePage upon clicking toggle buttons
    $(".toggle-buttons").on("click",changePage);

})