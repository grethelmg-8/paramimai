document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const intro = document.getElementById("intro");
    const cartaTexto = document.getElementById("carta-texto");
    const heartBtn = document.getElementById("heart-btn");

    const brilloAudio = new Audio("brillo.mp3");
    const papelAudio = new Audio("papel.mp3");

    startBtn.addEventListener("click", () => {
        brilloAudio.play();
        intro.style.display = "none"; // Oculta el intro permanentemente
    });

    heartBtn.addEventListener("click", () => {
        if (cartaTexto.classList.contains("hidden")) {
            papelAudio.play();
            cartaTexto.classList.remove("hidden");
            cartaTexto.classList.add("visible");
        } else {
            cartaTexto.classList.add("hidden");
            cartaTexto.classList.remove("visible");
        }
    });
});


