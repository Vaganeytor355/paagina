// Galería

function abrirModal(imagenSrc, descripcion) {
    const modal = document.getElementById('modal');
    const imagenModal = document.getElementById('imagenModal');
    const descripcionModal = document.getElementById('descripcionModal');

    imagenModal.src = imagenSrc;
    descripcionModal.innerHTML = descripcion;
    modal.style.display = 'block';
}

function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}