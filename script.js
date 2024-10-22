document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;

        // Cerrar otros acordeones abiertos
        document.querySelectorAll('.accordion-item').forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
            }
        });

        // Alternar el estado del acordeón seleccionado
        item.classList.toggle('active');
    });
});
