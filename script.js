var header = document.getElementById("headerIcons")
var headerPosition = header.offsetTop;
var showingMenu = false;

function openMenu() {
    var links = document.getElementById("myLinks")
    links.classList.toggle("hideLinks")
    links.classList.toggle("showLinks")
    showingMenu = !showingMenu;
    if(headerPosition == window.pageYOffset){
      header.classList.toggle("headerShowMenu")
    }
}


window.onscroll = function() {scrollMenu()};

function scrollMenu() {

  if (window.pageYOffset > headerPosition) {
    header.classList.add("headerShowMenu")
  } else {
    if(!showingMenu){
      header.classList.remove("headerShowMenu")
    }
  }
}