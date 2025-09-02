import './style.css';
import datepicker from 'js-datepicker';
import { DateTime } from 'luxon';

const btn = document.querySelector('.form__submit');
const resultEl = document.querySelector('.result');
let selectedDate;

datepicker('.datepicker', {
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString();
    input.value = value;
  },
  onSelect: (instance, date) => {
    selectedDate = date;
    btn.removeAttribute('disabled');
  },
});

const showAge = () => {
  const end = DateTime.now();
  const result = end.diff(DateTime.fromISO(selectedDate.toISOString()), [
    'years',
    'months',
  ]);

  if (result) {
    const months = Math.floor(result.months);
    const isValid =
      result.years < 0 ||
      result.months < 0 ||
      (result.years === 0 && months === 0);

    if (isValid) {
      resultEl.textContent = 'Wrong date. Try again';
    } else if (result.years === 0 && months > 0) {
      resultEl.textContent = `You are ${months} ${
        months > 1 ? 'months' : 'month'
      } old`;
    } else {
      resultEl.textContent = `You are ${result.years} ${
        result.years > 1 ? 'years' : 'year'
      } ${months} ${months > 1 ? 'months' : 'month'} old`;
    }
  }
};

btn.addEventListener('click', showAge);
