// 4.	“Lavan Ya” es un servicio de limpieza en el que los clientes envían sus prendas para que se laven y se planchen
//  en un lugar determinado. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características 
//  (programa básico-simulación): 
// a.	El cliente escoge entre dos servicios: lavado o planchado. 
// b.	Si es lavado, se solicita el tipo de lavado 1. En seco o 2. Normal 
// c.	Se solicita la cantidad de prendas. 
// d.	Se calcula el costo de los servicios teniendo en cuenta la lista de precios: 
// •	Lavado en seco: 2000 por prenda 
// •	Lavado normal: 1500 por prenda 
// •	Planchado: 1800 por prenda 
// e.	Adicional se cobra un domicilio de 3000 solo si es planchado; para otros servicios es gratis. 
 
//  let servicio = parseInt(prompt(`escoja entre dos servicios 1.lavado, 2.planchado`));

// function escogerServicio(){
//     if (servicio === 1) {
        
//         let tipoDelavado =parseInt(prompt(`solicite el tipo de lavado 1.seco, 2. normal`));
//         let cantidad = parseInt(prompt(`ingrese la cantidad de prendas`));
//         if (tipoDelavado === 1){
//             alert(`el costo del servicio es ${2000*cantidad} su servicio a domicilio es gratis`)
//         }else if (tipo Delavado===2){
//             alert(`el costo del servicio es ${1500*cantidad} su servicio a domicilio es gratis`)
//         } 
//     }else if(servicio===2){
//         let cantidad = parseInt(prompt(`ingrese la cantidad de prendas`)); 
//         alert(`el costo del servicio es ${1800*cantidad} su costo de domicilio es 3000 el total del servicio es ${1800*cantidad+3000}`) 
//     }
// }
// escogerServicio()
let servicio =prompt(`que tipo de servicio desea adquirir lavado o planchado`);
function tipoDeservicio() { 
    if(servicio ===`lavado`){
        let tipoDelavado =parseInt(prompt(`solicite el lavado ` + `\n` + `1.lavado seco`+ `\n` + `2.lavado normal`));
        let cantidad = parseInt(prompt(`ingrese la cantidad de prendas`));

        switch(tipoDelavado){
            case 1:{
                alert(`el costo del servicio es ${2000*cantidad} su servicio a domicilio es gratis`);break;}
                
            case 2:{
                    alert(`el costo del servicio es ${1500*cantidad} su servicio a domicilio es gratis`);break}
      
          
            
        }
        

        if(servicio ===`planchado`){
            let total = cantidad*1800
            let domicilio=3000
            let totalFinal = total+domicilio
            let cantidad = parseInt(prompt(`ingrese la cantidad de prendas`));

            alert(`el servicio total es: ${total} y su total con el domocilio es de ${totalFinal}`)
        } 
    }
}
    tipoDeservicio()
    









