import React from "react";
import "./TarotCard.css";

const TarotCard = props => (
  <div className="col-md-2 col-sm-3 col-6">
    <div
      className="card"
      value={props.id}
      onClick={() => props.handleClick(props.id)}
    >
      <div className="img-container">
        <img alt={props.tarot} src={props.image} />
      </div>
    </div>
  </div>
);

export default TarotCard;