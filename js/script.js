// Simple smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecionar o botão do menu mobile e o menu de navegação
    const mobileMenuButton = document.querySelector('.md\\:hidden');
    const navMenu = document.querySelector('.hidden.md\\:flex');
    
    // Adicionar evento de clique ao botão do menu
    mobileMenuButton.addEventListener('click', function() {
        // Alternar a classe 'hidden' no menu de navegação
        if (navMenu.classList.contains('hidden')) {
            navMenu.classList.remove('hidden');
            navMenu.classList.add('flex', 'flex-col', 'absolute', 'top-16', 'right-0', 'bg-white', 'w-full', 'p-4', 'shadow-md', 'space-y-4', 'space-x-0');
        } else {
            navMenu.classList.add('hidden');
            navMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-16', 'right-0', 'bg-white', 'w-full', 'p-4', 'shadow-md', 'space-y-4', 'space-x-0');
        }
    });
    
    // Fechar o menu quando um link for clicado (opcional)
    const navLinks = document.querySelectorAll('.hidden.md\\:flex a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.add('hidden');
            navMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-16', 'right-0', 'bg-white', 'w-full', 'p-4', 'shadow-md', 'space-y-4', 'space-x-0');
        });
    });
});

// Botão Voltar ao Topo
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});