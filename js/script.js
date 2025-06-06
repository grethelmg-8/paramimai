document.addEventListener("DOMContentLoaded", () => {
    const cartaTexto = document.getElementById("carta-texto");
    const heartBtn = document.getElementById("heart-btn");
    const brilloAudio = new Audio("brillo.mp3");
    const papelAudio = new Audio("papel.mp3");

    // Espera el primer clic del usuario para activar el audio de brillo
    const iniciarSonido = () => {
        brilloAudio.play();
        document.removeEventListener("click", iniciarSonido);
    };
    document.addEventListener("click", iniciarSonido);

    // Mostrar la carta automáticamente
    cartaTexto.classList.remove("hidden");
    cartaTexto.classList.add("visible");

    // Corazón para mostrar/ocultar con sonido de papel
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