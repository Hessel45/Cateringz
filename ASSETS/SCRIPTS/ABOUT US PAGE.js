document.addEventListener('DOMContentLoaded', function() {
    const readMoreButton = document.querySelector('.read-more');
    const moreText = document.querySelector('.more-text');

    readMoreButton.addEventListener('click', function() {
        if (moreText.style.display === 'none' || moreText.style.display === '') {
            moreText.style.display = 'block';
            readMoreButton.textContent = 'Read Less';
        } else {
            moreText.style.display = 'none';
            readMoreButton.textContent = 'Read More';
        }
    });
});
