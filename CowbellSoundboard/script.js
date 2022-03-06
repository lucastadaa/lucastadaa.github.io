//Alustetaan äänet
const sounds = ['Cowbell A', 'Cowbell A#', 'Cowbell C', 'Cowbell D#', 'Cowbell F', 'Cowbell F#', 'Cowbell G', 'bababoey'];

//Rakennamme nappien pohjan jokaiselle äänelle
sounds.forEach(sound => {
    const btn = document.createElement('button');   //Alustetaan napit
    btn.classList.add('btn');   //Lisätään napeille oma luokka
    btn.innerText = sound;  //Komento tuo napeille niiden nimet


    //Lisätään komento, joka saa napin ääntämään painamalla nappia ja loppumaan heti, kun ääni loppuu.
    btn.addEventListener('click', () => { //Kun nappia painetaan, se ääntää
        stopPlaying();
        document.getElementById(sound).play(); //Tuodaan nappien äänet yhtälöön
    })

    document.getElementById('buttons').append(btn); //Tuo napit näkyville niiden omilla nimillä
})


//Luodaan yhtälö, joka lopettaa äänen soimisien. (soi vain kerran, kun sitä painaa)
function stopPlaying() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0; //Aloittaa äänen kokonaan alusta
    })
}