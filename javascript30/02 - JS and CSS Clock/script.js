const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hands = document.querySelectorAll('.hand');

const setDate = () => {
  const now = new Date();

  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  const secondDegree = ((second / 60) * 360) + 90;
  const minuteDegree = ((minute / 60) * 360) + 90;
  const hourDegree = ((hour / 12) * 360) + 90;

  if (secondDegree === 90 || minuteDegree === 90 || hourDegree === 90) {
    hands.forEach(element => element.style.transition = 'none');
  } else {
    hands.forEach(element => element.style.transition = '');
  }

  minHand.style.transform = `rotate(${minuteDegree}deg)`;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);


