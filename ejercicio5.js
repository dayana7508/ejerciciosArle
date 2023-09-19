// 5.	Los sticker son etiquetas adhesivas diseñadas para ser pegadas en objetos, como lápices, libretas, 
// cuadernos, pizarras, muebles, etc. Se utilizan para decorar y personalizar los productos de una manera barata y 
// sencilla. Hacer un programa en JavaScript que cumpla los siguientes requisitos 
// o características (programa básicosimulación): 
// a.	Se solicita al usuario el tamaño del stikers, pequeño o grande. 
// 	• 	Costo pequeño es de 4000 y costo del grande 6000 
// b.	Se pide al usuario la cantidad de estikers teniendo en cuenta que solo se pueden enviar mínimo 10; 
// Sino debe indicarse al usuario un numero correcto. 
// c.	El sistema debe arrojar cuanto es el costo total para pagar  

let tamaño = prompt(`de que tamaño desea su stiker? ` + "\n" + `seleccione` + "\n" + `1.para tamaño pequeño` + "\n" + `2.para tamaño grande`);
let cantidad = parseInt(prompt(`cuantos stikers desea comprar?`));

while (cantidad<10){
    alert(`solo puedes comprar minimo 10 stikers`)
    let cantidad = parseInt(prompt(`cuantos stikers desea comprar?`));

    if(tamaño === 1){
        let precio1 = 4000
        alert(`el valor del sticker es de ${precio1} el costo total de pedido es de ${precio1*cantidad}`);
    }else if(tamaño === 2){
        let precio2 = 6000
        alert(`el valor del sticker es de ${precio2} el costo total de pedido es de ${precio2*cantidad}`);
    }
        
}