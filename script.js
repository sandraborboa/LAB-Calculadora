
// Inicio
let num1 = parseFloat(prompt("Introduzca el primer número: \n"));
let num2 = parseFloat(prompt("Introduzca el siguiente número: \n"));
let operacion = prompt("¿Qué operación deseas realizar? ( + │ - │ * │ / )")

// Funciones para operaciones
function add(a, b) {
        return a + b;
    }
    
function subtract(a, b) {
        return a - b;
    }

function multiply(a, b) {
        return a * b;
    }

function divide(a, b) {
        // Verificar que num2 no sea 0
        if (b == 0) {
            return "No se puede dividir entre 0.";
        }
        else {
            return a / b;
        }
    }

switch (operacion) {

    case "+":
        result = add(num1, num2);
        break;

    case "-":
        result = subtract(num1, num2);
        break;
    
    case "*":
        result = multiply(num1, num2);
        break;

    case "/":
        result = divide(num1, num2);
        break;
    
}

// Se imprime el resultado en la consola
console.log(`Resultado: ${result}`);

// Fin