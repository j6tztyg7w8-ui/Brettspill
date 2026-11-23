// Finn elementene på siden
const navnFelt = document.getElementById("navnFelt");
const leggTilKnapp = document.getElementById("leggTilKnapp");
const spillerListe = document.getElementById("spillerListe");

// Alle spillerne
let spillere = [];

// Når man trykker på knappen
leggTilKnapp.addEventListener("click", function () {
  console.log("Knappen ble trykket!");
});
