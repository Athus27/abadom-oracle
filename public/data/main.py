# /public/data/main.py
import pandas as pd

df = pd.read_csv("table.csv")
filtered_df = df[["cause_name", "val"]]

# Ordenando e pegando as 10 maiores
filtered_df = filtered_df.sort_values(by="val", ascending=False).head(10)

# Imprima a variável direto, sem chamar .head() de novo
print(filtered_df)