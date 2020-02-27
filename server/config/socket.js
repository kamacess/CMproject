module.exports = function(socket){
    console.log("ici")
    socket.on('send-message', function(message){
      socket.broadcast.emit('message', message)
    //   socket.emit('message', message)
    });


}