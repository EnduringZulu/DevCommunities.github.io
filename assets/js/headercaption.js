const header = document.getElementById('title');
const caption1 = document.getElementById('devcommuis');
const caption2 = document.getElementById('forwho');
const caption3 = document.getElementById('dowhat');

var headwriter = new Typewriter(header, {
    loop: false,
    devmode: true,
});

var caption1writer = new Typewriter(caption1, {
    strings: ['Community', 'School', 'Cafe', 'Club', 'Camp'],
    autoStart: true,
    loop: true,
    delay: 200,
    pauseFor: 7000,
});

var caption2writer = new Typewriter(caption2, {
    strings: ['Programmer', 'Learner', 'Developer', 'Students'],
    autoStart: true,
    loop: true,
    delay: 100,
    pauseFor: 3000,
});

var caption3writer = new Typewriter(caption3, {
    strings: ['Learn', 'Do Project', 'Hangout', 'Experience'],
    autoStart: true,
    loop: true,
    delay: 100,
    pauseFor: 2000,
});



// call all onload function
window.addEventListener('load', (event) => {
    headwriter.typeString('DevCommu').start();
    caption1writer.start();
    caption2writer.start();
    caption3writer.start();

});