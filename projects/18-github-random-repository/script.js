import languages from './languages.json' with { type : 'json' };

const PER_PAGE = 100;
const container = document.querySelector('.container');

function resetView() {
  const message = document.querySelector('.message');
  const card = document.querySelector('.card');
  const retry = document.querySelector('.retry');
  if (message) message.remove();
  if (card) card.remove();
  if (retry) retry.remove();
}

function renderElement(tag, classes, textContent, handleEvent) {
  const el = createElement(tag, classes, textContent, handleEvent);
  container.append(el);
}

function renderCard(repository) {
  const card = createElement('div', ['card']);
  const cardTitle = createElement('h2', ['card__title'], repository.name);
  const cardDescription = createElement(
    'p',
    ['card__description'],
    repository.description
  );
  const cardInfo = createElement('div', ['card__info']);

  [
    `💻 ${repository.language}`,
    `⭐ ${repository.stargazers_count}`,
    `🔀 ${repository.forks_count}`,
    `⚠️ ${repository.open_issues_count}`,
  ].forEach((data) => {
    const cardInfoData = createElement('span', ['card__info-data'], data);
    cardInfo.append(cardInfoData);
  });

  card.append(cardTitle, cardDescription, cardInfo);
  container.append(card);
}

function createElement(tagName, classes = [], textContent = '', handleEvent) {
  const el = document.createElement(tagName);
  if (classes.length) el.classList.add(...classes.filter(Boolean));
  if (textContent) el.textContent = textContent;
  if (handleEvent) el.addEventListener('click', handleEvent);
  return el;
}

async function showRepository(language) {
  try {
    resetView();
    renderElement('p', ['message'], 'Loading, please wait...');
    const randomPage = Math.floor(Math.random() * 10) + 1;
    const url = `https://api.github.com/search/repositories?q=language:${language}&per_page=${PER_PAGE}&page=${randomPage}`;
    const response = await fetch(url);
    const data = await response.json();
    const repos = data.items || [];

    resetView();

    if (repos.length) {
      const randomIndex = Math.floor(Math.random() * repos.length);
      renderCard(repos[randomIndex]);
      renderElement('button', ['retry'], 'Refresh', () =>
        showRepository(language)
      );
    } else {
      renderElement(
        'p',
        ['message'],
        'Repository not found. Try another language.'
      );
    }
  } catch (error) {
    resetView();
    renderElement(
      'p',
      ['message', 'message--error'],
      'Error fetching repositories'
    );
    renderElement('button', ['retry', 'retry--error'], 'Click to retry', () =>
      showRepository(language)
    );
  }
}

function selectInit() {
  const trigger = document.querySelector('.select__trigger');
  const options = document.querySelector('.select__options');
  const caret = document.querySelector('.select__caret');
  const label = document.querySelector('.select__label');

  if (languages && languages.length) {
    languages.forEach((language) => {
      const option = document.createElement('li');
      option.textContent = language.title;
      option.dataset.value = language.value;
      option.classList.add('select__option');
      options.append(option);
    });
  }

  const optionItems = document.querySelectorAll('.select__option');

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
    const language = event.target.dataset.value;
    showRepository(language);
    removeCheckMarks();
    label.textContent = event.target.textContent;
    event.target.classList.add('select__option--opened');
    toggleSelect();
  };

  optionItems.forEach((option) => {
    option.addEventListener('click', handleCheck);
  });

  trigger.addEventListener('click', toggleSelect);
}

function init() {
  selectInit();
  renderElement('p', ['message'], 'Please select a language');
}

init();
