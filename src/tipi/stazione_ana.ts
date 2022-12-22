import data from "./stazione_ana.json" assert { type: "json" };

export interface IStazione {
  id: number;
  COD_STAZ: string;
  NOME: string;
  LOCALITA: string;
  DATA_INIZIO: string;
  DATA_FINE: string;
  QUOTA: number;
  WGS84_UTM_32N_X: number;
  WGS84_UTM_32N_Y: number;
  TIPO_RETE: string;
  TERMO: string;
  PLUVIO: string;
  IDRO: string;
  IDRO_CODICE: string;
  IDRO_STAZIONE: string;
  IDRO_LOCALITA: string;
  TIPO_STAZ: string;
}
export const stazione_ana = data;
