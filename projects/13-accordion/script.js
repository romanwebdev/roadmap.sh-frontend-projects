const DEFAULT_INDEX = 0;

const accordionItems = document.querySelectorAll('.accordion__item');
const accordionHeaderBtns = document.querySelectorAll('.accordion__header-btn');

function toggleAccordionContent(index = DEFAULT_INDEX) {
  accordionItems.forEach((item, itemIndex) => {
    const accordionContent = item.querySelector('.accordion__content');
    const accordionCaret = item.querySelector('.accordion__caret');

    if (
      itemIndex === index &&
      !accordionContent.classList.contains('accordion__content--open')
    ) {
      accordionContent.classList.add('accordion__content--open');
      accordionCaret.classList.add('accordion__caret--down');
    } else {
      accordionContent.classList.remove('accordion__content--open');
      accordionCaret.classList.remove('accordion__caret--down');
    }
  });
}

accordionHeaderBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    toggleAccordionContent(index);
  });
});

toggleAccordionContent();
