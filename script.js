
/* ------------------------------------------------------------------------------------------------------------------------*/
(function trocaAdjetivo() {
    var words = {
        'pt-br': ["Graduando em Ciências da Computação", "Desenvolvedor full-stack", "Entusiasta de games"],
        'en': ["Computer Science student", "Full-stack developer", "Gaming enthusiast"]
    };
    var i = 0;
    setInterval(function trocapalavra() {
        $('#words').fadeOut(function () {
            $(this).html(words[document.documentElement.lang][(i = (i + 1) % words[document.documentElement.lang].length)]).fadeIn();
        });
    }, 3000)
})();

/* ------------------------------------------------------------------------------------------------------------------------*/




/* ------------------------------------------------------------------------------------------------------------------------*/
const carrossel = document.querySelector(".carrossel");


let arrasto = false, comecoX, comecoScrollLeft;

function comecoarrastando(event) {
    arrasto = true;
    carrossel.classList.add("dragging");
    comecoX = event.clientX;
}

function arrastando(event) {
    if (arrasto) {
        const diferencaX = event.clientX - comecoX;


        if (Math.abs(diferencaX) > 100) {

            if (diferencaX > 0) {
                antBtn.click();
            }
            else {
                proxBtn.click();
            }

            comecoX = event.clientX;
            arrasto = false;
        }
    }
}

function paroarrastando() {
    arrasto = false;
    carrossel.classList.remove("dragging");
}
/* ---------------------------------------------------------------------------------------------------slides = carrossel  container = wrapper  slide = card (html todos)---------------------*/
let atualSlide = document.querySelector(".card"),
    index = 1;

const
    slides = Array.from(carrossel.children),
    proxBtn = document.querySelector(".fa-angle-right"),
    antBtn = document.querySelector(".fa-angle-left"),
    slideWidth = slides[0].getBoundingClientRect().width,
    proxSlide = atualSlide.nextElementSibling,
    antSlide = atualSlide.previousElementSibling,
    amountToMove = proxSlide.clientWidth;

const primClone = slides[0].cloneNode(true);
const ultClone = slides[slides.length - 1].cloneNode(true);

primClone.id = "first-clone";
ultClone.id = "last-clone";

carrossel.append(primClone);
carrossel.prepend(ultClone);

proxBtn.addEventListener("click", j => {
    let proxSlide = atualSlide.nextElementSibling;

    if (!proxSlide) {
        proxSlide = slides[0];
    }

    const proxSlideIndex = slides.indexOf(proxSlide);
    const proxSlidePosition = proxSlideIndex * slideWidth;
    carrossel.scrollTo({ left: proxSlidePosition, behavior: 'smooth' });

    atualSlide = proxSlide;
});

antBtn.addEventListener("click", j => {
    let antSlide = atualSlide.previousElementSibling;

    if (!antSlide) {
        antSlide = slides[slides.length - 1];
    }

    const antSlideIndex = slides.indexOf(antSlide);
    const antSlidePosition = antSlideIndex * slideWidth;
    carrossel.scrollTo({ left: antSlidePosition, behavior: 'smooth' });

    atualSlide = antSlide;
});

/* ------------------------------------------------------------------------------------------------------------------------*/

let tempo = 1000,
    autoplayInterval = setInterval(() => { proxBtn.click(); }, tempo);


carrossel.onmouseenter = function (e) {
    clearInterval(autoplayInterval);
}

carrossel.onmouseleave = function (e) {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(() => { proxBtn.click(); }, tempo);
}

proxBtn.onmouseenter = function (e) {
    clearInterval(autoplayInterval);
}
proxBtn.onmouseleave = function (e) {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(() => { proxBtn.click(); }, tempo);
}

antBtn.onmouseenter = function (e) {
    clearInterval(autoplayInterval);
}
antBtn.onmouseleave = function (e) {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(() => { proxBtn.click(); }, tempo);
}


/* ------------------------------------------------------------------------------------------------------------------------*/
carrossel.addEventListener("mousedown", comecoarrastando);
carrossel.addEventListener("mousemove", arrastando);
document.addEventListener("mouseup", paroarrastando);


document.addEventListener("DOMContentLoaded", function () {
    const brFlag = document.querySelector('.br-flag');
    const enFlag = document.querySelector('.en-flag');
    const linguaselecionada = document.querySelector('.lingua-selecionada');

    const words = {
        'pt-br': {
            'titulo': "Olá! Sou João Pedro Marinho",
            'paragrafos': [
                "Aficionado em <strong>experiências únicas e customizáveis</strong>, busco entregar esse sentimento fazendo com que cada projeto tenha alma.",
                "Por isso <strong>almejo projetos que transcendam a simples funcionalidade</strong>; desafios únicos que me permitam alcançar um nível ainda maior de habilidades.",
                "Meu objetivo não é apenas desenvolver software, mas também <strong>cultivar experiências que ressoem com o público-alvo</strong>, assim deixando minha marca no mundo."
            ],
            'footerFeitoPor': 'Feito por João Pedro Marinho',
            'footerDesignPor': 'Design por <a href="https://www.instagram.com/giovannavel/" target="_blank">Giovanna Vellemen</a>',
            'menuHome': 'Home',
            'menuProjetos': 'Projetos',
            'acessarRedes': 'Acesse minhas redes:'
        },
        'en': {
            'titulo': "Hi! I'm João Pedro Marinho",
            'paragrafos': [
                "An enthusiast of <strong>unique and customizable experiences</strong>, I seek to deliver this feeling by making each project soulful.",
                "That's why <strong> I aim for projects that transcend simple functionality</strong>; unique challenges that allow me to reach an even higher level of skill.",
                "My goal is not only to develop software, but also to <strong>cultivate experiences that resonate with the target audience</strong>, this way leaving my mark on the world."
            ],
            'footerFeitoPor': 'Made by João Pedro Marinho',
            'footerDesignPor': 'Design by <a href="https://www.instagram.com/giovannavel/" target="_blank">Giovanna Vellemen</a>',
            'menuHome': 'Home',
            'menuProjetos': 'Projects',
            'acessarRedes': 'Access my social networks:'
        }
    };

    brFlag.addEventListener('click', function () {
        changeLanguage('pt-br');
    });

    enFlag.addEventListener('click', function () {
        changeLanguage('en');
    });

    function changeLanguage(lang) {
        document.documentElement.lang = lang;

        document.querySelector('.Apresentacao__conteudo__titulo').innerHTML = words[lang]['titulo'];
        const paragrafos = document.querySelectorAll('.Apresentacao__conteudo__p1');
        paragrafos.forEach(function (paragrafo, index) {
            paragrafo.innerHTML = words[lang]['paragrafos'][index];
        });
        document.querySelector('.Footer p:nth-child(1)').innerHTML = words[lang]['footerFeitoPor'];
        document.querySelector('.Footer p:nth-child(2)').innerHTML = words[lang]['footerDesignPor'];
        document.querySelector('.Links__Titulo').innerHTML = words[lang]['acessarRedes'];
        linguaselecionada.textContent = lang.toUpperCase();
    }
});