import data from "./real_rete_ana.json" assert { type: "json" };

export const campi_real_rete_ana = [
  "objectid",
  "cod_srv",
  "altra_denominazione",
  "cae_nome",
  "tipomisura",
  "localita",
  "sensore_principale",
  "scala_fatta",
  "ss_cod_staz",
  "cae_station_id",
  "zero",
  "s1",
  "s2",
  "s3",
  "nota_m_slm",
  "note",
];

export interface IRealrete {
  objectid: number;
  cod_srv: string;
  altra_denominazione: string | null;
  cae_nome: string;
  tipomisura: string;
  localita: string;
  sensore_principale: number;
  scala_fatta: string | null;
  ss_cod_staz: string;
  cae_station_id: number;
  zero: number | null;
  s1: number | null;
  s2: number | null;
  s3: number | null;
  nota_m_slm: string;
  note: string | null;
}

export const real_rete_ana = data;
