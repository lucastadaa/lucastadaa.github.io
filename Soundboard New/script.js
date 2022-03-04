const sounds = ['Cowbell A#', 'CowbellA', 'CowbellC', 'Cowbell D#', 'Cowbell F#', 'CowbellF', 'CowbellG', 'bababoey'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopPlaying();
        document.getElementById(sound).play();
    })

    document.getElementById('buttons').append(btn);
})


function stopPlaying() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    })
}