function highlightLinkOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        // Цикл по всем секциям для проверки, какая сейчас в зоне видимости
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const header = document.querySelector('.header');

            // Если верхняя часть секции на экране или выше него
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            } else if (window.scrollY > 0) {
                header.style.background = 'rgba(255, 255, 255, 1)';
            } else {
                header.style.background = 'transparent';
            }
        });

        // Удаление класса 'active' у всех ссылок
        navLinks.forEach(link => {
            link.classList.remove('active');

            // Добавление класса 'active' к соответствующей ссылке
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    });
}

export default highlightLinkOnScroll;
