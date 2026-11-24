// Finn elementene på siden
const navnFelt = document.getElementById("navnFelt");
const leggTilKnapp = document.getElementById("leggTilKnapp");
const spillerListe = document.getElementById("spillerListe");

// Alle spillerne
let spillere = [];

// Tegner spillerlista på siden
function visSpillere() {
  spillerListe.innerHTML = "";

  for (const spiller of spillere) {
    const li = document.createElement("li");
    li.textContent = spiller;
    spillerListe.appendChild(li);
  }
}

//Lagrer spillerlisten i nettsidens notatblokk
function lagreSpillere() {
  const tekst = JSON.stringify(spillere);
  localStorage.setItem("brettspill-spillere", "tekst);
                }

// Når man trykker på knappen
leggTilKnapp.addEventListener("click", function () {
  const navn = navnFelt.value.trim();

  if (navn === ""){
    return;
  }

  spillere.push(navn);
  navnFelt.value = "";
  visSpillere();
});
