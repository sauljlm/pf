let RC="no";
let nueva="si";
RC=prompt("desea realizar un acompra, si o no ?")
while((RC!= "si") && (RC!= "no")){
  RC=prompt("error ingrese si o no");
}
if (RC=="si"){
  if (nueva=="si"){
    while(nueva=="si"){
      let tipos=["matematicas","sociales","fisica"];
      let cantidad=[];
      let precios =[2000,5000,4000];
      let descuento;
      let cantidad_total =0;
      let total_a_pagar =0;
      let a=0;
      let nombre = prompt("ingrese el nombre del cliente");
      while(!(isNaN(nombre))){
        nombre=prompt("error ingrese un nombre valido");
      }
      let id = prompt("ingrese su ID");
      total_a_pagar=parseInt(total_a_pagar);
      let subtotal_sin_descuento =0;
      let Tcliente = prompt("ingrese el tipo de cliente (1,2 o 3)?");
      Tcliente=parseInt(Tcliente);
      //si desea libros
      for(let i=0; i<tipos.length; i++){
        let materia = prompt("desea libros de " + tipos[i] + "?");
        while((materia!= "si")&&(materia!="no")){
          materia=prompt("error desea libros de " + tipos[i] + "? ingrese si o no");
        }
        if(materia == "si"){
          cantidad_total =parseInt(prompt("cuantos desea comprar ?"));
          while(isNaN(cantidad_total)){
            cantidad_total=parseInt(prompt("Error ingrese un valor numerico ,cuantos libros de " + tipos[i] + " desea comprar  ?"));
          }
          cantidad.push(cantidad_total); 
          a =parseInt(a);
          a += cantidad_total;
        }
      }
      switch(Tcliente){
        case 1:
          descuento =30;
          break;
        case 2:
          descuento =20;
          break;
        case 3:
          descuento =10;
          break;
        default:
          descuento  =0;
          break;
        }
      cantidad_total=a;
      //subtotal sin descuento
      for(let i=0;i<cantidad.length; i++){
        descuento[i]=parseInt(descuento[i]);
        tipos[i]=parseInt(tipos[i]);
        subtotal_sin_descuento = subtotal_sin_descuento + (cantidad[i]*precios[i]);
      }
      total_a_pagar=subtotal_sin_descuento - ((subtotal_sin_descuento*descuento)/100);
      
      console.log("El nombre de usuario es " + nombre);
      console.log("La cantidad de libros es " + cantidad_total);
      console.log("El subtotal si descuento es " + subtotal_sin_descuento);
      console.log("El descuento es de " + descuento);
      console.log("El total a pagar es " + total_a_pagar);
      nueva=prompt("Desea realizar una nieva compra?,si desea terminar el programa ingrese ( q )");
      while((nueva!= "si")&&(nueva!= "q")){
        nombre=prompt("error ingrese si o q");
      }
    }
    
  }
}


