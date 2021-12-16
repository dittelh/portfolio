//Loops are handy, if you want to run the same code over and over again, each time with a different value 
// https://www.w3schools.com/howto/howto_js_slideshow.asp 
// https://www.w3schools.com/js/js_loop_for.asp

//Sætter det aktive Id til at være 0, så det har en værdi
var activeId = 0;

//Her starter funktionen, når man (onclick) på img med pilene
//Hvis det aktive Id IKKE er lig med 3, så skal den pluse sig selv med én
//Hvis det aktive Id ER lig med 3, så skal den skifte tilbage til 0
function nextImage(){
    if(activeId !== 3){
        activeId = activeId + 1;
    } else {
        activeId = 0;
    }

    // Her laver den en loop, for at hurtig læse en masse forskellige værdier
    // Sætter en ny variabel til at være 0 hvergang funktionen bliver kørt. 
    // Så længe variablen "i" er mindre end 4, så vil den pluse sig med 1 (sådan så loopet forsætter, med at køre)
    // Når i pluser sig selv så den er lige 4, så stopper den loopet
    // Når den kører loopet, så tjekker den hvad i er og hvad det aktive Id er, sådan så den tilføjer og fjerne classes
    for (let i = 0; i < 4; i++) {
        if(i == activeId){
            document.getElementById('image' + i).classList.add('imageActive');
            document.getElementById('dot' + i).classList.add('dotActive');
        } else {
            document.getElementById('image' + i).classList.remove('imageActive');
            document.getElementById('dot' + i).classList.remove('dotActive');
        }
    }
}

// Ny funktion, samme princip som ovenover
// Det er (onclick) på den anden pil
// Hvis det aktive Id IKKE er lig med 0, så skal den minuse sig selv med én
// Hvis det aktive Id ER lig med 0, så skal den skifte tilbage til 4
function previousImage(){
    if(activeId !== 0){
        activeId = activeId - 1;
    } else {
        activeId = 3;
    }

    // Her er det samme loop, bare i den anden funktion
    // Loopet gør præcis det samme som i funktionen ovenover
    for (let i = 0; i < 4; i++) {
        if(i == activeId){
            document.getElementById('image' + i).classList.add('imageActive');
            document.getElementById('dot' + i).classList.add('dotActive');
        } else {
            document.getElementById('image' + i).classList.remove('imageActive');
            document.getElementById('dot' + i).classList.remove('dotActive');
        }
    }
}
