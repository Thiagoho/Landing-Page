const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let atual = 2;
let autoPlay;

function atualizarCarrossel() {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));
    slides[atual].classList.add("active");
    dots[atual].classList.add("active");
}

function avancar() {
    atual = (atual + 1) % slides.length;
    atualizarCarrossel();
}

function recuar() {
    atual = (atual - 1 + slides.length) % slides.length;
    atualizarCarrossel();
}

function iniciarAutoPlay() {
    autoPlay = setInterval(avancar, 3000);
}

function reiniciarAutoPlay() {
    clearInterval(autoPlay);
    iniciarAutoPlay();
}

nextBtn.addEventListener("click", () => { avancar(); reiniciarAutoPlay(); });
prevBtn.addEventListener("click", () => { recuar(); reiniciarAutoPlay(); });

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        atual = i;
        atualizarCarrossel();
        reiniciarAutoPlay();
    });
});

iniciarAutoPlay();
