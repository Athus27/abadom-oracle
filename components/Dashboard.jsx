import { useEffect, useRef, useState } from "react";
import * as dfd from "danfojs";
import Plotly from "plotly.js-dist";
import tableUrl from "../data/table.csv?url";
import { criarDados, layoutBase } from "../data/consts";

export const Dashboard = () => {
  const chartRef = useRef(null);
  const [status, setStatus] = useState("Carregando dados...");

  useEffect(() => {
    let cancelled = false;

    async function renderChart() { 
      /*
        renderChart é uma função assíncrona que lida com a leitura do CSV, processamento dos dados e renderização do gráfico usando Plotly. Ela é chamada imediatamente dentro do useEffect para iniciar o processo de carregamento e renderização do gráfico assim que o componente é montado.
      */
      try {
        const df = await dfd.readCSV(tableUrl);
        const dfTop10 = df
          .loc({ columns: ["cause_name", "val"] })
          .sortValues("val", { ascending: false })
          .head(10);
        
        const valoresX = dfTop10["cause_name"].values;
        const valoresY = dfTop10["val"].values;

        if (cancelled || !chartRef.current) {
          return;
        }

        await Plotly.newPlot(
          chartRef.current,
          criarDados(valoresX, valoresY),
          layoutBase,
          { responsive: true }
        );

        setStatus("");
      } catch (error) {
        console.error(error);
        setStatus("Não foi possível carregar o gráfico.");
      }
    }

    renderChart();

    return () => {
      cancelled = true;
      if (chartRef.current) {
        Plotly.purge(chartRef.current);
      }
    };
  }, []);

  return (
    <main style={{ padding: "2rem", minHeight: "calc(100svh - 72px)" }}>
      <h1>Dados globais de mortalidade</h1>
      {status && <p>{status}</p>}
      <div ref={chartRef} style={{ width: "100%", height: "640px" }} />
    </main>
  );
};

