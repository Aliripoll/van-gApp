
import React from "react";
import callToApi from "../services/Api";
import { useEffect } from 'react';
import { useState } from 'react';
import { PaintingList } from './PaintingList';
import "../styles/App.css";
import { Header } from "./Header";
import { PaintingDetail } from "./PaintingDetail";
import {Link, Route, Routes, useLocation, matchPath} from 'react-router-dom';


const paintingsIds = [
  //PINTURAS
  436533,
  459123,
  436532,
  436529,
  437984,
  459193,
  436528,
  436535,
  336327,
  436530,
  436527,
  436531,
  436524,
  436526,
  436536,
  438722,
  436525,
  437998,
  436534,
  437980,
  //DIBUJOS
  335537,
  335538,
  849055,
  336318,
  335536,
  849054,
  849052,
  849056,

];

function App() {
  const [dataPainting, setDataPainting] = useState([]);
  const [inputTechnique, setInputTechnique] = useState("all");
  const [filteredDataPainting, setFilteredDataPainting] = useState([]);

  useEffect(() => {
    let promises = paintingsIds.map(id => callToApi(id));
    Promise.all(promises).then(responses => {
        let data = [];

        responses.forEach(response => {
            data = data.concat(response);
        });

        setDataPainting(data);
        setFilteredDataPainting(data);
    })
  }, []);
  /* const list = dataPainting.map((elem) =>
      <li>{elem.title}</li>
      );
 */

  //EVENT FUNCTIONS//

  const handleTechniqueInput = (value) => {
  
    setInputTechnique(value);
    const filteredDataPaintings = dataPainting
    .filter((element) => {
      if(value === "all") {
        return element;
      } else if(element.technique === value){
        return element; 
      }
     
    });
    setFilteredDataPainting(filteredDataPaintings);
  

    //Filtrar filteredDataPainting con el "value" y luego hacer un setFilteredDataPainting para que solo pinte lo seleccionado en el filtro
  }

  const { pathname } = useLocation();

  const dataUrl = matchPath("/painting/:paintingId", pathname);

  const paintingId = dataUrl !== null ? dataUrl.params.paintingId : null;

  const paintingFound = dataPainting.find(
    (painting) => painting.id === parseInt(paintingId)
  );
console.log(paintingFound);

  

  return (
    <>
   
    <Header inputTechnique={inputTechnique} handleTechniqueInput={handleTechniqueInput}/>
    <Routes>
      <Route 
        path="/"
        element={
          <PaintingList dataPainting={filteredDataPainting}/>
        }
      />
    
      <Route 
        path="/painting/:paintingId" 
        element={
          <PaintingDetail dataPaintingDetail={paintingFound}/>
        } 
      />

    </Routes>

    </>
  );
}

export default App;
