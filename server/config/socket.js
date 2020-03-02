module.exports = function(socket){
    console.log("ici")
    
    
    socket.on('send-message', function(message){
      socket.broadcast.emit('message', message)
    //   socket.emit('message', message)


    // for (var pickedMedias=[],i=0;i<5;++i) pickedMedias[i]=i;
     
    //   var media = {
    //     type: 'video, text, image, audio, music, pdf'
    // }
    //     console.log("ici")
    //     const randomMedia = pickedMedias[Math.floor(Math.random()*media.type)]
    //     socket.on('send-media', function(media){
    //     var users = {};
    //     users[USER_NAME] = socket.id;
    //     io.sockets.connected[users[USER_NAME]]
    //     .emit('private', randomMedia);
    //     //   socket.emit('message', message)
    //     });
    });
}

