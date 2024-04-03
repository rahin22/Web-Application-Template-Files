// Scroll Top Button

function showScrollTop(){
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        document.getElementById('scrollTop').style.opacity = '1';
        document.getElementById('scrollTop').style.visibility = 'visible';
    } else{
        document.getElementById('scrollTop').style.opacity = '0';
        document.getElementById('scrollTop').style.visibility = 'hidden'; 
    }
}

window.addEventListener('scroll', showScrollTop)

function scrollToTop(){
    window.scrollTo(0,0);
}


// Navbar change on scroll to colour

function changeHoverColor(newColor) {
    const root = document.documentElement;
    root.style.setProperty('--nav-hover-color', newColor);
}

function changeSearchColor(newColor2) {
    const root = document.documentElement;
    root.style.setProperty('--search-bar-color', newColor2);
}

let nav = document.querySelector('nav');

function changeHeader() {
    if (document.body.scrollTop > 50) {
        nav.classList.add('change-header');
        changeHoverColor('#ffff');
        changeSearchColor('#0065b9');


    } else if (document.documentElement.scrollTop > 50) {
        nav.classList.add('change-header');
        changeHoverColor('#ffff');
        changeSearchColor('#0065b9');
    }
    else {
        nav.classList.remove('change-header');
        changeHoverColor('#0065b9');
        changeSearchColor('#ffff');
    }
}
window.addEventListener('scroll', changeHeader)


// Slide In Animations

const inViewport = (entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.toggle('is-inViewport', entry.isIntersecting);
    })
}

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {};

const ELs_inViewport = document.querySelectorAll('[data-inViewport]');
ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
});

function homeRedir(){
    window.location.href = "/#home";

}