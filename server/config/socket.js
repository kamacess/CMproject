//import mediaModel from '../models/Media';
const mediaModel = require('../models/Media');

let connectedUsers = {};
let connectedUsers2 = [];


module.exports = function(socket){

    console.log("ici")
    let media = {
        type: 'video, text, image, audio, music, pdf'
    }

    socket.on('send-message', function(message){
      socket.broadcast.emit('message', message)
    });

    socket.on( "register", function(username)
        {

            socket.username = username;
            connectedUsers[username] = socket;
            connectedUsers["iamfront"].emit('choixAffichage', 1);
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

    let monState = 0;

    socket.on('send-votes', function(votes){
        console.log(connectedUsers.length,"this is connected users")
        console.log("dans send votes")
        if ( monState < 2 ){
            connectedUsers["iamfront"].emit('choixAffichage', 2);
            monState = 3;
        } else {
            let voteslist = votes;
            console.log("emetteur");
            connectedUsers["iamfront"].emit('votes', voteslist);
            console.log(voteslist);
        }
    });


}