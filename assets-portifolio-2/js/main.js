const btnMenu = document.querySelector('.header-btn_menu');
const nav = document.querySelector('.header-nav-ul');

btnMenu.addEventListener('click', () => {
    mudarCorHeader()
    nav.classList.toggle('ativar-menu');
})

const mudarCorHeader = () => {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY;
    const widthTela = window.innerWidth;
    
    if(scrollPosition > 40) {
        if(widthTela <  768) {
            nav.style.backgroundColor = "#f9f9f9";
            nav.style.boxShadow = "0 1px 4px 0 rgba(0, 0, 0, 0.5)";
        };
        header.style.boxShadow = "0 1px 4px 0 rgba(0, 0, 0, 0.5)"
        header.style.transition = "0.5s"
        header.style.backgroundColor = "#fefefe";
        btnMenu.style.backgroundColor = "transparent";
    } else {    
        if(widthTela <  768) {
            nav.style.backgroundColor = "#ffffff";
        } else {
            nav.style.backgroundColor = "transparent";
        }
        header.style.boxShadow = "none"
        header.style.transition = "0.5s"
        header.style.backgroundColor = "#ffffff";
    }
}

document.addEventListener('scroll', mudarCorHeader);


document.addEventListener('DOMContentLoaded', function() {
    let stream = document.querySelector('.carrossel-fluxo');
    let items = document.querySelectorAll('.carrossel-card');

    const prev = document.querySelector('.carrossel-anterior');
    prev.addEventListener('click', function() {
        stream.insertBefore(items[items.length - 1], items[0]);
        items = document.querySelectorAll('.carrossel-card');
    });

    const next = document.querySelector('.carrossel-proximo');
    next.addEventListener('click', function() {
        stream.appendChild(items[0]);
        items = document.querySelectorAll('.carrossel-card');
    });
});
