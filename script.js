const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.mobile-menu');
const open = document.querySelector('#openIcon');
const close = document.querySelector('#closeIcon');

menuBtn.addEventListener('click', ()=>{
    menu.classList.toggle("show");
    const isOpen = menu.classList.contains('show');

    open.style.display = isOpen ? 'none' : 'inline';
    close.style.display = isOpen ? 'inline' : 'none';
}, false)