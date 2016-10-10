
  // Haz el juego de piedra papel o tijera con 3 turnos
/*Pseudocódigo:
declaro variables:piedra papel o tijera
el turno i lo inicailizo en 1 y que se repita hasta i<=3
pido respuesta a jugador 1 
leo respuesta jugador 1
pido respuesta a jugador 2
leo respuesta jugador 2
si jugador1 = jugador 2 entonces imprimo :empate
si jugador1=piedra && jugador2=papel entonces imprimo:gana jugador 2
si jugador1=piedra && jugador2=tijera entonces imprimo:gana jugador 1
si jugador1=papel && jugador2=piedra entonces imprimo:gana jugador 1
si jugador1=papel && jugador2=tijera entonces imprimo:gana jugador 2
si jugador1=tijera && jugador2=piedra entonces imprimo:gana jugador 2
si jugador1=tijera && jugador2=papel entonces imprimo:gana jugador 1
*/

  var piedra;
  var papel;
  var tijera;

  for(var i=1; i<=3 ;i++){
  	alert('turno '+ i);
  	var jugador1= prompt("piedra,papel o tijera?");
  	var jugador2= prompt("piedra,papel o tijera?");
  	if(jugador1=jugador2){
  		alert("empate!");
  	}else if(jugador1=piedra && jugador2=papel){
  		alert("gana jugador 2 ");
  	}else if(jugador1=piedra && jugador2=tijera){
  		alert("gana jugador 1");
  	}else if(jugador1=papel && jugador2=piedra){
  		alert("gana jugador 1");
  	}else if(jugador1=papel && jugador2=tijera){
  		alert("gana jugador 2");
  	}else if(jugador1=tijera && jugador2=piedra){
  		alert("gana jugador 2");
  	}else if(jugador1=tijera && jugador2=papel){
  		alert("gana jugador 1");
  	}else{
  		alert("intentalo de nuevo");
  	}
  }