import React from "react";



function PaintingCard( {painting }) {
    return (
    <li className="card">
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
    </li>
    );
};

export { PaintingCard };