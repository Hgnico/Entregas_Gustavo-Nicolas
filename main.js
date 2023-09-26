//Calcular el costo de los productos a cobra enuna venta//
function cobroProductos() {
  const cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos que lleva el cliente:"));
  if (isNaN(cantidadProductos) || cantidadProductos < 1){
    alert("Dato incorrecto. Recorda que debe ser un valor mayor o igual a 1");
    return
  }
  let costoTotal = 0;
  for (let i = 1; i <= cantidadProductos; i++) {
    const precioProducto = parseFloat(prompt(`Ingrese el precio del producto ${i}:`));
    costoTotal += precioProducto;
      if (isNaN(precioProducto) ){
      alert("El precio ingresado es inválido. Inténte nuevamente.");
      return
      }
    }
    let dineroIngresado = parseFloat(prompt("El costo total es $ " + costoTotal +" Ingresa el dinero recibido para completar la operación")); 
    if (isNaN(dineroIngresado) ){
      alert("El dinero ingresado es inválido. Inténte nuevamente.");
      return
        }
      while (dineroIngresado < costoTotal) {
      const dineroFaltante = costoTotal - dineroIngresado;
      alert("El monto ingresado es menor al valor total, faltan " + dineroFaltante);
      dineroIngresado = parseFloat(prompt("Ingresa nuevamente, recuerda que el valor total es " + costoTotal));
          if (isNaN(dineroIngresado) ){
              alert("El nuevo monto ingresado es inválido. Inténte nuevamente. ");
          return } }
    const vuelto = dineroIngresado - costoTotal;
    alert("Operación realizada con exito, El vuelto es $ " + vuelto);
}
cobroProductos();


