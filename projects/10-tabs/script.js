const DEFAULT_INDEX = 0;

document.addEventListener('DOMContentLoaded', () => {
    const contentList = document.querySelectorAll('.tabs__content');
    const buttons = document.querySelectorAll('.tabs__btn');

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            hideAllContent();
            deactivateAllButtons();
            showContent(index);
            activateButton(index);
        });
    });

    function showContent(index = DEFAULT_INDEX) {
        contentList[index].classList.add('tabs__content--show');
    }

    function activateButton(index = DEFAULT_INDEX) {
        buttons[index].classList.add('tabs__btn--active');
    }

    function hideAllContent() {
        contentList.forEach((contentItem) => {
            contentItem.classList.remove('tabs__content--show');
        });
    }

    function deactivateAllButtons() {
        buttons.forEach((button) => {
            button.classList.remove('tabs__btn--active');
        });
    }

    activateButton();
    showContent();
});

