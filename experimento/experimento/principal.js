
function abrirModal() {
  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  myModal.show();
}

document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.needs-validation');
  
    // Campo de entrada para "First name"
    var firstNameInput = document.getElementById('validationServer01');
    
    // Campo de entrada para "Apellidos"
    var lastNameInput = document.getElementById('validationServer02');
  
    // Evento de escucha para el campo de entrada "First name"
    firstNameInput.addEventListener('input', function () {
      validateTextInput(firstNameInput);
    });
  
    // Evento de escucha para el campo de entrada "Apellidos"
    lastNameInput.addEventListener('input', function () {
      validateTextInput(lastNameInput);
    });
  
    // Función para validar entradas de texto
    function validateTextInput(inputElement) {
      var regex = /^[a-zA-Z\s]*$/;
  
      // Verificar si el valor actual coincide con el regex
      if (!regex.test(inputElement.value)) {
        // Si no coincide, elimina el último carácter ingresado
        inputElement.value = inputElement.value.slice(0, -1);
        inputElement.classList.add('is-invalid');
        inputElement.classList.remove('is-valid');
      } else {
        inputElement.classList.add('is-valid');
        inputElement.classList.remove('is-invalid');
      }
    }
  
    // Añade el evento de escucha para la validación al enviar el formulario
    if (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    }
  
    // Selección del menú desplegable y contenedor de preguntas adicionales
    var selectMenu = document.getElementById('selectExample');
    var additionalQuestions = document.getElementById('additionalQuestions');
  
    // Detectar cambios en el menú desplegable
    selectMenu.addEventListener('change', function () {
      // Mostrar u ocultar preguntas adicionales en función de la opción seleccionada
      if (selectMenu.value === '1') {
        additionalQuestions.style.display = 'block';
      } else {
        additionalQuestions.style.display = 'none';
      }
    });
  });
  
  