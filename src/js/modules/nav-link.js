function addActive() {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            // Сначала удаляем класс 'active' у всех ссылок
            links.forEach(link => link.classList.remove('active'));

            // Добавляем класс 'active' только на кликнутую ссылку
            event.target.classList.add('active');
        });
    });
}

export default addActive;
