import React from "react";
import { PaintingCard } from "./PaintingCard";



function PaintingList({ dataPainting }) {
    const paintingList = dataPainting.map((painting) => {
        return <PaintingCard key={painting.id} painting={painting} />;
    })
    return (
        <>
            <ul className="cards">
                {paintingList}
            </ul>
          
        </>
    )
}

export { PaintingList };