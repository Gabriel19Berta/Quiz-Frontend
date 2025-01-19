function setupLoader() {
    // Seleciona o elemento de carregamento e o conteúdo principal
    const loader = document.getElementById("wifi-loader");
    const mainContent = document.querySelectorAll("body > :not(#wifi-loader)");
  
    // Esconde o conteúdo principal inicialmente
    mainContent.forEach(element => element.style.display = "none");
  
    // Aguarda o carregamento completo da página
    window.onload = () => {
      // Esconde o carregador
      loader.style.display = "none";
  
      // Exibe o conteúdo principal
      mainContent.forEach(element => element.style.display = "");
    };
}
document.addEventListener("DOMContentLoaded", setupLoader);