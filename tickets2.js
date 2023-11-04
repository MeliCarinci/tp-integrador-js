const cantidadEntradas = document.getElementById('cantidad');

const calcular = document.getElementById('botonCalcular');

const categoria = document.getElementById('tipoDescuento');

const totalCompra = document.getElementById('totalCompra')

function resumen(){

  const cantidad = parseInt(cantidadEntradas.value);
  const categoriaSeleccionada = categoria.value;

  let descuento = 0;
  switch (categoriaSeleccionada) {
    case "estudiante":
      descuento = 0.8;
      break;
    case "trainee":
      descuento = 0.5;
      break;
    case "junior":
      descuento = 0.15;
      break;
    default:
      descuento = 0;
  }

  const precioUnitario = 200;
  const total = cantidad * precioUnitario * (1 - descuento);

  totalCompra.innerHTML = `Total a Pagar: $${total}`;
}

calcular.addEventListener('click', resumen);

  
const botonBorrar = document.querySelector('button[type="reset"]');
botonBorrar.addEventListener('click', function () {
  cantidadEntradas.value = ''; // Restablece la cantidad
  categoria.value = 'estudiante'; // Restablece la categoría
  totalCompra.innerHTML = 'Total a Pagar $'; // Borra el total
  nombreInput.value = ''; // Restablece el nombre
  apellidoInput.value = ''; // Restablece el apellido
  correoInput.value = ''; // Restablece el correo
});