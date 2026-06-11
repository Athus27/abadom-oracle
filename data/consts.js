// /home/athus/Documents/programming/ihc/pratica-1/data/consts.js

// 1. O layout é estático, então exportamos a constante diretamente
export const layoutBase = {
    title: 'Top 10 Causas de Mortes Globais (2023)',
    xaxis: { title: 'Causa' },
    yaxis: { title: 'Número de Óbitos' }
};

export const deathChartConfig = {
  responsive: true,
  displayModeBar: true,
};

// 2. Os dados dependem do CSV. Criamos uma função que recebe as variáveis.
// Sem ${}, apenas atribuindo as variáveis nativas aos eixos.
export function criarDados(valoresX, valoresY) {
    return [{
        x: valoresX,
        y: valoresY,
        type: 'bar',
        marker: { color: 'blue' }
    }];
}