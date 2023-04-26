import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";



function PaintingDetail( {dataPaintingDetail }) {
    console.log(dataPaintingDetail)
    return (
        <>
            <Link className="link" to="/">
                {" "}
                Volver{" "}
                </Link>
            <article className="card_detail">
             
            
                <img
                src={dataPaintingDetail.image}
                className="img_card-detail"
                />
                <div className="text_container">
                    <p>{dataPaintingDetail.date}</p>
                    <h4>{dataPaintingDetail.title}</h4>
                    <p>{dataPaintingDetail.technique}</p>
                </div>
            </article>
           
        </>
    );
};

export { PaintingDetail };