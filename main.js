const minutes_per_day = 1440;
const ms_per_minute = 60000;

const til_minute = (new Date() | 0) % ms_per_minute;
const remainder_el = document.querySelector('#remainder');
const proportion_el = document.querySelector('#proportion');

function update() {
  const now = new Date();
  const minutes_elapsed = ((now.getHours() * 60) + now.getMinutes());
  const minutes_remaining = minutes_per_day - minutes_elapsed;
  remainder_el.textContent = minutes_remaining;
  proportion_el.textContent = (((minutes_elapsed / minutes_per_day) * 100) | 0) + '%';
}

setTimeout(() => {
  update();
  // every 60 seconds
  setInterval(update, ms_per_minute);
}, til_minute);

update();
