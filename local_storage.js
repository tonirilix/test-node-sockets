function Lista(clave){
	this.clave = clave;

	this.agregarChatRoom = function(room){
		if(this.validarNavegador()){
			if(localStorage.getItem(this.clave)){
				var rooms = JSON.parse(localStorage.getItem(this.clave));
			}
			else{
				var rooms = [];
			}
			rooms.push(room);
			localStorage.setItem(this.clave,JSON.stringify(rooms));
			return true;
		}
		return false;
	}
	this.obtenerRooms = function(){
		if(localStorage.getItem(this.clave) != "undefined"){
			return JSON.parse(localStorage.getItem(this.clave));
		}
		return null;
	}
	this.eliminarChatRoom = function(room){
		var rooms = JSON.parse(localStorage.getItem(this.clave));
		rooms = rooms.filter(function(i){
			return i != room;
		});
		localStorage.setItem(this.clave,JSON.stringify(rooms));
	}
	this.eliminarRooms = function(){
		localStorage.removeItem(this.clave);
	}
	this.validarNavegador = function(){
		if(typeof(Storage) !== "undefined") return true;
		return false;
	}
}