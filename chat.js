window.addEventListener('load',init);
var lista;
$(document).on('submit','.chat_form',function(e){
	e.preventDefault();
	var room = this.dataset.room;
	var mensaje = this.elements[0].value;
	this.elements[0].value = "";
});
$(document).on('click','.draggable',function(e){
    $('.draggable').removeClass('top');
    $(this).addClass('top');
});

function init(){
	
	if(localStorage.getItem("username") == "undefined"){
		window.location = "index.html";	
	}
	var username = localStorage.getItem("username");

	lista = new Lista(username);
	var rooms = lista.obtenerRooms();
	document.querySelector('#room_btn').addEventListener('click',createRoom);
}

function createMessage(username,msg){
	var markup = "<li><strong>"+username+"</strong>: "+msg+"</li>";
	return markup;
}
function createUsuario(username){
	var markup = "<li draggable='true' data-username='"+username+"''>"+username+"</li>";
	return markup;
}
function createRoomDiv(room_name){
	if(document.querySelector("#"+room_name)) return;
	var markup = "<article class='draggable card absolute big-padding special_card' data-room="+room_name+">\n\
                            <header class='be-blue white header-room'>\n\
                                <h4><i class='glyphicon glyphicon-envelope'></i> "+room_name+"</h4>\n\
                            </header>\n\
                            <section class='area_msj' id='"+room_name+"'></section>\n\
                            <form role='form' class='chat_form row' data-room='"+room_name+"'>\n\
                                <input type='text' class='space_area' class='form-control col-md-6'>\n\
                                <div class='col-md-4'>\n\
                                    <input type='submit' class='btn btn-info'>\n\
                                </div>\n\
                            </form>\n\
					</article>";
    document.querySelector('#chats').innerHTML += markup;
    $('.draggable').draggable();
}