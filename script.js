// Obtener elementos del DOM
const confirmButton = document.getElementById("confirmButton");
const cancelButton = document.getElementById("cancelButton");

const confirmModal = document.getElementById("myModal");
const cancelModal = document.getElementById("cancelModal");

const closeModal = document.getElementById("closeModal");
const closeCancelModal = document.getElementById("closeCancelModal");


// Abrir el modal cuando se haga clic en el botón
confirmButton.addEventListener("click", function() {
    confirmModal.style.display = "flex";
});

// Cerrar el modal cuando se haga clic en la "X"
closeModal.addEventListener("click", function() {
    confirmModal.style.display = "none";
});

// Cerrar el modal si el usuario hace clic fuera del contenido del modal
window.addEventListener("click", function(event) {
    if (event.target === confirmModal) {
        confirmModal.style.display = "none";
    }
});



cancelButton.addEventListener("click", function() {
    cancelModal.style.display = "flex";
});

// Cerrar el modal cuando se haga clic en la "X"
closeCancelModal.addEventListener("click", function() {
    cancelModal.style.display = "none";
});

// Cerrar el modal si el usuario hace clic fuera del contenido del modal
window.addEventListener("click", function(event) {
    if (event.target === confirmModal) {
        cancelModal.style.display = "none";
    }
});
