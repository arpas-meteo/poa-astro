import React from "react";
import { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { IStazione } from '../tipi/stazione';


export interface Props {
  stazio: IStazione;
}


export default function Poareacharts(props: Props) {
  const stazio = props.stazio;
  const valori = []

  if (stazio.PLUVIO === "SI") valori.push('P1H')
  if (stazio.TERMO === "SI") valori.push('TCI')
  if (stazio.IDRO === "SI") valori.push('LIT')

  let fine = stazio.DATA_FINE
  if (stazio.DATA_FINE === "") fine = "è attiva"




  const interroga = []
  for (let i = 0; i < valori.length; i++) {
    const v = valori[i];
    const url = `https://poa.alai.one/poa/quest/${stazio.COD_STAZ}/${v}?inizio=2022&fine=2023 `;
    const obj = { 'key': v, 'url': url }
    interroga.push(obj)
  }

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
    <div className="container mx-auto my-5 center bg-slate-50">
      <div>
        <h2 className="text text-slate-800">Codice Db Sassari:
          <span className="text-black font-bold"> {stazio.COD_STAZ}</span> -
          <span className="text-black font-bold tracking-wide"> {stazio.NOME}</span>
        </h2>
      </div>
      <br />
      <div>
        <div>
          <h3>La stazione fa parte della rete:
            <span className="text-black font-bold"> {stazio.TIPO_RETE}</span> -
            tabelle:
            <span className="text-black font-bold"> {stazio.TIPO_STAZ}</span>
          </h3>
        </div>
      </div>
      <br />
      <div>
        <div>
          <h3>Inizio misure: <span className="text-black font-semibold"> {stazio.DATA_INIZIO}</span> </h3>
          <h3>Fine misure: <span className="text-black font-semibold"> {fine}</span> </h3>
        </div>
      </div>
      <br />
      <ul>
        Valori presenti:
        {interroga.map((v) => (
          <li key={v.key}>
            <a href={v.url} >{v.key}</a>
          </li>
        ))}
      </ul>
    </div>
    // <ul>
    //   {poa_ana.map((ana) => (
    //     <li key={ana.COD_STAZ}>
    //       <button onClick={clickButton}>{ana.COD_STAZ}</button> {ana.NOME}
    //     </li>
    //   ))}
    // </ul>
  );
}


