const sounds = ['applause', 'bababoey', 'boo', 'cowbell', 'gasp', 'intervention', 'tada', 'victory', 'wrong'];

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