var http = require('http');
var util = require('util');

var connect = require('connect');

var port = process.env.PORT || 9000;

var app = connect.createServer(
	connect.static(__dirname + "/public")
	).listen(port);


util.log("server running at port: " + port);

var io = require("socket.io").listen(app);



var onlineUser = [];

// io.set('log level', 2); // showing only significant log such as handshaking and data transmission
io.sockets.on('connection', function(socket) { // when a user, "socket" connects
	console.log(socket);
	onlineUser++;
	socket.emit("bool", {

	});
	util.log('hola server, the user #' + socket.id + ' has just connected');
	util.log('number of user: ' + onlineUser);
	
	// listening to mouse position signal and transmit to every users
	socket.on('my other event', function(data) {
			console.log(data.my);
	
	});

// when that user disconnects
	socket.on('disconnect', function() {
		onlineUser--;
		util.log('the user #' + socket.id + ' has just disconnected');
		util.log('number of user: ' + onlineUser);
	});
	
	socket.on('ready', function(data){
		util.log('ready: ' + data);
		socket.emit('message', 'thanks ' + socket.id); //reply to user
		io.sockets.emit('message', 'totel users: ' + onlineUser); //emit to all 
		
		socket.broadcast.emit('users', socket.id); //emit to everyone else
	});

});



