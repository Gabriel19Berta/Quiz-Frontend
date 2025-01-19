// Animação de carregamento
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("toggle");
    const body = document.body;

    // Função para aplicar o tema com base no estado salvo
    const applyTheme = (theme) => {
        if (theme === "dark") {
            body.classList.add("dark-mode");
            toggle.checked = true;
        } else {
            body.classList.remove("dark-mode");
            toggle.checked = false;
        }
    };

    // Carregar o tema ao iniciar a página
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    // Alterar o tema e salvar no Local Storage
    toggle.addEventListener("change", () => {
        const newTheme = toggle.checked ? "dark" : "light";
        body.classList.toggle("dark-mode", toggle.checked);
        localStorage.setItem("theme", newTheme);
    });

    // Gerenciar o menu (código permanece o mesmo)
    const menuNav = document.querySelector('.menu-nav');
    const menuOptions = document.querySelector('.menu-options');

    menuNav.addEventListener('click', (event) => {
        event.stopPropagation();
        menuOptions.classList.toggle('open');
    });

    document.addEventListener('click', () => {
        if (menuOptions.classList.contains('open')) {
            menuOptions.classList.remove('open');
        }
    });
});