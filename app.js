// Finn elementene på siden
const navnFelt = document.getElementById("navnFelt");
const leggTilKnapp = document.getElementById("leggTilKnapp");
const spillerListe = document.getElementById("spillerListe");
const spillFelt = document.getElementById("spillFelt");
const poengFelter = document.getElementById("poengFelter");
const lagreSpillKnapp = document.getElementById("lagreSpillKnapp");

// Alle spillerne
let spillere = JSON.parse(localStorage.getItem("brettspill-spillere")) || [];

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
  localStorage.setItem("brettspill-spillere", tekst);
}

// Lager ett poengfelt for hver spiller
function visPoengfelter(){
poengFelter.innerHTML = "";

  for (const spiller of spillere) {
  const rad = document.createElement("p");
  const etikett = document.createElement("label");
  etikett.textContent = spiller + ": ";

  const felt = document.createElement("input");
  felt.type = "number";
  felt.className = "poeng-felt";
  felt.dataset.spiller = spiller;

  etikett.appendChild(felt);
  rad.appendChild(etikett);
  poengFelter.appendChild(rad);
  }
}

// Når man trykker på knappen
leggTilKnapp.addEventListener("click", function () {
  const navn = navnFelt.value.trim();

  if (navn === ""){
    return;
  }

  spillere.push(navn);
  lagreSpillere();
  navnFelt.value = "";
  visSpillere();
  visPoengfelter();
});

// Vis lagrede spillere når siden åpnes
visSpillere();
visPoengfelter();

