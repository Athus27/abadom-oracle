# 🎨 shadcn/ui - Guia Completo do Zero

## O que é shadcn/ui?

**shadcn/ui é uma biblioteca de componentes React prontos para usar.** É tipo um "kit de peças" lindas que você copia e cola no seu projeto.

### Diferenças:

- **Material-UI, Chakra**: você _instala_ e usa direto
- **shadcn/ui**: você _copia o código_ do componente para seu projeto (você controla tudo!)

---

## ✅ Pré-requisitos

Você precisa ter:

1. **React** instalado ✅ (você tem)
2. **Tailwind CSS** instalado ✅ (você tem)
3. **Node.js e npm** (você tem)
4. **tsconfig.json** configurado ✅ (você já fez)

---

## ⚙️ O Mais Importante: Configurações (tsconfig.json)

### Por que precisa?

O **tsconfig.json** é um arquivo que configura como o **TypeScript** e o **Vite** entendem seu projeto. É ESSENCIAL para shadcn/ui funcionar.

### Arquivo que você criou:

```json
{
  "compilerOptions": {
    "ignoreDeprecations": "6.0",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### Explicação de cada linha importante:

#### 1️⃣ **"ignoreDeprecations": "6.0"**

```json
"ignoreDeprecations": "6.0"
```

- Silencia avisos de coisas antigas que vão ser removidas no TypeScript 7.0
- SEM isso, VS Code fica reclamando de "baseUrl está deprecated"
- Você quer adicionar isso pra não ver erro chato

#### 2️⃣ **"jsx": "react-jsx"**

```json
"jsx": "react-jsx"
```

- Diz que você tá usando React 17+ (que não precisa importar React em todo arquivo)
- Essencial para React moderno

#### 3️⃣ **"paths" - O MAIS IMPORTANTE para shadcn/ui**

```json
"baseUrl": ".",
"paths": {
  "@/*": ["./src/*"]
}
```

**Isso significa:** Quando você escreve `@/components/ui/button`, é como se estivesse escrevendo `./src/components/ui/button`

**Exemplo na prática:**

```jsx
// Sem o @ (caminhos longos e chatos):
import { Button } from "../../../../components/ui/button";

// Com o @ (limpo e bonito):
import { Button } from "@/components/ui/button";
```

**Sem essa configuração, shadcn/ui NÃO FUNCIONA!** Ele gera imports com `@` e não acha os arquivos.

#### 4️⃣ **Outros (menos importantes, mas úteis)**

```json
"target": "ES2020"              // Qual versão do JavaScript usar
"module": "ESNext"              // Tipo de módulos (import/export)
"skipLibCheck": true            // Não verifica tipos de bibliotecas (mais rápido)
"moduleResolution": "bundler"   // Como encontra os módulos (pro Vite)
"isolatedModules": true         // Cada arquivo é independente (pro build)
```

---

## 🎯 Resumo: O que você FEZ

1. **Criou tsconfig.json** com a configuração de caminhos
2. **Adicionou "ignoreDeprecations"** pra silenciar avisos
3. **Configurou paths com "@"** pra imports ficarem limpos

**ISSO PERMITE QUE:**

- Vite entenda seu projeto
- shadcn/ui encontre os componentes
- Seus imports funcionem sem erros

---

## 🚀 Passo 1: Inicializar shadcn/ui

### No seu projeto, rode:

```bash
npx shadcn@latest init
```

### Vai pedir para escolher:

1. **Qual template?** → Escolhe **Vite** (é o que você usa)

```
? Select a template › - Use arrow-keys. Return to submit.
  Next.js
❯ Vite
  TanStack Start
  React Router
  Astro
  Laravel
```

2. **Qual framework?** → **React**

3. **Qual preset/tema?** → Escolhe **Nova** ou a primeira opção

Depois aperta **Enter** em tudo que perguntar. As respostas padrão são sempre certas!

### O que vai acontecer?

- Vai criar uma pasta `components/ui/`
- Vai criar um arquivo `lib/utils.ts`
- Vai atualizar seu `package.json` (vai adicionar dependências tipo `@radix-ui`)
- Pronto! ✅

---

## 📦 Passo 2: Instalar um componente

Depois que o init termina, você instala componentes individuais:

### Exemplo - Instalar um Button:

```bash
npx shadcn@latest add button
```

Isso cria um arquivo: `components/ui/button.tsx`

### Outros componentes úteis:

```bash
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add form
npx shadcn@latest add alert
```

---

## 💻 Passo 3: Usar um componente no seu código

### Antes (sem shadcn):

```jsx
function App() {
  return <button className="bg-blue-500 text-white p-2 rounded">Clique</button>;
}
```

### Depois (com shadcn):

```jsx
import { Button } from "@/components/ui/button";

function App() {
  return <Button>Clique</Button>;
}
```

**NOTA:** O `@` significa a pasta `src/`. É definido no seu `tsconfig.json`:

```json
"paths": {
  "@/*": ["./src/*"]
}
```

---

## 🎯 Exemplo Prático: Card + Button

### Instalar os componentes:

```bash
npx shadcn@latest add card
npx shadcn@latest add button
```

### Usar no seu código:

```jsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function MyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Título do Card</CardTitle>
        <CardDescription>Descrição aqui</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Conteúdo do card</p>
        <Button>Clique aqui</Button>
      </CardContent>
    </Card>
  );
}
```

---

## 🎨 Customizar Componentes

### Os componentes são SEUS! Você pode editar como quiser:

1. Abra o arquivo: `components/ui/button.tsx`
2. Mude as cores, tamanhos, efeitos
3. Salva e pronto!

Exemplo - mudar a cor:

```jsx
// Antes
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        // ... outras variações
      },
    },
  },
);

// Você edita e muda pra qualquer cor!
```

---

## 📂 Estrutura depois de instalar

```
seu-projeto/
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── ... mais componentes
│   ├── lib/
│   │   └── utils.ts
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── tsconfig.json
└── vite.config.js
```

---

## ⚠️ Erros Comuns

### ❌ "Cannot find module '@/components/ui/button'"

**Solução:** Certifique que o `tsconfig.json` tem:

```json
"paths": {
  "@/*": ["./src/*"]
}
```

### ❌ "Componente não aparece"

**Solução:** Verifique se importou corretamente:

```jsx
// ❌ Errado
import Button from "@/components/ui/button";

// ✅ Certo
import { Button } from "@/components/ui/button";
```

### ❌ "Estilos não estão aplicados"

**Solução:** Certifique que o Tailwind CSS está importado no seu `App.jsx` ou `index.css`:

```jsx
import "./index.css";
```

---

## 🔗 Todos os Componentes Disponíveis

**https://ui.shadcn.com/docs/components**

Lá você vê:

- Preview do componente
- Código para copiar
- Exemplos de uso
- Props/Opções

---

## 📝 Resumo: Do Zero até Usar

1. **Rodar:** `npx shadcn@latest init`
2. **Escolher:** Vite + React (padrão em tudo)
3. **Instalar componente:** `npx shadcn@latest add button`
4. **Usar no código:**
   ```jsx
   import { Button } from "@/components/ui/button";
   export default () => <Button>Teste</Button>;
   ```
5. **Customizar:** Edita o arquivo em `components/ui/` como quiser

---

## 💡 Pro Tips

- Instale apenas componentes que vai usar
- Explore o site deles: **ui.shadcn.com**
- Os componentes usam **Radix UI** por baixo (acessibilidade garantida)
- Tudo é **Tailwind CSS**, então você já sabe customizar!

---

Agora é só praticar! 🚀
