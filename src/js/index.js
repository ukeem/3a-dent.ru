// Мобильная навигация
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    // Глобальные настройки:
    disable: false, // принимает следующие значения: 'phone', 'tablet', 'mobile', boolean, выражение или функцию
    startEvent: 'load', // имя события, которое запускается в документе и с которого должна начаться инициализация AOS
    initClassName: 'aos-init', // класс, который применяется после инициализации
    animatedClassName: 'aos-animate', // класс, который применяется при анимации
    useClassNames: false, // если true, добавит содержимое атрибута `data-aos` в качестве классов при прокрутке
    disableMutationObserver: false, // отключает автоматическое обнаружение изменений (продвинутая настройка)
    debounceDelay: 50, // задержка дебаунса при изменении размера окна (продвинутая настройка)
    throttleDelay: 99, // задержка троттлинга при прокрутке страницы (продвинутая настройка)

    // Настройки, которые можно переопределить для каждого элемента с помощью атрибутов `data-aos-*`:
    offset: 0, // отступ (в пикселях) от исходной точки срабатывания
    delay: 50, // значения от 0 до 3000 с шагом 50мс
    duration: 700, // значения от 0 до 3000 с шагом 50мс
    easing: 'linear', // стандартная функция плавности для анимаций AOS
    once: false, // должна ли анимация происходить только один раз при прокрутке вниз
    mirror: true, // должна ли анимация повторяться при прокрутке назад
    anchorPlacement: 'center-bottom', // определяет, какая позиция элемента относительно окна должна сработать для запуска анимации
});
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import mobileNav from './modules/mobile-nav.js';
import addActive from './modules/nav-link.js';
import highlightLinkOnScroll from './modules/scrollAddClass.js';
mobileNav();
addActive();
highlightLinkOnScroll();

window.addEventListener('load', () => {
    const hero__img = new Swiper('.hero__img', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "fade",
    })

    const results__slider = new Swiper('.results__slider', {
        breakpoints: {
            425: {
                slidesPerView: 1.2,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 2.2,
                spaceBetween: 12,
            },
            1024: {
                slidesPerView: 3.2,
                spaceBetween: 12,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 12,
            },
        },
        slidesPerView: 1.2,
        spaceBetween: 12,
        loop: true,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
    })
    const reviews__slider = new Swiper('.reviews__slider', {
        breakpoints: {
            425: {
                slidesPerView: 1.2,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 2.2,
                spaceBetween: 12,
            },
            1024: {
                slidesPerView: 3.2,
                spaceBetween: 12,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 12,
            },
        },
        slidesPerView: 1.2,
        spaceBetween: 12,
        loop: true,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
    })

    const specialists__slider1 = new Swiper('.specialists__slider1', {
        breakpoints: {
            768: {
                slidesPerView: 2.2,
                spaceBetween: 12,
            },
            1024: {
                slidesPerView: 3.2,
                spaceBetween: 12,
            },
            1200: {
                slidesPerView: 2,
            }
        },
        slidesPerView: 1.2,
        spaceBetween: 12,
        loop: true,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
    })
    const specialists__slider2 = new Swiper('.specialists__slider2', {
        breakpoints: {
            768: {
                slidesPerView: 2.2,
                spaceBetween: 12,
            },
            1024: {
                slidesPerView: 3.2,
                spaceBetween: 12,
            },
            1200: {
                slidesPerView: 2,
            }
        },
        slidesPerView: 1.2,
        spaceBetween: 12,
        loop: true,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
        },
    })

    // Модальное окно
    const imageModal = document.getElementById('imageModal');
    const sendModal = document.getElementById('sendModal');
    const closeModals = document.querySelectorAll('.close');
    const slides = document.querySelectorAll('.swiper-slide img');
    const btns = document.querySelectorAll('.btn');
    const modals = document.querySelectorAll('.modal');
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    openModal(slides, imageModal);
    openModal(btns, sendModal);
    function openModal(elems, modal) {
        elems.forEach(elem => {
            elem.addEventListener('click', (event) => {
                const target = event.target;
                modal.style.display = 'flex';
                document.documentElement.classList.add('no-scroll');
                document.documentElement.style.width = `calc(100vw - ${scrollbarWidth}px)`;
                document.body.style.width = `calc(100vw - ${scrollbarWidth}px)`;
                document.querySelector('.header').style.width = `calc(100vw - ${scrollbarWidth}px)`;
                // Проверяем, если клик был по <img> элементу
                if (target.tagName === 'IMG') {
                    modal.querySelector('img').src = target.src; // Используем target.src вместо this.src
                    setTimeout(() => {
                        modal.querySelector('img').style.opacity = '1';
                    }, 10);
                } else {
                    setTimeout(() => {
                        modal.querySelector('.modalContacts').style.opacity = '1';
                    }, 10);
                }
                setTimeout(() => {
                    modal.style.opacity = '1';
                }, 10);
            });
        });
    }

    // Закрыть модальное окно
    closeModals.forEach(closeBtn => {
        closeBtn.addEventListener('click', closeModal);
    });

    function closeModal() {
        modals.forEach(modal => {
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.display = 'none';
                document.documentElement.classList.remove('no-scroll');
                document.documentElement.style.width = `100%`;
                document.body.style.width = `100%`;
                document.querySelector('.header').style.width = `100%`;
            }, 300); // Убираем модальное окно через 500 мс
        });
    }

    // Закрыть модальное окно при клике вне изображения
    window.addEventListener('click', function (event) {
        modals.forEach(modal => {
            // Проверяем, кликнули ли мы по модальному окну, но не по его содержимому
            if (event.target === modal) {
                modal.style.opacity = '0';
                setTimeout(() => {
                    modal.style.display = 'none';
                    document.documentElement.classList.remove('no-scroll');
                    document.documentElement.style.width = `100%`;
                    document.body.style.width = `100%`;
                    document.querySelector('.header').style.width = `100%`;
                }, 300);
            }
        });
    });




    const paragraphs = document.querySelectorAll('.reviews__content');
    const maxLength = 220;
    paragraphs.forEach(paragraph => {
        if (paragraph.textContent.length > maxLength) {
            paragraph.textContent = paragraph.textContent.slice(0, maxLength) + '...';
        }
    })

})