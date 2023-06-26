const mobileIcon = document.querySelector(`.header-menuMobile`);
const menuMobile = document.querySelector(`.navMobile`);


mobileIcon.addEventListener(`click`, () => {
    if (menuMobile.style.display === 'none') {
        menuMobile.classList.remove('fecharNavMobile');
        menuMobile.classList.add('abrirNavMobile');
        menuMobile.style.display = 'block';
    } else {
        menuMobile.classList.remove('abrirNavMobile');
        menuMobile.classList.add('fecharNavMobile');
        setTimeout(() => {
            menuMobile.style.display = 'none';
        }, 300)
    }
})