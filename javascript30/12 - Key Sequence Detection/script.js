const pressed = [];
const secretCode = 'christmas'

window.addEventListener('keyup', (event) => {
  pressed.push(event.key);

  if (pressed.length > secretCode.length) {
    pressed.shift();
  }

  if (pressed.join('') === secretCode) {
    cornify_add();
  }

  // pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  
  // if (pressed.join('').includes(secretCode)) {
  //   cornify_add();
  // }
});