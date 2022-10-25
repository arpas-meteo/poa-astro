import React from "react";
import { useEffect, useState } from 'react';
import { Fragment } from 'react';


export default function Poareacharts(props) {
  const stazio = props.stazio;
  const valori = ['TCI', 'P1H', 'LIT']
  const interroga = []
  for (let i = 0; i < valori.length; i++) {
    const v = valori[i];
    const url = `https://poa.alai.one/poa/quest/${stazio.COD_STAZ}/${v}?inizio=2022&fine=2023 `;
    const obj = {'key': v, 'url':url}
    interroga.push(obj)
  }
  const url = `https://poa.alai.one/poa/quest/${stazio.COD_STAZ}/TCI?inizio=2022&fine=2023 `;
  /* const local_route = "http://192.168.24.72:5009/poa/anagrafica"
  
  const http_url = local_route

  function clickButton(e){
    e.preventDefault()
    const cod_staz = e.target.innerText
    console.log(cod_staz)
    const fullPath = `/poa/p1h/${cod_staz}`;
    
    router.push(fullPath);
  }
  const [poa_ana, setPoaAna] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(http_url)
      .then((response) => response.json())
      .then((data) => {
        const anagrafica = data.filter((item) => {
          return (item.TIPO_RETE === 'Rete Fiduciaria' && item.PLUVIO === 'SI')
        })

        setPoaAna(anagrafica);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!poa_ana) {
    return <p>No data yet</p>;
  } */

  return (
    <ul>
      {interroga.map((v) => (
        <li key={v.key}>
          <a href={v.url} >{v.key}</a>
        </li>
      ))}
    </ul>
    // <ul>
    //   {poa_ana.map((ana) => (
    //     <li key={ana.COD_STAZ}>
    //       <button onClick={clickButton}>{ana.COD_STAZ}</button> {ana.NOME}
    //     </li>
    //   ))}
    // </ul>
  );
}


 