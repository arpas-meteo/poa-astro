import React from "react";
import { useEffect, useState } from "react";
import { Fragment } from "react";

import { IRealrete } from "../tipi/real_rete_ana";


export interface Props {
    rete: IRealrete;
}


export default function RealreteDeflusso(props: Props) {
    const rete = props.rete;

    let foto_scala = `/idrometri/deflusso/${rete.cod_srv}_scala_deflusso.svg`;


    if (rete.scala_fatta !== "SI") {
        if (rete.tipomisura === "Lago") {
            foto_scala = `/idrometri/deflusso/lago_no_scala_deflusso.svg`;
        }
        else {
            foto_scala = `/idrometri/deflusso/fiume_no_scala_deflusso.svg`;
        }
    }


    // const foto_scala_png = `/idrometri/deflusso/${rete.cod_srv}_scala_deflusso.png`;
    return (
        <img src={foto_scala} alt="Nessun dato" className="h-auto"></img>
    )
}
