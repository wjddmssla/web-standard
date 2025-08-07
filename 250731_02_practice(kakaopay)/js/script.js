const menuBtn = document.querySelector('.menu-btn');
const gnb = document.querySelector('.gnb');

menuBtn.addEventListener('click', () => {
    gnb.classList.toggle('show');
});
