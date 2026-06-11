 // funções para filtrar, ordenar, montar top 10
export function getTopDeaths(df, limit = 10) {
  return df
    .loc({ columns: ["cause_name", "val"] })
    .sortValues("val", { ascending: false })
    .head(limit);
}

export function dataframeToPlotArrays(df) {
  return {
    causes: df["cause_name"].values,
    values: df["val"].values,
  };
}

export function createBarTrace(causes, values) {
  return [{
    x: causes,
    y: values,
    type: "bar",
    marker: { color: "#6290b3" },
  }];
}