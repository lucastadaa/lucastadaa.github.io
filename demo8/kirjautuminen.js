document.addEventListener("DOMContentLoaded", onkoKirjautunut);



function onkoKirjautunut() {
    document.getElementById("ulos_kirjautuminen").style.display = "none";
    let kirjautunut = 'kylla';
if (localStorage.getItem("kirjautunut") === "kylla") {
    document.getElementById('tervetuloa_teksti').textContent += localStorage.getItem("nimi");
    document.getElementById("kirjautumis_lomake").style.display = "none";
    document.getElementById("ulos_kirjautuminen").style.display = "initial";
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