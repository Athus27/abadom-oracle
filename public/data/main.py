# /public/data/main.py
import pandas as pd
import matplotlib.pyplot as plt


def format_br(x):
    return "{:,.2f}".format(x).replace(",", "X").replace(".", ",").replace("X", ".")


pd.options.display.float_format = format_br
# no formato brasileiro, com vírgula como separador decimal e ponto como separador de milhar

df = pd.read_csv("table.csv")
filtered_df = df[["cause_name", "val"]]

# Ordenando e pegando as 10 maiores
filtered_df = filtered_df.sort_values(by="val", ascending=False).head(10)


# Imprima a variável direto, sem chamar .head() de novo
print(filtered_df)

# Criando e exibindo o gráfico de barras
plt.figure(figsize=(10, 6))  # Define o tamanho da figura
plt.bar(
    filtered_df["cause_name"], filtered_df["val"], color="#6290b3"
)  # Cria o gráfico
plt.title("Top 10 Causas", fontsize=16)
plt.xlabel("Causa", fontsize=12)
plt.ylabel("Valor", fontsize=12)
plt.xticks(
    rotation=45, ha="right"
)  # Rotaciona os rótulos do eixo X para não sobreporem

plt.tight_layout()  # Ajusta as margens para os textos não cortarem

# Salva o gráfico como uma imagem PNG em vez de tentar abrir uma janela
plt.savefig("grafico_top_10.png", dpi=300, bbox_inches="tight")
print("Gráfico salvo com sucesso em 'grafico_top_10.png'")
