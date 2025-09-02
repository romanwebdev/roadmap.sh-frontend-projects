const trigger = document.querySelector('.select__trigger');
const options = document.querySelector('.select__options');
const optionItems = document.querySelectorAll('.select__option');
const caret = document.querySelector('.select__caret');
const label = document.querySelector('.select__label');

const toggleSelect = () => {
  options.classList.toggle('select__options--opened');
  caret.classList.toggle('select__caret--opened');
};

const removeCheckMarks = () => {
  optionItems.forEach((option) => {
    option.classList.remove('select__option--opened');
  });
};

const handleCheck = (event) => {
  removeCheckMarks();
  label.textContent = event.target.textContent;
  event.target.classList.add('select__option--opened');
  toggleSelect();
};

optionItems.forEach((option) => {
  option.addEventListener('click', handleCheck);
});

trigger.addEventListener('click', toggleSelect);
