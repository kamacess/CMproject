//import mediaModel from '../models/Media';
const mediaModel = require('../models/Media');

let connectedUsers = [];
let connectedUsers2 = [];


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
            console.log("tv connected")
            socket.username = username;
            connectedUsers[username] = socket;
            console.log(connectedUsers);
        }
    )

    socket.on( "registerTel", function(username)
        {
            console.log("tv connected")
            socket.username = username;
            connectedUsers[username] = socket;
            console.log(connectedUsers);
            socket.emit('privateRegister', "titi"+username);
        }
    )

    socket.on('send-media', function(media){
        console.log("rrrrrrr",connectedUsers);
        //let XrandomMedia = getMediaFromBaseMedia();
        let randomMedia = "http://www.atomisation.net/ut/images/paris26/your_hair_wants_cutting_2019.jpg";
        console.log("random media", randomMedia);
        socket.emit('private', randomMedia);
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
        voteslist[0] = [3, 5, 1, 5, 4];
        voteslist[1] = [4, 5, 1, 4, 3];
        voteslist[2] = [5, 2, 2, 3, 2];
        voteslist[3] = [5, 5, 2, 2, 4];
        voteslist[4] = [3, 5, 2, 1, 2];
        console.log(voteslist);
        connectedUsers["iamfront"].emit('votes', voteslist);
    });


}