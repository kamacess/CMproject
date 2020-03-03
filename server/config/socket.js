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

    socket.on('send-votes', function(votes){
        let voteslist = [];
        voteslist[0] = [33, 55, 16, 56, 48];
        voteslist[1] = [43, 55, 17, 46, 68];
        voteslist[2] = [63, 25, 72, 36, 79];
        voteslist[3] = [83, 15, 82, 26, 13];
        voteslist[4] = [93, 95, 92, 16, 22];
        connectedUsers["iamfront"].emit('votes', votelist);
    });


}