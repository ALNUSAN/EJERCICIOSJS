/**
 * Realizar el pedido de 4 datos personales:
Nombre
Edad
Pais
Habilidad

el campo habilidad ponen si es zurda o derecha la persona

el algoritmo es una beca que solo se le dara a personas de colombia o ecuador

mayores de 18 años

y que sea zurda 

debe salir mensaje de 

"Quedas registrado al cupo de la beca"
"No cumples los requisitos"

 */
// Declaramos las variables
let Name = prompt ("Ingresa tu nombre");
const age = prompt("Ingresa tu Edad");
let country =prompt("Ingresa tu país").toLowerCase();
const ability =prompt("Eres Zurda o Derecha").toLowerCase();

// condificional if/else
if (country !=="colombia" && country !== "ecuador" && age < "18" && ability !== "Derecha") {
     
    alert("No cumples los requisitos")
} else {
    alert("Quedas registrado al cupo de la beca")
}

