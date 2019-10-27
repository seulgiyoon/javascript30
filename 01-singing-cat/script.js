const blinkEyeRandomly = () => {
  const openEye = document.querySelector(`img[data-key="open"]`);
  const closeEye = document.querySelector(`img[data-key="close"]`);
  openEye.style.display = 'none';
  closeEye.style.display = 'block';

  setTimeout(() => {
    openEye.style.display = 'block';
    closeEye.style.display = 'none';
  }, 200);

  setTimeout(blinkEyeRandomly, Math.floor(Math.random() * 8000));
}

const removeClassTransitionEnd = (selector, className) => {
  const node = document.querySelectorAll(selector);

  node.forEach(element => {
    element.addEventListener('transitionend', function(){
      element.classList.remove(className)});
  });
}

const koreanToEnglish = {
  'ㅁ': 'a',
  'ㄴ': 's',
  'ㅇ': 'd',
  'ㄹ': 'f',
  'ㅎ': 'g',
  'ㅗ': 'h',
  'ㅓ': 'j',
  'ㅏ': 'k'
}

const convertKeyToEnglish = (key) => {
  let keyValue = '';

  if (key in koreanToEnglish) {
    keyValue = koreanToEnglish[key];
  } else {
    keyValue = key.toLowerCase();
  }

  return keyValue;
}

const playSound = (event) => {
  const sound = document.querySelector(`audio[data-key="${convertKeyToEnglish(event.key)}"]`);
  if (!sound) { return; }
  sound.currentTime = 0;
  sound.play();
}

const underlineText = (event) => {
  const text = document.querySelector(`div[data-key="${convertKeyToEnglish(event.key)}"]`);
  if (!text) { return; }
  text.classList.add('underline');
}

const changeMouth = () => {
  let count = 0;

  return function () {
    count = count + 1;

    const mouth = document.querySelector(`img[data-key="${convertKeyToEnglish(arguments[0].key)}"]`);
    if (!mouth) { return; }
    mouth.style.zIndex = count;
  }
}

removeClassTransitionEnd('.key', 'underline');
blinkEyeRandomly();
window.addEventListener('keydown', playSound);
window.addEventListener('keydown', underlineText);
window.addEventListener('keydown', changeMouth(event));
