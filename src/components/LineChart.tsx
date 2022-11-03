
import React from "react";
import { IStazione } from "../tipi/stazione";

/* import * as ChartImport from "chart.js";
const { Chart, LineElement } = ChartImport.default
  ? ChartImport.default
  : ChartImport;

Chart.register(LineElement); */

import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);


export interface Props {
  dati: Array<any>;
}

class LineChart {
  chart: any;
  constructor(ctx: any, labels: any[], values: any[], intesta: string) {
    this.chart = new ChartJS(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: intesta,
            data: values,
            borderColor: "#0000ff",
            showLine: true,
            pointRadius: 0
          },
        ],
      },
    });
  }

  aggiorna(label: any, value: any) {
    console.log(label);
    console.log(value);
    this.chart.data.labels = label;
    this.chart.data.datasets[0].data = value;

    this.chart.update();
  }
}

export default function Grafico(props: Props) {
  const dati = props.dati;
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const nulli = []
  function doSomethingWith() {
    const values = [];
    const labels = [];
    let myChart = null;

    //
    for (let i = 0; i < dati.length - 1; i++) {
      const riga = dati[i]
      const grandezza = riga[0]
      if (grandezza !== -99.9) {
        values.push(riga[0]);
        labels.push(riga[1]);
      }
      else {
        nulli.push(riga[1]);
      }
    }

    const ctx = canvasRef.current.getContext("2d")
    myChart = new LineChart(ctx, labels, values, "Temperatura");
  }

  React.useEffect(() => {
    doSomethingWith()
  });

  const quanti = dati.length
  let pronto = true
  if (quanti == 0) pronto = false

  return (
    <div className="container h-72  w-auto">
      <div>Dati nulli: {nulli.length}</div>
      {pronto ?
        <div>Dati caricati {quanti}</div>
        :
        <div></div>
      }
      <canvas ref={canvasRef} role='img' >
      </canvas>
    </div>
  )
}
