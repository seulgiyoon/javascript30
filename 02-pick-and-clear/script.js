const pictures = document.querySelectorAll('.photo');
const toggleOpen = function() {
  this.classList.toggle('open');
  this.classList.toggle('selected-img');
}

pictures.forEach(photo => photo.addEventListener('click', toggleOpen));

const controlBar = document.querySelector('#blur');
const changeValue = function () {
  const selectedPic = document.getElementsByClassName('open');
  if (!selectedPic) { return; }
  document.documentElement.style.setProperty(`--${this.name}`, (30 - this.value) + 'px');
}

controlBar.addEventListener('change', changeValue);