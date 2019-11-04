const pictures = document.querySelectorAll('.photo');
const controlBar = document.querySelector('#blur');
const selectedPic = document.getElementsByClassName('open');

const setBlurBarZero = () => {
  controlBar.value = 0;
  document.documentElement.style.setProperty(`--${controlBar.name}`, '30px');
}

const toggleOpen = function() {
  if (selectedPic.length === 0) {
    setBlurBarZero();
    controlBar.focus();
    this.classList.add('open');
  } else if (selectedPic.length === 1) {
    this.classList.remove('open');
  } else {
    return;
  }
}

const toggleOpenWithEnter = function (event) {
  if (event.key === 'Enter') {
    toggleOpen.call(this);
  } else {
    return;
  }
}

pictures.forEach(photo => photo.addEventListener('click', toggleOpen));
pictures.forEach(photo => photo.addEventListener('keydown', toggleOpenWithEnter));


const changeValue = function () {
  if (selectedPic.length === 1) {
    document.documentElement.style.setProperty(`--${this.name}`, (30 - this.value) + 'px');
  } else {
    return;
  }
}

const focusSelectedPic = function () {
  if (event.key === 'Enter') {
    selectedPic[0].focus();
  } else {
    return;
  }
}

controlBar.addEventListener('change', changeValue);
controlBar.addEventListener('mousemove', changeValue);
controlBar.addEventListener('keydown', focusSelectedPic);