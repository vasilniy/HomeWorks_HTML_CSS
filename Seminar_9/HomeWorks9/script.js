const navDropMenuEl = document.querySelector('.nav_drop_menu');
const dropMenuEl = document.querySelector('.drop_menu');
console.log(navDropMenuEl);

navDropMenuEl.addEventListener('click', e => {
    dropMenuEl.classList.toggle('menu_block');
    console.log(e.target);
})