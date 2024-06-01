document.addEventListener('DOMContentLoaded', function() {
    const hintButton = document.querySelector('.hint');
    const hintContainer = document.querySelector('.assistance');

    hintButton.addEventListener('click', function() {
        hintContainer.classList.toggle('show-hint');
    });
});
