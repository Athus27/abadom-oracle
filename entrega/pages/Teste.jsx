import { Link } from "react-router-dom";

export const Teste = () => {
  return (
    <main className="page">
      <section className="panel test-panel">
        <div className="progress" aria-label="Progresso: pergunta 1 de 10">
          <span style={{ width: "10%" }} />
        </div>
        <p className="eyebrow">Pergunta 01 de 10</p>
        <h1>Como você reage diante de uma situação inesperada?</h1>
        <div className="answer-grid">
          <button className="answer" type="button">Analiso tudo antes de agir</button>
          <button className="answer" type="button">Sigo meu instinto imediatamente</button>
          <button className="answer" type="button">Peço ajuda a alguém de confiança</button>
          <button className="answer" type="button">Evito a situação sempre que possível</button>
        </div>
        <Link className="text-link" to="/">Voltar ao início</Link>
      </section>
    </main>
  )
}
