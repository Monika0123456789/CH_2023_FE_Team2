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