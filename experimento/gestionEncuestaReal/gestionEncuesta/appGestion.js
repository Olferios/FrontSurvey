// ESTE ES PARA LA LISTAS DEJE SELECCIONADO EL CARACTE
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Previene el comportamiento por defecto del enlace

        // Obtener el botón del dropdown
        const button = this.closest('.btn-group').querySelector('.dropdown-toggle');

        // Actualizar el texto del botón con el valor del ítem seleccionado
        button.textContent = this.textContent;
    });
});

document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(button => {
    button.addEventListener('click', event => {
      const targetId = event.target.getAttribute('data-bs-target');
      const collapseElements = document.querySelectorAll('.collapse');
      collapseElements.forEach(collapse => {
        if (collapse.id !== targetId.substring(1)) {
          collapse.classList.remove('show');
        }
      });
    });
  });
