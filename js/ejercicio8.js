// ejercicio de logica de departamentos
/**Ingresar un departamento (Cundinamarca, quindio, antioquia, valle)
 * alert("opcion no valida") si ingresa departamento que no sea alguno de esos 4
 * Dependiendo de que departamento es el seleccionado  debe mostrar cual es la capital de dicho departamento
 **/

let departamento = prompt("Ingrese el departamento");

if (departamento=== null || departamento=== "") {
    alert("No has Ingresado datos")
    
} else {
    departamento=departamento.toLocaleLowerCase()
    if (departamento==="cundinamarca") {
        alert("Bogotá")
        
    } else {
        if (departamento==="quindio" || departamento==="quindío") {
            alert("Armenia")
            
        } else {
            if (departamento==="antioquia") {
                alert("Medellín")
                
            } else {
                if (departamento==="valle") {
                    alert("Cali")
                    
                } else {
                    alert("Opción no Valida")
                }
            }
        }
    }
}