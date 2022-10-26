import React from "react";
import { useEffect, useState } from "react";
import { Fragment } from "react";

export interface ISito {
  nome: string;
  url: string;
  nota: string;
}

export interface Props {
  sito: ISito;
}

export default function Linksiti(props: Props) {
  const sito = props.sito;
  return (
    <div className="container mx-auto my-5 center bg-slate-50">
      <li key={sito.nome} className="p-5 m-5 bg-slate-200 border-spacing-1">
        <a href={sito.url}>{sito.url}</a>
        <p className="lowercase">{sito.nota}</p>
      </li>
    </div>
  )
}
