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

let departmento = prompt("Ingrese departamento");
let motivo = prompt("Motivo de visita");

if (
  departmento === null ||
  departmento === "" ||
  motivo === null ||
  motivo === ""
) {
  alert("Datos no validos");
} else {
  departmento = departmento.toLowerCase();
  motivo = motivo.toLowerCase();

  if (departmento === "antioquia" && motivo === "turismo") {
    alert("Visita el parque de los pies descalzos.");
  } else {
    if (departmento === "antioquia" && motivo === "comida") {
      alert("Pide bandeja paisa.");
    } else {
      if (departmento === "antioquia" && motivo === "museos") {
        alert(
          "Visitar en Antioquia es el museo de arte moderno."
        );
      } else {
        if (departmento === "cundinamarca" && motivo === "turismo") {
          alert(
            "Visita las minas de sal de Nemocon."
          );
        } else {
          if (departmento === "cundinamarca" && motivo === "comida") {
            alert("Come caldo con costilla");
          } else {
            if (departmento === "cundinamarca" && motivo === "museos") {
              alert(
                "Visita el museo nacional"
              );
            } else {
              if (
                departmento === "quindio" ||
                (departmento === "quindío" && motivo === "turismo")
              ) {
                alert(
                  "Visita el parque del café."
                );
              } else {
                if (
                  departmento === "quindio" ||
                  (departmento === "quindío" && motivo === "comida")
                ) {
                  alert(
                    "Pide la sopa de mondongo."
                  );
                } else {
                  if (
                    departmento === "quindio" ||
                    (departmento === "quindío" && motivo === "museos")
                  ) {
                    alert(
                      "Visita el museo del oro"
                    );
                  } else {
                    if (departmento === "valle" && motivo === "turismo") {
                      alert(
                        "Ve a chipichape."
                      );
                    } else {
                      if (departmento === "valle" && motivo === "comida") {
                        alert(
                          "Come una chuleta valluna"
                        );
                      } else {
                        if (departmento === "valle" && motivo === "museos") {
                          alert(
                            "Visita el museo arqueológico"
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
