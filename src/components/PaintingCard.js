import React from "react";
import { Link } from "react-router-dom";



function PaintingCard( {painting }) {
    return (
    <li className="card">
      <Link to={`painting/${painting.id}`}>
        <article className="card_article">
            <img
            src={painting.image}
            className="img_card"
            />
            <div className="text_container">
            <p>{painting.date}</p>
            <h4>{painting.title}</h4>
            
            
            </div>
        </article>
      </Link>
    </li>
    );
};

export { PaintingCard };