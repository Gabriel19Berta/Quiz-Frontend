document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggle");
    const body = document.body;

    toggle.addEventListener("change", () => {
      body.classList.toggle("dark-mode");
    });

    const menuNav = document.querySelector('.menu-nav');
    const menuOptions = document.querySelector('.menu-options');

    // Abre/fecha o menu ao clicar no botão
    menuNav.addEventListener('click', (event) => {
        event.stopPropagation();
        menuOptions.classList.toggle('open');
    });

    // Fecha o menu ao clicar fora
    document.addEventListener('click', () => {
        if (menuOptions.classList.contains('open')) {
            menuOptions.classList.remove('open');
        }
    });
});