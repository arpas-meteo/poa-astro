import React from "react";
import { useEffect, useState } from "react";
import { Fragment } from "react";

import { IRealrete } from "../tipi/real_rete_ana";


export interface Props {
  rete: IRealrete;
}


export default function Realrete(props: Props) {
  const rete = props.rete;
  const indirizzo = `/realrete/${rete.cod_srv}`;

  const foto = `/idrometri/generale/${rete.cod_srv}.jpg`;

  return (
    <li className="border border-blue-200 h-18 w-44 p-0 m-1">
      <a className="text-red-500 hover:text-blue-300" href={indirizzo}>
        <div className="text-sm text-black">{rete.cod_srv}</div>
        <img src={foto} alt="Foto idrometro"></img>
        <p className="lowercase">{rete.cae_nome}</p>
      </a>
    </li>
  )
}
