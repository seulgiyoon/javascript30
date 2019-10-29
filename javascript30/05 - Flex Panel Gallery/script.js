const panels = document.querySelectorAll('.panel');

const toggleOpen = function() {
  this.classList.toggle('open');
}

const toggleActive = function(event) {
  if (event.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(node => node.addEventListener('click', toggleOpen));
panels.forEach(node => node.addEventListener('transitionend', toggleActive));