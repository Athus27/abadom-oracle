//carrega e prepara dados
// data/deathsService.js
import * as dfd from "danfojs";
import tableUrl from "./table.csv?url";
import { getTopDeaths, dataframeToPlotArrays } from "./deathsTransforms";

export async function loadTopDeaths(limit = 10) {
  const df = await dfd.readCSV(tableUrl);
  const topDf = getTopDeaths(df, limit);
  return dataframeToPlotArrays(topDf);
}