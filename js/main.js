// Función para sumar dos números
function sumar(a, b) {

// Error intencional: deberia ser a + b
return a + b; 
}

// Prueba de la función sumar
function testSumar() { 
let num1 = 5;
let num2 = 2;


// Llamada a la función y almacenamiento del resultado
 let resultado = sumar(num1, num2)

    
 // Mostrar el resultado
console.log("El resultado de sumar " + num1 + " y " + num2 + " es: " + resultado);
}

testSumar();