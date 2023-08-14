/**
 * 1. 
 * Ingresar un departamento ( cundinamarca , quindio, antioquia , valle)
 * Si no se ingresa alguno de ellos debe salir alert de opción invalida
 * 
 * 2. 
 * Ingresar un departamento ( cundinamarca , quindio, antioquia , valle)
 * Ingresar objetivo de la visita ( turismo , comidas, museos )
 * Dependiendo de la opción que elija mostrar un alert con las comidas mas populares del departamento si escoje comidas, si escoje turismo debe mostrar las zonas turisticas del departamento, si selecciona museos debe sugeriri los museos del deparamento 
 * Mostrar alert de opcion no valida en caso que no se ingrese alguna de las opciones 
 * 
 */

/**
 * Y COMENZAMOS !!!!
 */
let department = prompt("Ingrese departamento");
let reason = prompt("Motivo de visita");

if (
  department === null ||
  department === "" ||
  reason === null ||
  reason === ""
) {
  alert("Datos no validos");
} else {
  department = department.toLowerCase();
  reason = reason.toLowerCase();

  if (department === "antioquia" && reason === "turismo") {
    alert("Visita el parque de los pies descalzos");
  } else {
    if (department === "antioquia" && reason === "comida") {
      alert("La comida típica de Antioquia es la bandeja paisa.");
    } else {
      if (department === "antioquia" && reason === "museos") {
        alert(
          "Un museo para visitar en Antioquia es el museo de arte moderno."
        );
      } else {
        if (department === "cundinamarca" && reason === "turismo") {
          alert(
            "Un sitio turístico en Cundinamarca son las Minas de sal de Nemocon."
          );
        } else {
          if (department === "cundinamarca" && reason === "comida") {
            alert("Una de las comidas tipicas es el Caldo de costilla");
          } else {
            if (department === "cundinamarca" && reason === "museos") {
              alert(
                "Uno de los mejores museos en Cundinamarca es el museo Nacional."
              );
            } else {
              if (
                department === "quindio" ||
                (department === "quindío" && reason === "turismo")
              ) {
                alert(
                  "El mejor lugar a visitar es el  parque del cafe."
                );
              } else {
                if (
                  department === "quindio" ||
                  (department === "quindío" && reason === "comida")
                ) {
                  alert(
                    "Un plato de esta region es el Sancocho."
                  );
                } else {
                  if (
                    department === "quindio" ||
                    (department === "quindío" && reason === "museos")
                  ) {
                    alert(
                      "Un lugar para visitar es Antiguedades Pijao"
                    );
                  } else {
                    if (department === "valle" && reason === "turismo") {
                      alert(
                        "Visita Basilica Menor señor de los Milagros."
                      );
                    } else {
                      if (department === "valle" && reason === "comida") {
                        alert(
                          "No olvides comer Chuleta valluna"
                        );
                      } else {
                        if (department === "valle" && reason === "museos") {
                          alert(
                            "Visita Museo Aereo Fenix"
                          );
                        } else {
                          alert(
                            "Elija correctamente departamento y objetivo de su visita"
                          );
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
