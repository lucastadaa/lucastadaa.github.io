document.addEventListener("DOMContentLoaded", onkoKirjautunut);


localStorage.getElementById("kirjaudu_ulos").style.display = "none";


function onkoKirjautunut() {
    let kirjautunut = 'kylla';
if (localStorage.getItem("kirjautunut") === "kylla") {
    document.getElementById('tervetuloa_teksti').textContent += localStorage.getItem("nimi");
    document.getElementById("kirjautumis_lomake").style.display = "none";
    }
}



function kirjaudu() {
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
}

function kirjauduulos() {
    if (localStorage.getItem("kirjautunut") === "kylla") {
        localStorage.setItem("nimi", document.getElementById("nimi").value);
        localStorage.setItem("kirjautunut", "ei");
    }
}