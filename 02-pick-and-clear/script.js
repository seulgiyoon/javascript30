const pictures = document.querySelectorAll('.photo');
const controlBar = document.querySelector('#blur');
const selectedPic = document.getElementsByClassName('open');

const setBlurBarZero = () => {
  controlBar.value = 0;
  document.documentElement.style.setProperty(`--${controlBar.name}`, '30px');
}

const toggleOpen = function() {
  setBlurBarZero();
  if (selectedPic.length === 0) {
    this.classList.add('open');
  } else if (selectedPic.length === 1) {
    this.classList.remove('open');
  } else {
    return;
  }
}

pictures.forEach(photo => photo.addEventListener('click', toggleOpen));

const changeValue = function () {
  if (selectedPic.length === 1) {
    document.documentElement.style.setProperty(`--${this.name}`, (30 - this.value) + 'px');
  } else {
    return;
  }
}

controlBar.addEventListener('change', changeValue);
controlBar.addEventListener('mousemove', changeValue);