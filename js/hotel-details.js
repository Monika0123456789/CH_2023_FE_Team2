
function clickHandler(){
  document.getElementsByClassName("map-container1")[0].style.display="block";
};

function closeHandler(){
  document.getElementsByClassName("map-container1")[0].style.display="none";
};

function init(){
  document.getElementById("openMap").addEventListener("click",clickHandler);
  document.getElementById("closeMap").addEventListener("click",closeHandler);
  
};

document.addEventListener("DOMContentLoaded",init);