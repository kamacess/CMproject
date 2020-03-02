import React from "react";
import BoutonVote from './BoutonVote';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function ActionTel(props) {
  return (
    <div className="list-action">
      mon web socket tel
      <BoutonVote socket = {props.socket}/>
      
      </div>
  );
}
