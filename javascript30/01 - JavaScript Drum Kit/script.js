const keyBoxs = document.querySelectorAll('.key');

const removeClass = function (event) {
  if(event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const addEventToKeys = () => {
  keyBoxs.forEach((key) => key.addEventListener('transitionend', removeClass));
}

const checkKey = (event) => {
  const audio = document.querySelector(`audio[data-key="${event.key}"]`);
  const key = document.querySelector(`.key[data-key="${event.key}"]`);

  if(!audio) return;
  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');
}

addEventToKeys();
window.addEventListener('keydown', checkKey);