/*EJERCICIO 4
Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript:
Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar().
Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar().
Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía.
*/
var Persona=function(nombre,edad,genero){
	this.nombre:"",
	this.edad:"",
	this.genero:"",
	var Estudiante=function(curso,grupo){
		this.curso: "",
		this.grupo:"",
		this.registrar=function(){},
	}
	var Profesor=function(asignatura,nivel){
		this.asignatura: "",
		this.nivel:"",
		this.asignar=function(){},
	}
}
var obtDetalles= new Persona (maria, 21, mujer);
alert(this.nombre);