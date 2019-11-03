const pictures = document.querySelectorAll('.photo');
const controlBar = document.querySelector('#blur');

const setBlurBarZero = () => {
  controlBar.value = 0;
  document.documentElement.style.setProperty(`--${controlBar.name}`, '30px');
}

const toggleOpen = function() {
  setBlurBarZero();  
  this.classList.toggle('open');
}

pictures.forEach(photo => photo.addEventListener('click', toggleOpen));


const changeValue = function () {
  const selectedPic = document.getElementsByClassName('open');
  if (selectedPic.length === 1) {
    document.documentElement.style.setProperty(`--${this.name}`, (30 - this.value) + 'px');
  } else {
    return;
  }
}

controlBar.addEventListener('change', changeValue);
controlBar.addEventListener('mousemove', changeValue);