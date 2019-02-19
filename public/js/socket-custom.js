
var socket = io();

// Escuchar socket
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'rquintero',
    mensaje: 'Hola mundo'
}, function( resp ) {
    console.log('Respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(resp){
    console.log('Servidor: ', resp);
});
