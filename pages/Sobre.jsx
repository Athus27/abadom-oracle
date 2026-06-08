// ATHUS SILVA SOUZA 22.2.8079
import { useState, useEffect } from "react";

const userIcons = Object.values(
  import.meta.glob("../src/assets/icons/user/*.svg", {
    eager: true,
    query: "?url",
    import: "default",
  }),
);

export const Sobre = () => {
  const TEMPO_TROCA_MS = 3000;
  const TEMPO_FADE_MS = 300;

  const [iconIndex, setIconIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [scale, setScale] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setScale(true);

      setTimeout(() => {
        setIconIndex((prevIndex) => (prevIndex + 1) % userIcons.length);
        setFade(true); 
        setScale(false); 
      }, TEMPO_FADE_MS);
    }, TEMPO_TROCA_MS);
    
    return () => clearInterval(interval);
  }, []); 

  return (
    <main className="page">
      <section className="panel persona">
        <div className="persona__profile">
          <p className="eyebrow">Persona principal</p>
          <div className="persona__avatar">
          <img 
              src={userIcons[iconIndex]}
              alt="Ilustração da persona João"
              className={`${fade ? "is-visible" : "is-hidden"} ${scale ? "is-scaled" : ""}`}
          />
          </div>
          <h1>João, 30</h1>
          <p>Desenvolvedor de software</p>
        </div>
        <div className="persona__details">
          <p className="eyebrow">Sobre o projeto</p>
          <h2>Padrão de usuários deste Oráculo</h2>
          <table>
            <tbody>
              <tr>
                <th>Localização</th>
                <td>São Paulo, Brasil</td>
              </tr>
              <tr>
                <th>História</th>
                <td>
                  João é um jovem adulto que trabalha como desenvolvedor de software. Ele é curioso e gosta de explorar novas tecnologias.
                  Ele tem um estilo de vida ativo e gosta de praticar esportes.
                </td>
              </tr>
              <tr>
                <th>Necessidades</th>
                <td>
                  João quer descobrir qual será a possível causa da sua morte para se preparar melhor para o futuro. Ele também quer se
                  divertir e compartilhar os resultados com seus amigos.
                </td>
              </tr>
              <tr>
                <th>Desafios</th>
                <td>
                  João tem medo de doenças graves e acidentes. Ele também se preocupa com a segurança no trânsito e com a saúde mental.
                </td>
              </tr>
              <tr>
                <th>Comportamento</th>
                <td>
                  João é um usuário ativo de redes sociais e gosta de compartilhar suas experiências online. Ele também é um consumidor de
                  conteúdo digital e gosta de jogos e aplicativos interativos.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};
