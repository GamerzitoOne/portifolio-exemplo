const audio = new Audio('assets/audio.mp3');
const click_sound = new Audio('assets/click-sound.mp3');
const imagemDoomguy = document.querySelector('.imagem-doomguy');
const links = document.querySelectorAll('.apresentacao__links__social-link');

imagemDoomguy.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
});

links.forEach(function(link) {
    link.addEventListener('click', function() {
        click_sound.currentTime = 0; // Reinicia o áudio para cada clique
        click_sound.play();
    });
});

function delayedRedirect(event) {
    event.preventDefault(); // Impede o redirecionamento imediato
  
    setTimeout(function() {
      window.location.href = event.target.href; // Redireciona após o atraso
    }, 700); // Atraso
  }
  
