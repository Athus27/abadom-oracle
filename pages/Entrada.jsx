// ATHUS SILVA SOUZA 22.2.8079

export const Entrada = () => {
  return (
    <main className="page">
      <section className="panel form-panel">
        <p className="eyebrow">Antes de começar</p>
        <h1>Entrada de dados</h1>
        <p className="page-intro">Conte um pouco sobre você para personalizar a experiência do oráculo.</p>

        <form className="oracle-form">
          <label>
            Nome
            <input type="text" name="name" placeholder="Como devemos chamar você?" />
          </label>
          <label>
            Idade
            <input type="number" name="age" min="13" max="120" placeholder="Sua idade" />
          </label>
          <label>
            Qual tema mais desperta sua curiosidade?
            <select name="interest" defaultValue="">
              <option value="" disabled>Selecione uma opção</option>
              <option>Saúde e bem-estar</option>
              <option>Aventuras e riscos</option>
              <option>Tecnologia e futuro</option>
              <option>Mistérios do cotidiano</option>
            </select>
          </label>
          <button className="button button--primary" type="submit">Salvar informações</button>
        </form>
      </section>
    </main>
  )
}
