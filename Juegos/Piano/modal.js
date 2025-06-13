// Mostrar el modal solo en dispositivos móviles
window.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('welcomeModal');
    const acceptButton = document.getElementById('acceptButton');

    const esDispositivoMovil = () => {
        return window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent);
    };

    if (esDispositivoMovil()) {
        modal.showModal();
    }

    acceptButton.addEventListener('click', () => {
        modal.close();
    });
});
