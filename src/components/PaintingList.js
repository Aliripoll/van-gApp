import React from "react";
import { PaintingCard } from "./PaintingCard";



function PaintingList({ dataPainting }) {
    const paintingList = dataPainting.map((painting) => {
        return <PaintingCard key={painting.id} painting={painting} />;
    })
console.log(dataPainting.length);
    if (dataPainting.length !== 0) {
        return (
            <>
                <ul className="cards">
                    {paintingList}
                </ul>
              
            </>
        )
    } else {
        return (
        <p className="error">search not found</p>
        )
    }
 
}

export { PaintingList };