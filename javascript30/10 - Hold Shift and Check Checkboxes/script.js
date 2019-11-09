const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
const checkboxesArr = Array.from(checkboxes);

const getCheckedList = function (event) {
  if (event.shiftKey) {
    const checked = checkboxesArr.map(input => input.checked);
    const start = checked.indexOf(true);
    const end = checked.lastIndexOf(true);
    
    for (let i = start; i < end; i++) {
      checkboxesArr[i].checked = true;
    }
  } else {
    return;
  }
}

// window.addEventListener('click', getCheckedList);

// -------- Wes Bos Code -----------
let lastChecked;

const handleCheck = function(event) {
  let inBetween = false;
  if (event.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  } 
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
