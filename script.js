var header =document.getElementById("headerIcons")

function openMenu() {
    var links = document.getElementById("myLinks")
    links.classList.toggle("hideLinks")
    links.classList.toggle("showLinks")
    header.classList.toggle("headerShowMenu")
}

// window.addEventListener("scroll", (event) => {
//     let scroll = this.scrollY;
//     if(scroll>0){
//         header.style="background-color: #a5b2c2; position: sticky; z-index: 10;"
//     } else{
//         header.style="background-color: unset;"
//     }
// });

window.onscroll = function() {myFunction()};

var header = document.getElementById("headerIcons");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}