function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');
    const links = nav.querySelectorAll('.nav-link');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.documentElement.classList.toggle('no-scroll');
	};

    links.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.toggle('mobile-nav--open');
            menuIcon.classList.toggle('nav-icon--active');
            document.documentElement.classList.toggle('no-scroll'); 
        })
    })
}

export default mobileNav;