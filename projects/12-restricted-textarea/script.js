const LIMIT = 10;

const counter = document.querySelector('.counter');
const textarea = document.querySelector('textarea');

function validateTextareaLength(event) {
  const length = event.target.value.length;

  if (length >= LIMIT) {
    textarea.classList.add('blocked');
    counter.classList.add('blocked');
    textarea.setAttribute('maxlength', LIMIT);
  } else {
    textarea.classList.remove('blocked');
    counter.classList.remove('blocked');
    textarea.removeAttribute('maxlength');
  }

  changeCounter(length);
}

function changeCounter(length = 0) {
  counter.textContent = `${length} / ${LIMIT}`;
}

changeCounter();

textarea.addEventListener('input', validateTextareaLength);
