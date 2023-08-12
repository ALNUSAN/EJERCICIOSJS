// condicionales
/**  
 * Operadores de comparacion 
 * (==) sirve para comparar valores sin importar el tipo de dato 
 * (===) compara el dato, valor o texto asignado y el tipo de dato 
 * (>) Mayor que 
 * (>) Menor que 
 * (>=) Mayor igual
 * (<=) Menor igual
 * (!=)   Diferente ( no respeta tipos de datos solo el valor que este dentro )
 * (!==)   Diferente (respeta tipos de dato)

/**
 * Operadores lógicos
 * (||) - O ( cualquiera de las condiciones es válida)
 * (&&) - Y ( si o si se debe cumplir las condicione)
 * 
 */

// Declaramos la variable edad
const age = prompt("Ingresa tu Edad");
const country = prompt("Ingresa tu país").toLowerCase();

// condificional if/else
if (age >= "16" && country !== "alemania") {
  alert("Se habilito el catalogo de peliculas violentas");
} else {
  alert("No tienes permiso para ver este catalogo");
}

// NOTA: Mayusculas ( el codigo es sensible con mayusculas y minusculas)
/** Las tildes toca controlarlo manualmente y los espacios
 * convertir tipo de datos
 *
 */
