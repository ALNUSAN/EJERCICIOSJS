// Logica y algoritmos
// direccion, estado civil, cedula , celular , correo , salario
let userName = ""
let age = ""
let address = ""
let civilStatus = ""
let celphone = ""
let mail = ""
let salary = 0
let id = ""

function registerData() {
   userName = prompt("Ingresa tu nombre")
   age = prompt("Ingresa tu edad")
   address = prompt("Direccion")
   civilStatus = prompt("Estado civil")
   celphone = prompt("Numero de celular")
   mail = prompt("Celular")
   salary = prompt("Salario")
   id = prompt("Numero de Identificacion")
}

function showData() {
    alert("Tunombre es :" + userName + " Tu edad es : " + age + "Tu direccion es : " + address + "Tu estado civil es : " + civilStatus + "Tu identificacion es : " + id + "Tu numero de celular es :" + celphone + "  Tu Correo electronico es :" + mail + " Tu salario es :"+ salary)
    
}