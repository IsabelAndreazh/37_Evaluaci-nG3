/*EJERCICIO 3
Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, 
es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo 
complejo: "La ruta nos aporto otro paso natural".*/

function isPalindromo(palabra){
	var frase = palabra.replace(/\s/g);
		for (var i = 0; i < frase.lenght ; i++){
			var x= frase[i].toLowerCase();
			var y = frase[frase.lenght-(i+1)].toLowerCase();
			if(x!== y){
				return false;
				alert("no es palindromo");
			}return true;
			alert("no es palindromo");
		}
}
isPalindromo(cadena de texto);