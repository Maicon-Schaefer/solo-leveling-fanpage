const toggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.cabecalho-textos ul');

toggle.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});

document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // impede o comportamento padrão
        const targetId = this.getAttribute('href'); // pega o href (ex: #sinopse)
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


