const DEFAULT_INDEX = 0;

const contentList = document.querySelectorAll('.tabs__content');
const buttons = document.querySelectorAll('.tabs__btn');

const showContent = (index) =>
  contentList[index].classList.add('tabs__content--show');
const activateButton = (index) =>
  buttons[index].classList.add('tabs__btn--active');
const hideAllContent = () =>
  contentList.forEach((item) => item.classList.remove('tabs__content--show'));
const deactivateAllButtons = () =>
  buttons.forEach((btn) => btn.classList.remove('tabs__btn--active'));

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    hideAllContent();
    deactivateAllButtons();
    showContent(index);
    activateButton(index);
  });
});

activateButton(DEFAULT_INDEX);
showContent(DEFAULT_INDEX);
