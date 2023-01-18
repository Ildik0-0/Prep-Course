// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:} 
  /*The slice() method returns a shallow copy of a portion of an array into a new array
   object selected from start to end ( end not included) where start and end represent the index of items in that array */

 return nombre[0].toUpperCase() + nombre.slice(1)
 
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:

 var nombre = 'hola mario'
 cb(nombre) //cb = callback



}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  cb(n1, n2)

}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
   var suma = numeros.reduce(function (a, b){
    return a + b;
   })
   cb(suma)
  
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(ele, index) {
    return cb(ele);
  })
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevo = array.map(function(ele, index){
    return cb(ele)
  })
  return nuevo;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

  /*var filtro = array.filter(array => array == a)
  return filtro*/
  var nuevo2 = [];
  for(let i = 0; i<array.length; i++) {
    if(array[i][0] === "a") {
      nuevo2.push(array[i])
    }
  }
  return nuevo2;


}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
