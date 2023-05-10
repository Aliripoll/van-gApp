import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";



function PaintingDetail( {dataPaintingDetail }) {
    console.log(dataPaintingDetail);
    return (
        <>
            
            <article className="card_detail">
            
                <img
                src={dataPaintingDetail.image}
                className="img_card-detail"
                />
                <div className="text_detail">
                    <h4 className="detail_title">{dataPaintingDetail.title}</h4>
                    <p>Original title: {dataPaintingDetail.originalTitle}</p>
                    <p>Date: {dataPaintingDetail.date}</p>
                    <p>Technique: {dataPaintingDetail.techniqueOrigin}</p>
                    <p>Style: {dataPaintingDetail.style}</p>
                    <p>Dimensions: {dataPaintingDetail.dimensions}</p>
                </div>

            </article>

            <Link className="detail_link" to="/">
                {" "}
                ⇐{" "}
                </Link>
           
        </>
    );
};

export { PaintingDetail };