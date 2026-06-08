# Design System do Projeto

## Resumo

- Estilo: dark, técnico, místico, com sensação de oráculo digital.
- Direção visual: fundo escuro, contraste alto, acentos frios, pouca decoração.
- Clima: futurista, contemplativo, levemente sombrio.
- Prioridade: legibilidade e foco no conteúdo central.

## Cores

- `background`: `#0b0812`
- `surface`: `#120f1d`
- `surface-strong`: `#14101f`
- `text`: `#d9e7f5`
- `text-muted`: `#a3b1c6`
- `text-soft`: `#1b2d45`
- `primary`: `#6290b3`
- `primary-soft`: `#7ea8c7`
- `ring`: `#6290b3`
- `border`: `#2b3d52`
- `accent-bg`: `#1f3248`
- `code-bg`: `#14101f`
- `destructive`: `#ef4444`

## Tipografia

- Fonte principal: `Geist Variable`, `system-ui`, `Segoe UI`, `Roboto`, `sans-serif`.
- Fonte de código: `ui-monospace`, `Consolas`, `monospace`.

### Hierarquia

- `H1`: `56px`, `font-weight: 500`, `line-height: 0.95`, `letter-spacing: -1.68px`.
- `H2`: `24px`, `font-weight: 500`, `line-height: 1.18`, `letter-spacing: -0.24px`.
- `Body`: `18px`, `font-weight: 400`, `line-height: 1.45`, `letter-spacing: 0.18px`.
- `Body small`: `16px`, `font-weight: 400`, `line-height: 1.45`.
- `Eyebrow`: `12px`, `font-weight: 400`, `letter-spacing: 0.18em`, `text-transform: uppercase`.
- `Caption`: `14px`, `font-weight: 400`, `line-height: 1.43`.
- `Button`: `14px-18px`, `font-weight: 500` ou `400`, dependendo da variante.
- `Code`: `15px`, `font-weight: 400`, `line-height: 1.35`.

### Regras

- Títulos usam peso médio, sem excesso de contraste.
- Corpo é sempre claro e legível sobre o fundo escuro.
- O espaçamento entre letras é ligeiramente apertado em títulos.
- Textos auxiliares usam azul acinzentado ou tons próximos ao acento.

## Layout

- Estrutura base em coluna, com hero centralizado.
- Hero principal usa duas colunas: texto à esquerda, visual à direita.
- Em telas menores, o layout vira uma coluna só.
- Bordas laterais discretas delimitam o app.
- O conteúdo ocupa a largura total, mas com `max-width` controlado.

## Superfícies

- Fundo geral escuro.
- Cards e blocos usam surfaces um pouco mais claros que o fundo.
- Sombra existe, mas é suave e usada com parcimônia.
- Não há decoração pesada, gradientes chamativos ou elementos exuberantes.

## Componentes

### Botões

- Primário: azul frio, texto escuro, cantos levemente arredondados.
- Secundário: fundo escuro/neutral, texto claro, borda sutil.
- Estados: hover suave, foco visível, desabilitado com opacidade reduzida.

### Inputs

- Fundo escuro.
- Borda em `#2b3d52`.
- Texto claro.
- Radius médio.
- Foco com anel azul.

### Cards

- Fundo `#120f1d` ou próximo disso.
- Borda fina.
- Conteúdo bem respirado.
- Sem cantos exageradamente arredondados.

## Acentos visuais

- Azul frio é a cor principal de interação.
- Roxo e azul profundo aparecem como base atmosférica.
- Ilustração/Lottie tem papel importante na página inicial.
- O visual deve parecer técnico, não corporativo genérico.

## Regras

### Faça

- Use o fundo escuro como base do sistema.
- Mantenha o hero visualmente dominante.
- Preserve a tipografia Geist em toda a interface.
- Prefira contraste forte e composição limpa.
- Use azul para links, destaque e foco.

### Não faça

- Não use paletas quentes ou vibrantes.
- Não adicione gradientes chamativos.
- Não use sombras pesadas.
- Não aumente demais o radius.
- Não polua a tela com muitos blocos competindo com o conteúdo principal.
