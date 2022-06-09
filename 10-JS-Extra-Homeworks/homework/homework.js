// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
   let matriz = Object.keys(objeto).map(function (key) {
        return [key, objeto[key]];
   })

    return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let arreglo = Array.from(string);
  

  let caracteres = arreglo.reduce(function(contador, letra){
     contador[letra] = (contador[letra] || 0) + 1;
     return contador;
  },{});

  return caracteres;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let arreglo = [];
  for (let i in  s) {
     if (s[i] === s[i].toUpperCase()) {
       arreglo.push(s[i]);
     }
  }

  for (let i in s) {
    if (s[i] !== s[i].toUpperCase()) {
      arreglo.push(s[i]);
    }    
  }
   return arreglo.toString().replace(/,/g, "");
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí 
  let comvercion = str.split(" ");
  let i =0;
  let newArreglo=[];
  // let arreglo;
  let arreglo2;
  for(x = 0; x < comvercion.length; x++){
    i= x;
     
    let arreglo = str.split(" ")[i];    
        newArreglo +=`${arreglo} `;
    let resultado = newArreglo.split("").reverse().join("");
        arreglo2 = resultado.split(" ").reverse().join(" ").trim();
   
  }
    
  return arreglo2; 
}

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let num = numero.toString();
  let num2 = "";
   num2 = num.split("").reverse().join("");
  if(num === num2){
    return "Es capicua"
  }else{
    return "No es capicua"
  }
}



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  const arreglo= [/a/g, /b/g, /c/g];
  const letra1 = cadena.replace(arreglo[0], "");
  const letra2 = letra1.replace(arreglo[1], "");
  const letra3 = letra2.replace(arreglo[2], "");

  return letra3;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let arreglo =[];
  
   for (let i = 0; i < arr.length - 1; i++) {
      for (let b = 0; b < arr.length - 1; b++) {
          if (arr[b].length > arr[b + 1].length) {
            arreglo = arr[b];
            arr[b] = arr[b + 1];
            arr[b + 1] = arreglo;
          }        
      }     
   }
 
   return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
   
  let nuevoArray = [];

  for (let i = 0; i < arreglo1.length; i++) {
      for (let j = 0; j < arreglo2.length; j++) {
           if (arreglo2[j] == arreglo1[i]) {
             nuevoArray.push(arreglo2[j]);
           }        
      }    
  }

  return nuevoArray;
} 



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

