const burger = document.querySelector('#burger');
const burgerBtn = document.querySelector('.burger');
const hero = document.querySelector('.hero');
burger.addEventListener('click', (e) => {
hero.classList.toggle('show');
burgerBtn.classList.toggle('checked');
})