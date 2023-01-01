
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .changeDelay(30)
    .typeString('<h2>C\' est <strong> NOEL </strong>, je peux maintenant m\'amuser avec: <strong> HTML </strong></h2>')
    .pauseFor(3000)
    .deleteChars(6)
    .typeString('<h2><strong>CSS</strong></h2>')
    .pauseFor(3000)
    .deleteChars(4)
    .typeString('<h2><strong>JS</strong></h2>')
    .pauseFor(3000)
    .changeDelay(30)
    .typeString('<h2><strong>JQUERY</strong></h2>')
    .pauseFor(3000)
    .deleteChars(7)
    .typeString('<h2><strong>AJAX</strong></h2>')
    .pauseFor(3000)
    .start();

