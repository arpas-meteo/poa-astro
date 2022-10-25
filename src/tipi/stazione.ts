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

  const esempio_stazione = {
    id: 0,
    COD_STAZ: "CA003S034",
    NOME: "SAMASSI",
    LOCALITA: "GENNALEO",
    DATA_INIZIO: "1995-01-01T00:00:00",
    DATA_FINE: "2017-02-07T12:30:00",
    QUOTA: 89,
    WGS84_UTM_32N_X: 493096,
    WGS84_UTM_32N_Y: 4375110,
    TIPO_RETE: "ex-SAR",
    TERMO: "SI",
    PLUVIO: "SI",
    IDRO: "NO",
    IDRO_CODICE: "",
    IDRO_STAZIONE: "",
    IDRO_LOCALITA: "",
    TIPO_STAZ: "SAR",
  };