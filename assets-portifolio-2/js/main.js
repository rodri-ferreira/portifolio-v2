import {imagens, subtitulos, textos, deployLinks} from './infosProjetos.js'

const btnMenu = document.querySelector('.header-btn_menu');
const nav = document.querySelector('.header-nav-ul');
const fecharModal = document.querySelector(".btn-fechar");
const modal = document.querySelector('.projeto-dialog');

//header menu nav
btnMenu.addEventListener('click', () => {
    nav.classList.toggle('ativar-menu');
    mudarCorHeader();
})

const mudarCorHeader = () => {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY;
    
    if(scrollPosition > 40) {
        header.style.boxShadow = "0 1px 4px 0 rgba(0, 0, 0, 0.5)"
        header.style.transition = "0.5s"
        header.style.backgroundColor = "#fefefe";
        btnMenu.style.backgroundColor = "transparent";
    } else {    
        header.style.boxShadow = "none"
        header.style.transition = "0.5s"
        header.style.backgroundColor = "#ffffff";
    }
}

const verificarTamanhoJanela = () => {
    return window.innerWidth;   
}

window.addEventListener("resize", () => {
    const larguraJanela = verificarTamanhoJanela() 
    if(larguraJanela > 768) {
        nav.style.backgroundColor = "transparent";
        nav.style.boxShadow = "none"
    } else {
        nav.style.backgroundColor = "#f9f9f9";
        nav.style.boxShadow = "0 1px 4px 0 rgba(0, 0, 0, 0.5)";
    }
})

document.addEventListener('scroll', mudarCorHeader);
//header menu nav

//carrossel
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

const cardProjeto = document.querySelectorAll('.projeto-img');
const btnProjeto = document.querySelectorAll('.btn-projeto');

cardProjeto.forEach((e, i)=> {
    e.addEventListener('mouseover', ()=> {
        e.style.opacity = ".5"
        btnProjeto[i].style.display='block'
    })

    e.addEventListener('mouseout', ()=> {
        e.style.opacity = "1"
        btnProjeto[i].style.display='none'
    })
})

btnProjeto.forEach((e, i)=> {
    e.addEventListener('mouseover', ()=> {
        e.style.display="block"
        cardProjeto[i].style.opacity = ".5"        
    })

    e.addEventListener('mouseout', ()=> {
        e.style.display="none"
        cardProjeto[i].style.opacity = "1"        
    })

    e.addEventListener("click", (evento) => {
        modal.show()
        mostrarInfosDinamicasModal(evento)
    })
})

fecharModal.addEventListener('click', ()=> {
    modal.close()
})
//carrossel

//dialog dinamico
const mostrarInfosDinamicasModal = (evento) => {
    const imgDiaglog = document.querySelector('.img-dialog');
    const subtitulosDialog = document.querySelector('.subtitulo-projetos-dialog');
    const textoDialog = document.querySelector('.texto-projetos-dialog');
    const atributoIndex = evento.target.getAttribute('data-index');
    const btnLinks = document.querySelector('.deploy-link')
    
    imgDiaglog.src = imagens[atributoIndex];
    subtitulosDialog.textContent = subtitulos[atributoIndex];
    textoDialog.textContent= textos[atributoIndex];
    btnLinks.href = deployLinks[atributoIndex];
}
//dialog dinamico