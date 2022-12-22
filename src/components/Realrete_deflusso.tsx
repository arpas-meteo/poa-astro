import React from "react";
import { useEffect, useState } from "react";
import { Fragment } from "react";

import { IRealrete } from "../tipi/real_rete_ana";


export interface Props {
    rete: IRealrete;
}


export default function RealreteDeflusso(props: Props) {
    const rete = props.rete;
    const foto_scala = `/idrometri/deflusso/${rete.cod_srv}_scala_deflusso.svg`;
    // const foto_scala_png = `/idrometri/deflusso/${rete.cod_srv}_scala_deflusso.png`;
    return (
        <img src={foto_scala} alt="Nessun dato" className="h-auto"></img>
    )
}
