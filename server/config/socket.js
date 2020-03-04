//import mediaModel from '../models/Media';
const mediaModel = require('../models/Media');

let connectedUsers = [];
let connectedUsers2 = [];


module.exports = function(socket){

    socket.on('send-message', function(message){
      socket.broadcast.emit('message', message)
    //   socket.emit('message', message)
    });

    socket.on( "register", function(username)
        {
            console.log("tv connected")
            socket.username = username;
            connectedUsers[username] = socket;
            console.log(connectedUsers);
        }
    )

    socket.on( "registerTel", function(username)
        
        {
            let media = socket.media;
            let resultFormDb;
                  mediaModel
              .find().then(dbRes => {
                  const randomMedias = []
                  for(let i =0; i < 4; i++){
                      let randomIndex = Math.floor(Math.random()*dbRes.length)
                      let randomMedia = dbRes[randomIndex];
                        randomMedias.push(randomMedia);
                        dbRes.splice(randomIndex, 1);
                  }
            
                socket.emit('send-media',randomMedias)
              }).catch(err => {
                  console.log(err)
              });
    })

};