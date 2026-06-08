# Como usar animações no projeto

Este projeto usa **React + Vite**, então animações podem entrar de formas diferentes:

- `src/assets/` para arquivos que serão importados no código
- `public/` para arquivos estáticos que serão usados por caminho direto

## Se a animação for Lottie (`.json`)

1. Instale a biblioteca:

```bash
npm install lottie-react
```

2. Coloque o arquivo `.json` em algo como:

```text
src/assets/animations/
```

3. Importe no `App.jsx`:

```jsx
import { useLottie } from "lottie-react";
import deathAnimation from "./assets/animations/death.json";
```

4. Renderize a animação:

```jsx
const { View } = useLottie({
  animationData: deathAnimation,
  loop: true,
  autoplay: true,
});

return <div>{View}</div>;
```

## Se a animação for vídeo (`.webm`, `.mp4`)

Coloque em `src/assets/animations/` ou `public/animations/` e use assim:

```jsx
<video autoPlay loop muted playsInline>
  <source src={animationFile} type="video/webm" />
</video>
```

## Se a animação for GIF

Use como imagem normal:

```jsx
<img src={animationFile} alt="" aria-hidden="true" />
```

## Regra prática

- **Lottie `.json`**: melhor para animações leves e vetoriais
- **Vídeo**: melhor para fundos mais pesados ou visuais mais complexos
- **GIF**: funciona fácil, mas costuma pesar mais

## Dica importante

Se a animação for usada como **fundo**, coloque o conteúdo principal em uma camada acima dela com `position: relative` e `z-index`.

