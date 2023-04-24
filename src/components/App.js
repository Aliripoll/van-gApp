
import callToApi from "../services/Api";
import { useEffect } from 'react';
import { useState } from 'react';
import { PaintingList } from './PaintingList';
import "../styles/App.css";


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

];

function App() {
  const [dataPainting, setDataPainting] = useState([]);

  useEffect(() => {
    let promises = paintingsIds.map(id => callToApi(id));
    Promise.all(promises).then(responses => {
        let data = [];

        responses.forEach(response => {
            data = data.concat(response);
        });

        setDataPainting(data);
    })
  }, []);
  /* const list = dataPainting.map((elem) =>
      <li>{elem.title}</li>
      );
 */
  return (
    <PaintingList dataPainting={dataPainting}/>
  );
}

export default App;
