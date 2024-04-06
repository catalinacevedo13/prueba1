$("#enviar").on("click", function () {
    alert("El mensaje fue enviado correctamente...");
});

$("#toggleColumns").click(function () { // Se selecciona el h3 por su ID
    $(".container .row").toggle(); // Alternar la visibilidad de las columnas al hacer clic en el h3
});

$("#face").on("click", function () {
    alert("Serás dirigido a nuestra página de Facebook...");
});

$("#twitter").on("click", function () {
    alert("Serás dirigido a nuestra página de Twitter...");
});

$("#lk").on("click", function () {
    alert("Serás dirigido a nuestra página de linkedin...");
});

$("#gh").on("click", function () {
    alert("Serás dirigido a nuestra página de GitHub...");
});