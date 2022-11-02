import React from "react";
import { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { IStazione } from '../tipi/stazione';
import { Example } from './Example'


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

  const [data_inizio, setInizio] = useState("2022-01");
  const [data_fine, setInisetFine] = useState("2022-12");

  const [dati, setDati] = useState({ "data": [], "label": [] });


  const [showCharts, setShowCharts] = useState(false);

  const onChangeHandlerInizio = event => {
    setInizio(event.target.value);
    console.log(event.target.value)
  };

  const onChangeHandlerFine = event => {
    setInisetFine(event.target.value);
    console.log(event.target.value)
  };

  const interroga = []
  for (let i = 0; i < valori.length; i++) {
    const v = valori[i];
    const url = `https://poa.alai.one/poa/quest/${stazio.COD_STAZ}/${v}?inizio=2022&fine=2023`;
    const obj = { 'key': v, 'url': url }
    interroga.push(obj)
  }

  function clickButton(e, cod_stazio, cod_grand, data_inizio, data_fine) {

    e.preventDefault()
    console.log(cod_stazio, cod_grand, data_inizio, data_fine)
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

  function urlGet(codice, grand, inizio, fine) {
    return `https://poa.alai.one/poa/quest/${codice}/${grand}?inizio=${inizio}&fine=${fine}`
  }

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
      </div><br />
      <div>
        <div>
          <h3>Inizio misure: <span className="text-black font-semibold"> {stazio.DATA_INIZIO}</span> </h3>
          <h3>Fine misure: <span className="text-black font-semibold"> {fine}</span> </h3>
        </div>
      </div><br />
      <div>

        <h4>
          Inserisci data:
          <span> si può inserire anno - anno-mese - anno-mese-giorno</span>
        </h4>
        <label htmlFor="id_inizio">Scegli data iniziale: </label>
        <input type="datetime" name="id_inizio" id="id_inizio"
          className="text text-lg text-center h-8 m-1 boder-solid border-2 border-slate-300"
          onChange={onChangeHandlerInizio}
          value={data_inizio} />
        <label htmlFor="id_fine">Scegli data fine:</label>
        <input type="datetime" name="id_fine" id="id_fine"
          className="text text-lg text-center h-8 m-1 boder-solid border-2 border-slate-300"
          onChange={onChangeHandlerFine}
          value={data_fine} />
      </div><br />
      Api REST:
      <ul >
        {interroga.map((v) => (
          <li key={v.key}>
            <div className="flex flex-row bg-slate-200 items-center">
              <button className="text bg-blue-100 m-2 w-12 rounded-md border-solid border-2 border-spacing-1 border-indigo-600">
                <a href={urlGet(stazio.COD_STAZ, v.key, data_inizio, data_fine)} target="__blank">{v.key}</a>
              </button>
              <div>
                {urlGet(stazio.COD_STAZ, v.key, data_inizio, data_fine)}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <br />
      {showCharts ?
        <Example></Example>
        : <div className="w-auto h-auto bg-slate-300" >Grafico da implementare</div>
      }
      <button className="text bg-blue-100 m-2 w-20 rounded-md border-solid border-2 border-spacing-1 border-indigo-600">
        SHOW
      </button>
      <ul>
        {interroga.map((v) => (
          <li key={v.key + "x"}>
            <div className="flex flex-row bg-slate-200 items-center">
              <button className="text bg-red-100 m-2 w-12"
                onClick={e => clickButton(e, stazio.COD_STAZ, v.key, data_inizio, data_fine)}>
                {v.key}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


