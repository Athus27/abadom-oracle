//estou em /data e quero importar
//data/table.csv
import * as dfd from "danfojs-node";
//imoprtando plotly
const csvPath = new URL("./table.csv", import.meta.url).pathname;

const df = await dfd.readCSV(csvPath);

//para remover o item com o indice 1
df.drop(1);
console.log(df.columns);

const filtered_df = df
	.loc({ columns: ["cause_name", "val"] }, { rows: df["cause_name"].eq("Cardiovascular diseases") })
	.sortValues("val", { ascending: false })
	.head(10);


console.table(filtered_df.values);
