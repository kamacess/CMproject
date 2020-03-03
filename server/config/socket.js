//import mediaModel from '../models/Media';
const mediaModel = require('../models/Media');
let connectedUsers = [];

module.exports = function(socket){

    console.log("ici")
    let media = {
        type: 'video, text, image, audio, music, pdf'
    }

    socket.on('send-message', function(message){
      socket.broadcast.emit('message', message)
    //   socket.emit('message', message)
    });

    socket.on( "register", function(username)
        {
            socket.username = username;
            connectedUsers[username] = socket;
            console.log(connectedUsers);
        }
    )

    console.log(connectedUsers);

    socket.on('send-media', function(media){
        console.log("rrrrrrr",connectedUsers);
        //let XrandomMedia = getMediaFromBaseMedia();
        let randomMedia = "http://www.atomisation.net/ut/images/paris26/your_hair_wants_cutting_2019.jpg";
        console.log("random media", randomMedia);
        connectedUsers["iamfront"].emit('private', randomMedia);
    });

    function getMediaFromBaseMedia() {

        let resultFormDb;
        mediaModel
            .find()
            .then(dbRes => {
                resultFormDb = dbRes;
            })
            .catch(next);
        console.log(resultFormDb);
        return resultFormDb;
    }

}
