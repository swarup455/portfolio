const btn = document.querySelector('.menu-button');
const bar = document.querySelector('.side-bar-list');
const closeBtn = document.querySelector('.closeIcon');

btn.addEventListener('click', () => {
    bar.classList.add('active');
}, false);

closeBtn.addEventListener('click', () => {
    bar.classList.remove('active');
}, false);

// Close the sidebar when clicking outside of it
document.addEventListener('click', (event) => {
    if (!bar.contains(event.target) && !btn.contains(event.target)) {
        bar.classList.remove('active');
    }
});
