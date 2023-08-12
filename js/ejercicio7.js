// Ejercicio de logica

let day = prompt("Ingrese día");

if (day === null || day === "") {
  alert(day + "No has ingresado datos");
} 
else {
day = day.toLowerCase();
  {
    if (
      day === "lunes" ||
      day === "martes" ||
      day === "miercoles" ||
      day === "miércoles" ||
      day === "jueves" ||
      day === "viernes"
    ) {
      alert("Es un día entre semana");
    } else {
      if (day === "sabado" || day === "sábado" || day === "domingo") {
        alert("Es un fin de semana");
      } else {
        alert("Favor Ingresar solo días de la semana");
      }
    }
  }
}

/**
 * NOTAS
 * Mayusuclas
 * Palabras que no son
 * vacio
 * si no le da nada
 * Tildes no tiene métodos ni funciones para las tildes ni la Ñ , es necesario hacer la validación manual lo qie significa que se debe declarar la variable con tilde y en el ingreso del dato de la variable ( caso del else para sábado tambien se debe agregar)
 *
 *
 * */
