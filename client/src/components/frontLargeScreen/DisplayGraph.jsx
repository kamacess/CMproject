import React, {useState, useEffect} from "react";
import './../../styles/graph.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
let tata = 'vote';


function drawSquares(n) {
    const tpl = [];
    for (let i = 0; i < 30; i += 1) {
        if (i < n ) tpl.push(<div className="full"></div>)
        else tpl.push(<div className="empty"></div>)
    }
    return tpl
}

export default function DisplayGraph(props) {

    const [vote, setVote] = useState(tata);
    const [StyleTableau, setStyleTableau] = useState([]);

    props.socket.on('votes',  function(voteRecu){
        setVote(voteRecu);
        console.log("kkkkkkkk",voteRecu);
        let StyleTableau =[] ;
        StyleTableau[0] = 10;
        StyleTableau[1] = 20;
        StyleTableau[2] = 3;
        StyleTableau[3] = 0;
        setStyleTableau(StyleTableau);
        console.log("kk",StyleTableau);
    });

    return (
        <div id="a">
            <div id="b">
                { StyleTableau.map((d, i) => {
                        return <div key={i} className="col-sm-12">
                        {drawSquares(d)}
                        </div>
                    }
                )}
            </div>
        </div>
    );
}