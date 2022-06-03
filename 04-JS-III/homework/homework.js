// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  let arreglo = array
  
 return arreglo[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  let arreglo = array

  return arreglo[arreglo.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
   let arreglo = array

   return arreglo.length;
}



function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let NewArray = [];
  for(let i = 0; i < array.length; i++) {
    NewArray[i] = array[i] + 1;
  }

  return NewArray;

}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
   let arreglo= array;
  arreglo.push(elemento);

    return arreglo;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  let arreglo= array;
  arreglo.unshift(elemento);

   return arreglo;

}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
 let palabra = palabras.toString();
  let palabra2 = palabra.replace(/,/g ," ");
   
  return palabra2;

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let i = 0; i < array.length; i++) {
      if (array[i] === elemento) {
          return true;
      }
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let arreglo = 0;

  for (let i = 0; i < numeros.length; i++) {
    arreglo += numeros[i];
}
   
   return  arreglo;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  return agregarNumeros(resultadosTest) / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let mayor = 0;
  for(i = 0; i < numeros.length; i++){
    if (numeros[i] > mayor)
    {
        mayor = numeros[i];
    };
}
   return mayor; 
 }


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let multiplicar = 0;
 if(arguments.length < 1){
  return multiplicar
  }else{
     multiplicar = 1;
     for (let i = 0; i < arguments.length; i++) {
       multiplicar  = multiplicar * arguments[i];
     }
  }
  return multiplicar;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
  let x = 0;
  for (let i = 0; i < arreglo.length ; i++) {
    if(arreglo[i] > 19){
      x++;
    }
  }
  return x;
 }


 function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  // [1, 2, 3, 4, 5, 6, 7]  
  switch (numeroDeDia) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      numeroDeDia = "Es dia Laboral";
      break;
  case 1:
  case 7:
    numeroDeDia = "Es fin de semana"; 
    break
    default:
      numeroDeDia = "No es un dia de la semana";
      break;
  }
  return numeroDeDia;
} 



function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let numero = n.toString()

  if(numero.charAt(0) === "9"){
    return true
  }
  return false
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  let array = arreglo;
  for (let i = 0; i < array.length - 1; i++) {
      if (array[i] !== array[i+1]) {
         return false;
      }
  }
  return true;
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let calendario = [];
  for(let i= 0; i < array.length; i++) {
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      calendario.push(array[i]);
    }
  }
  if(calendario.length < 3) {
    return "No se encontraron los meses pedidos";
  }
  else {
      return calendario;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let mayorCien = [];

  for(let i= 0; i < array.length; i++) {
    if(array[i] > 100) {
      mayorCien.push(array[i]);
    }
  }
  return mayorCien;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  
  //no lo pude resolver con let :c , tuve que usar var ajuro
  let array = [];
  let sumar = numero;

  for(var i= 0; i < 10; i++) {
    sumar = sumar + 2;

    if(sumar === i) break;
    else {
      array.push(sumar);
    }
  }

  if(i < 10) {
    return "Se interrumpió la ejecución";
  }
  else {
      return array;
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var sumar = numero;

  for(let i = 0; i < 10; i++) {
  
    if(i === 5){
       continue;
    }
    else {
      sumar = sumar + 2;
      array.push(sumar);
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
