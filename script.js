// Laver variabler
var headerIcons = document.getElementById("headerIcons")
var headerLinks = document.getElementById("myLinks")
var header = document.getElementById("header")
var headerTop = headerIcons.offsetTop;
var showingMenu = false;

// Funktion til at åbne menuen
function openMenu() {
  if(window.innerWidth < 993 ){

    // Fjerner eller tilføjer en class, ved at toggle
    var links = document.getElementById("myLinks")
    links.classList.toggle("hideLinks")
    links.classList.toggle("showLinks")
    header.classList.toggle("headerMobileShadow")
    // Sætter showingMenu til at være det modsatte af hvad den er
    // Når siden reloader, vil den starte på false pga. den er sat til det på linje 4
    showingMenu = !showingMenu;
    // Hvis headerTop har samme værdi som window.pageYOffset, så sætter den bl.a. en baggrundsfarve på eller fjerner
    // Den skal kun toggle den déroppe, fordi den ingen baggrundsfarve har i toppen, men det får den når man scroller, også skal den ikke toggle
    if(headerTop == window.pageYOffset){
      headerIcons.classList.toggle("headerShowMenu")
    }
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
    headerIcons.classList.add("headerShowMenu")
    header.classList.add("headerMobileShadow")
    if(window.innerWidth > 993 ){
      headerLinks.classList.add("headerShowMenu")
    }
  // Ellers gør den følgende
  } else {
    // Hvis showingMenu er false, så må den gerne fjerne class 
    if(!showingMenu){
      headerIcons.classList.remove("headerShowMenu")
      header.classList.remove("headerMobileShadow")
      if(window.innerWidth > 993 ){
        headerLinks.classList.remove("headerShowMenu")
      }
    }
  }
}

function scrollToTop(){
  // Indbygget JavaScript funktion, som scroller til den position man ønsker. 
    scroll(0, 0);
}

// Javascript så "my projects" slider ind:
// Inspiration video: https://www.youtube.com/watch?v=huVJW23JHKQ d. 29/12/21

// kalder en konstant, som defineres til at være lig alle de elementer der har klassen slide-in
const sliders = document.querySelectorAll(".slide-in");

// en konstant som indeholder værdier til funktionen nedenunder.
// bla. hvor langt man skal scrolle før det slider ind.
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

// Funktion som gør brug af den indbyggede javascript klasse(IntersectionObserver), hvilket benyttes til at observere html elementer på siden
// Klassen (IntersectionObserver) tager imod en funktion og appearOptions. 
// Funktionen tager imod to parametre (entries og appearOnScroll)
const appearOnScroll = new IntersectionObserver(function(
    entries, 
    appearOnScroll
    ) {
      // forEach kigger på hver entry i entries. (Loop)
        entries.forEach(entry => {
          // hvis entry IKKE er insecting, så skal funktionen stoppe
            if (!entry.isIntersecting) {
                return;
            } else{
              // Ellers skal den tilføje .appear til hver entry
              // Også fortælles der, at den skal holde op med at observere den entry der er igang med at kigges på
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    },
    appearOptions)



// Her gøres brug af sliders konstanten, vha. forEach loop'et, kigges der på hver enkelt slider element
// For hver enkelt slider element, bruges appearOnScroll, som er den funktion der bliver defineret på linje 76
sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})
