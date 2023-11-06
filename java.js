// Obtener la entrada del usuario
var edad = prompt("Ingrese su edad:");

// Convertir la entrada a un número
edad = parseInt(edad);

// Verificar si tiene 18 años o más
if (edad >= 18) {
    console.log("Tiene la edad suficiente para conducir.");
} else {
    // Calcular cuántos años le faltan para cumplir 18
    var añosRestantes = 18 - edad;
    console.log("Te faltan " + añosRestantes + " años para poder conducir.");
}



// Obtener la edad del usuario
var myAge = prompt("Ingresa tu edad:");

// Convertir la entrada a un número
myAge = parseInt(myAge);

// Obtener la edad del otro usuario (tú)
var yourAge = prompt("Ingresa la edad del otro usuario:");

// Convertir la entrada a un número
yourAge = parseInt(yourAge);

// Comparar las edades y mostrar el resultado
if (myAge > yourAge) {
    console.log("Eres " + (myAge - yourAge) + " años mayor que el otro usuario.");
} else if (myAge < yourAge) {
    console.log("Eres " + (yourAge - myAge) + " años menor que el otro usuario.");
} else {
    console.log("Ambos tienen la misma edad.");
}


var a = 5;
var b = 2;

function compararConIfElse() {
    if (a > b) {
        return 'a es mayor que b';
    } else {
        return 'a es menor que b';
    }
}

// Ejemplo de uso
var resultadoIfElse = compararConIfElse();
console.log(resultadoIfElse);

var a = 5;
var b = 10;

function compararConOperadorTernario() {
    return a > b ? 'a es mayor que b' : 'a es menor que b';
}

// Ejemplo de uso
var resultadoTernario = compararConOperadorTernario();
console.log(resultadoTernario);



// Obtener el mes del usuario
var mes = prompt("Ingresa el mes:");

// Convertir la entrada a minúsculas para manejar entradas en mayúsculas y minúsculas
mes = mes.toLowerCase();

// Determinar la temporada según el mes
var temporada;

if (mes === "septiembre" || mes === "octubre" || mes === "noviembre") {
    temporada = "Otoño";
} else if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
    temporada = "Invierno";
} else if (mes === "marzo" || mes === "abril" || mes === "mayo") {
    temporada = "Primavera";
} else if (mes === "junio" || mes === "julio" || mes === "agosto") {
    temporada = "Verano";
} else {
    temporada = "Mes no válido";
}

// Mostrar la temporada en la consola
console.log("La temporada es: " + temporada);



// Obtener el puntaje del estudiante
var puntaje = prompt("Ingresa el puntaje del estudiante:");

// Convertir la entrada a un número
puntaje = parseInt(puntaje);

// Calificar al estudiante
var calificacion;

if (puntaje >= 80 && puntaje <= 100) {
    calificacion = 'A';
} else if (puntaje >= 70 && puntaje < 80) {
    calificacion = 'B';
} else if (puntaje >= 60 && puntaje < 70) {
    calificacion = 'C';
} else if (puntaje >= 50 && puntaje < 60) {
    calificacion = 'D';
} else if (puntaje >= 0 && puntaje < 50) {
    calificacion = 'F';
} else {
    calificacion = 'Puntaje no válido';
}

// Mostrar la calificación en la consola
console.log("La calificación es: " + calificacion);