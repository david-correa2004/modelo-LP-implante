const nav = document.querySelector("header");
const sections = document.querySelectorAll('section');
const a_nav = document.querySelectorAll('#a_nav');
const whatsflut = document.querySelector(".btn-flut");
const openBtn = document.querySelector('#menu__btn');
const lis = document.querySelectorAll("#sidebar__nav ul li");
const sidebarNav = document.querySelector("#sidebar__nav");

window.onscroll = () => {
    if (window.scrollY > 0) {
        nav.dataset.active = "true"
        whatsflut.dataset.active = "true"
    } else {
        nav.dataset.active = "false"
        whatsflut.dataset.active = "false"
    };
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            a_nav.forEach(links => {
                links.classList.remove('active');
                document.querySelector('#a_nav[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

lis.forEach(li => {
    li.onclick = () => {
        sidebarNav.dataset.active = "false";
    }
})

openBtn.onclick = () => {

    openBtn.style.bacground = '#000';

    if (openBtn.dataset.active === 'false') {
        
        openBtn.dataset.active = 'true';
        sidebarNav.dataset.active = 'true';

    } else {

        openBtn.dataset.active = 'false';
        sidebarNav.dataset.active = 'false';
        
    };
}
a_nav.forEach(links => {
    links.onclick = () => {
        if (sidebarNav.dataset.active === 'false') {

            openBtn.dataset.active = 'true';

        } else {

            openBtn.dataset.active = 'false';

        };
    }
});