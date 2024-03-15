function BerekeningEnTijd() {
    let diameter = parseFloat(document.getElementById("diameterInput").value);

    let omtrek = Math.PI * diameter;
    let oppervlak = Math.PI * (diameter / 2) ** 2;

    document.getElementById("resultaat").innerHTML =
        "<p>De omtrek van de cirkel is: " + omtrek.toFixed(2) + "</p>" +
        "<p>Het oppervlak van de cirkel is: " + oppervlak.toFixed(2) + "</p>";

    let options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    document.getElementById("showDate").innerHTML = new Date().toLocaleTimeString('nl-NL', options);
}
