// 3.	La inmobiliaria “Sucasa” es una empresa dedicada a la compraventa de casas. 
// Hacer un programa en JavaScript que cumpla los siguientes requisitos o características 
// (programa básico-simulación): a. Solicitar al usuario el costo de la casa. 
 // b.	Solicitar al usuario el ingreso del tipo de inmueble (1. Usado 2. Nuevo) 
 // c.	Calcular la comisión de la inmobiliaria en la venta así: 
 // •	Si es usado, tiene el 10% de comisión basado en el costo de la vivienda. 
 // •	Si es nuevo, tiene el 12% de la comisión basado en el costo de la vivienda. 
 // d.	El sistema debe mostrar al usuario cuanto es el valor que recibe el propietario y cuanto es el valor recibido por la inmobiliaria.  
  
 let costo = parseInt(prompt(`ingrese el costo de la casa `));
 
function calcularLacomision() {
    let tipoDeinmueble = parseInt(prompt(`que tipo de inmueble quiere 1. usado, 2. nuevo`));

  if (tipoDeinmueble === 1){
    alert(`como es usado tiene el 10% de descuento el valor que recibe la inmobiliaria es ${costo*0.1} y el valor que recibe el propietario es ${costo*0.9}`);

}else if(tipoDeinmueble === 2){
    alert(`como es nuevo tiene 12% de descuento el valor que recibe la inmobiliaria es ${costo*0.12} y el valor que recibe el propietario es ${costo*0.88}`);
}
}
calcularLacomision() 