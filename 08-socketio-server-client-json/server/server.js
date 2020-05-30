var app = require('express')();
//var http = require('http').Server(app);
var http = require('http').createServer(app);
//var io = require('socket.io')(http);
var io = require('socket.io')(3000);

io.attach(http, {
 pingInterval: 10000,
 pingTimeout: 5000,
 cookie: false
});

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
   console.log('A user connected');
   
   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });
   socket.on('message', function (msg) {
   console.log("message: "+msg);
   });
   socket.on('atime', function(data) {
	sendTime();
	console.log(data);
   });
   timeout();
});
function timeout() {
  setTimeout(function () {
   io.emit('reply',"A message from server");
    timeout();
  }, 5000);
}
function sendTime() {
	
	//Đây là một chuỗi JSON
	var json = {
		website: "hocarm", 	//kiểu chuỗi
        fwversion: 1,								//số nguyên
		serverVersion: 0.1,							//số thực
		time: new Date()							//Đối tượng Thời gian
    }
    io.sockets.emit('atime', json);
}
http.listen();