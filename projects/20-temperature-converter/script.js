// Celsius ↔ Fahrenheit
const celsiusToFahrenheit = (c) => (c * 9) / 5 + 32;
const fahrenheitToCelsius = (f) => ((f - 32) * 5) / 9;

// Celsius ↔ Kelvin
const celsiusToKelvin = (c) => c + 273.15;
const kelvinToCelsius = (k) => k - 273.15;

// Fahrenheit ↔ Kelvin
const fahrenheitToKelvin = (f) => ((f - 32) * 5) / 9 + 273.15;
const kelvinToFahrenheit = (k) => ((k - 273.15) * 9) / 5 + 32;

const form = document.querySelector('.form');
const button = form.querySelector('.form__submit');
const result = document.querySelector('.result');

function showResult(value, convertedValue, from, to) {
  const text = `${value} ${from} is ${Math.floor(convertedValue)} ${to}`;
  result.textContent = text;
}

function convertTemperature(value, from, to) {
  switch (true) {
    case from === 'Fahrenheit' && to === 'Celsius':
      return fahrenheitToCelsius(value);
    case from === 'Fahrenheit' && to === 'Kelvin':
      return fahrenheitToKelvin(value);
    case from === 'Celsius' && to === 'Fahrenheit':
      return celsiusToFahrenheit(+value);
    case from === 'Celsius' && to === 'Kelvin':
      return celsiusToKelvin(value);
    case from === 'Kelvin' && to === 'Fahrenheit':
      return kelvinToFahrenheit(value);
    case from === 'Kelvin' && to === 'Celsius':
      return kelvinToCelsius(value);
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const values = [...formData.values()];
  let convertedValue = convertTemperature(values[0], values[1], values[2]);

  if (values[1] === values[2]) {
    result.textContent = 'Incorrect values. Try other options.';
    return;
  }

  showResult(values[0], convertedValue, values[1], values[2]);
}

function checkFormValidity() {
  button.disabled = !form.checkValidity();
}

form.addEventListener('input', checkFormValidity);
form.addEventListener('submit', handleSubmit);
