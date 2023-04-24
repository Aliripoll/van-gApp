
import '../App.css';
import callToApi from "../services/Api";
import { useEffect } from 'react';
import { useState } from 'react';
import { PaintingList } from './PaintingList';

const paintingsIds = [
  436533,
  459123,
  436532,
  436529,
  437984,
  459193,
  436528,
  436535
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
