// ejercicio de logica de departamentos 
/**Ingresar un departamento (Cundinamarca, quindio, antioquia, valle)
 * alert("opcion no valida") si ingresa departamento que no sea alguno de esos 4
 * Dependiendo de que departamento es el seleccionado  debe mostrar cual es la capital de dicho departamento
 * 
 */
let depto = prompt("Ingrese el departamento")
let capiCundi = "bogota"
let capiQuind = "armenia"
let capiAntio = "medellin"
let capiValle = "cali"

if (depto === null || depto === "") {
    alert("No has ingresado Informacion")
} else {
    depto = depto.toLocaleLowerCase()
    if (
    depto === "cundinamarca"
    ) {
        alert( " La capital de cundinamarca es :" + capiCundi)
    } else {
        if (depto === "quindio" || depto === "quindío") {
            alert( " La capital de Quindio es :" + capiQuind)
        } else {
            if (depto === "antioquia") 
            {
                alert( " La capital de antioquia es :" + capiAntio)  
            } else {
                if (depto === "valle") {
                    alert( " La capital del valle es :" + capiValle)  
                } else {
                    alert("Información invalida")
                }
            }
        }
    }
}