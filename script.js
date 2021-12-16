// Laver variabler
var header = document.getElementById("headerIcons")
var headerTop = header.offsetTop;
var showingMenu = false;

// Funktion til at åbne menuen
function openMenu() {
    // Fjerner eller tilføjer en class, ved at toggle
    var links = document.getElementById("myLinks")
    links.classList.toggle("hideLinks")
    links.classList.toggle("showLinks")
    // Sætter showingMenu til at være det modsatte af hvad den er
    // Når siden reloader, vil den starte på false pga. den er sat til det på linje 4
    showingMenu = !showingMenu;
    // Hvis headerTop har samme værdi som window.pageYOffset, så sætter den bl.a. en baggrundsfarve på eller fjerner
    // Den skal kun toggle den déroppe, fordi den ingen baggrundsfarve har i toppen, men det får den når man scroller, også skal den ikke toggle
    if(headerTop == window.pageYOffset){
      header.classList.toggle("headerShowMenu")
    }
}

// Window har en indbygget JavaScript funktion (proberty) "onscroll", som læser om man scroller på siden
// Når man så scroller på siden, så skal der køres en funktion der hedder "scrollMenu"
window.onscroll = function() {scrollMenu()};

//Funktionen når man scroller
function scrollMenu() {
  // Når man scroller ned på siden, bliver pageYOffset's værdi højere
  // Hvis man er et sted på siden som er højere værdi en headerTop (0), så tilføjer den en class (farve bl.a.)
  if (window.pageYOffset > headerTop) {
    header.classList.add("headerShowMenu")
  // Ellers gør den følgende
  } else {
    // Hvis showingMenu er false, så må den gerne fjerne class 
    if(!showingMenu){
      header.classList.remove("headerShowMenu")
    }
  }
}

function scrollToTop(){
  // Indbygget JavaScript funktion, som scroller til den position man ønsker. 
    scroll(0, 0);
}