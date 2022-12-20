import React from "react";
import { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { IStazione } from '../tipi/stazione';
import Grafico from './LineChart';


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

  const [dati, setDati] = useState([]);
  const [isLoading, setIsLoading] = useState(false);



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
    const url = `http://15.161.134.66:8000/poa/quest/${stazio.COD_STAZ}/${v}?inizio=2022&fine=2023`;
    const obj = { 'key': v, 'url': url }
    interroga.push(obj)
  }

  function clickButton(e, cod_stazio, cod_grand, data_inizio, data_fine) {
    e.preventDefault()

    const http_url = urlGet(cod_stazio, cod_grand, data_inizio, data_fine)
    setIsLoading(true);
    fetch(http_url)
      .then((response) => response.json())
      .then((data) => {
        console.log(cod_stazio, cod_grand, data_inizio, data_fine)
        console.log(data)
        setIsLoading(false);
        setDati(data)
      });
  }

  function urlGet(codice, grand, inizio, fine) {
    const vecchio = `https://poa.alai.one/poa/quest/${codice}/${grand}?inizio=${inizio}&fine=${fine}`

    return `http://15.161.134.66:8000/poa/quest/${codice}/${grand}?inizio=${inizio}&fine=${fine}`
  }

  if (isLoading) {
    return <p className="center">Loading...</p>;
  }

  return (

    <div className="container mx-auto my-5 cente">

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
      Api REST (va al sito esterno per vedere i dati in json):
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
      <div className="text bg-red-100 m-2 w-auto">
        Clicca per caricare i dati:
      </div>
      <ul>
        {interroga.map((v) => (
          <li key={v.key + "x"}>
            <div className="flex flex-row bg-slate-200 items-center">
              <button className="text text-black bg-red-200 m-2 w-64 rounded-md border-solid border-red-500"
                onClick={e => clickButton(e, stazio.COD_STAZ, v.key, data_inizio, data_fine)}>
                {v.key}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Grafico dati={dati}></Grafico>
    </div>
  );
}

