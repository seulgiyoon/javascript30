const inputs = document.querySelectorAll('.controls input');

const handleUpdate = function() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

inputs.forEach(node => node.addEventListener('change', handleUpdate));
inputs.forEach(node => node.addEventListener('mousemove', handleUpdate));