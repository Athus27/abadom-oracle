export const causeInfo = {
  "Doença isquêmica do coração": {
    label: "Colapso cardiovascular",
    group: "cardiovascular",
    deaths: 8896069,
    description:
      "O coração aparece como o ponto fraco central: pressão, colesterol, sedentarismo e hábitos metabólicos apontam para falha cardiovascular.",
  },

  "AVC isquêmico": {
    label: "Bloqueio cerebral",
    group: "cardiovascular",
    deaths: 3272360,
    description:
      "O destino aponta para interrupção do fluxo de sangue no cérebro, geralmente associado a pressão alta, diabetes, colesterol e sedentarismo.",
  },

  "AVC hemorrágico": {
    label: "Ruptura cerebral",
    group: "cardiovascular",
    deaths: 3155094,
    description:
      "O oráculo vê pressão interna demais: risco ligado principalmente à hipertensão, estresse físico e fragilidade vascular.",
  },

  "Doença pulmonar obstrutiva crônica": {
    label: "Falência pulmonar lenta",
    group: "respiratoria",
    deaths: 3417098,
    description:
      "A morte vem pelo ar: fumaça, poluição e dano acumulado aos pulmões reduzem a respiração até o limite.",
  },

  "Infeções de vias aéreas inferiores": {
    label: "Infecção respiratória fatal",
    group: "infecciosa",
    deaths: 2501138,
    description:
      "O risco aparece ligado a infecções respiratórias graves, baixa prevenção, ambientes fechados e vulnerabilidade imunológica.",
  },

  "Doença de Alzheimer e outras demências": {
    label: "Apagamento da mente",
    group: "neurologica",
    deaths: 2208098,
    description:
      "O fim surge como declínio neurológico progressivo, associado principalmente ao envelhecimento e fragilidade cognitiva.",
  },

  "Câncer de traqueia, brônquios e pulmão": {
    label: "Sombra no pulmão",
    group: "cancer",
    deaths: 2034684,
    description:
      "O pulmão concentra o presságio: tabaco, fumaça, poluição e exposição respiratória aumentam esse caminho.",
  },

  "Diabetes mellitus tipo II": {
    label: "Colapso metabólico",
    group: "metabolica",
    deaths: 1948730,
    description:
      "O metabolismo aparece como ameaça: açúcar alto, excesso de peso, sedentarismo e alimentação ruim dominam o resultado.",
  },

  "Doença cardíaca hipertensiva": {
    label: "Coração esmagado pela pressão",
    group: "cardiovascular",
    deaths: 1483889,
    description:
      "A pressão alta parece corroer o sistema cardiovascular até o coração não sustentar mais o corpo.",
  },

  "Cólon e câncer de reto": {
    label: "Câncer digestivo",
    group: "cancer",
    deaths: 1106498,
    description:
      "O sistema digestivo aparece como zona de risco, associado a dieta ruim, sedentarismo, obesidade e baixa prevenção.",
  },

  "Quedas": {
    label: "Acidente por queda",
    group: "lesao",
    deaths: 857113,
    description:
      "O risco aparece como acidente físico, fragilidade corporal, impulsividade ou exposição frequente a situações inseguras.",
  },

  "Acidente de trânsito com veículo motorizado": {
    label: "Estrada final",
    group: "lesao",
    deaths: 518423,
    description:
      "O oráculo aponta para deslocamento, pressa, trânsito, distração e exposição constante a veículos.",
  },
};

export const oracleQuestions = [
  {
    id: 1,
    text: "Qual é sua faixa de idade?",
    answers: [
      {
        text: "Menos de 30 anos",
        scores: {
          "Acidente de trânsito com veículo motorizado": 2,
          "Quedas": 1,
        },
      },
      {
        text: "30 a 49 anos",
        scores: {
          "Doença isquêmica do coração": 1,
          "Diabetes mellitus tipo II": 1,
          "Acidente de trânsito com veículo motorizado": 1,
        },
      },
      {
        text: "50 a 69 anos",
        scores: {
          "Doença isquêmica do coração": 3,
          "AVC isquêmico": 2,
          "Diabetes mellitus tipo II": 2,
          "Câncer de traqueia, brônquios e pulmão": 1,
          "Cólon e câncer de reto": 1,
        },
      },
      {
        text: "70 anos ou mais",
        scores: {
          "Doença isquêmica do coração": 3,
          "AVC isquêmico": 3,
          "AVC hemorrágico": 2,
          "Doença de Alzheimer e outras demências": 4,
          "Infeções de vias aéreas inferiores": 2,
          "Quedas": 3,
        },
      },
    ],
  },

  {
    id: 2,
    text: "Você fuma ou já fumou com frequência?",
    answers: [
      {
        text: "Nunca fumei",
        scores: {},
      },
      {
        text: "Já fumei, mas parei",
        scores: {
          "Doença pulmonar obstrutiva crônica": 2,
          "Câncer de traqueia, brônquios e pulmão": 2,
          "Doença isquêmica do coração": 1,
          "AVC isquêmico": 1,
        },
      },
      {
        text: "Fumo às vezes",
        scores: {
          "Doença pulmonar obstrutiva crônica": 3,
          "Câncer de traqueia, brônquios e pulmão": 3,
          "Doença isquêmica do coração": 2,
          "AVC isquêmico": 2,
        },
      },
      {
        text: "Fumo todos os dias",
        scores: {
          "Doença pulmonar obstrutiva crônica": 5,
          "Câncer de traqueia, brônquios e pulmão": 5,
          "Doença isquêmica do coração": 3,
          "AVC isquêmico": 3,
          "Infeções de vias aéreas inferiores": 2,
        },
      },
    ],
  },

  {
    id: 3,
    text: "Como está sua pressão arterial?",
    answers: [
      {
        text: "Normal na maior parte do tempo",
        scores: {},
      },
      {
        text: "Às vezes fica alta",
        scores: {
          "Doença cardíaca hipertensiva": 2,
          "AVC hemorrágico": 2,
          "AVC isquêmico": 1,
          "Doença isquêmica do coração": 1,
        },
      },
      {
        text: "Tenho pressão alta diagnosticada",
        scores: {
          "Doença cardíaca hipertensiva": 5,
          "AVC hemorrágico": 4,
          "AVC isquêmico": 3,
          "Doença isquêmica do coração": 3,
        },
      },
      {
        text: "Não sei, quase nunca meço",
        scores: {
          "Doença cardíaca hipertensiva": 2,
          "AVC hemorrágico": 2,
          "Doença isquêmica do coração": 2,
        },
      },
    ],
  },

  {
    id: 4,
    text: "Como está sua alimentação na prática?",
    answers: [
      {
        text: "Boa: frutas, legumes, pouca fritura e pouco ultraprocessado",
        scores: {},
      },
      {
        text: "Média: tento equilibrar, mas escorrego bastante",
        scores: {
          "Doença isquêmica do coração": 1,
          "Diabetes mellitus tipo II": 1,
          "Cólon e câncer de reto": 1,
        },
      },
      {
        text: "Ruim: muito açúcar, gordura, sal e ultraprocessado",
        scores: {
          "Doença isquêmica do coração": 3,
          "Diabetes mellitus tipo II": 3,
          "AVC isquêmico": 2,
          "Doença cardíaca hipertensiva": 2,
          "Cólon e câncer de reto": 2,
        },
      },
      {
        text: "Caótica: como qualquer coisa, sem rotina",
        scores: {
          "Doença isquêmica do coração": 2,
          "Diabetes mellitus tipo II": 2,
          "AVC isquêmico": 2,
          "Cólon e câncer de reto": 1,
        },
      },
    ],
  },

  {
    id: 5,
    text: "Você pratica atividade física?",
    answers: [
      {
        text: "Sim, várias vezes por semana",
        scores: {},
      },
      {
        text: "Sim, mas de forma irregular",
        scores: {
          "Doença isquêmica do coração": 1,
          "Diabetes mellitus tipo II": 1,
        },
      },
      {
        text: "Quase nunca",
        scores: {
          "Doença isquêmica do coração": 3,
          "Diabetes mellitus tipo II": 3,
          "AVC isquêmico": 2,
          "Doença cardíaca hipertensiva": 2,
          "Cólon e câncer de reto": 1,
          "Doença de Alzheimer e outras demências": 1,
        },
      },
      {
        text: "Sou completamente sedentário",
        scores: {
          "Doença isquêmica do coração": 4,
          "Diabetes mellitus tipo II": 4,
          "AVC isquêmico": 3,
          "Doença cardíaca hipertensiva": 3,
          "Cólon e câncer de reto": 2,
          "Doença de Alzheimer e outras demências": 2,
        },
      },
    ],
  },

  {
    id: 6,
    text: "Como está seu peso corporal?",
    answers: [
      {
        text: "Dentro do esperado para minha altura",
        scores: {},
      },
      {
        text: "Um pouco acima",
        scores: {
          "Diabetes mellitus tipo II": 2,
          "Doença isquêmica do coração": 2,
          "AVC isquêmico": 1,
        },
      },
      {
        text: "Bastante acima",
        scores: {
          "Diabetes mellitus tipo II": 4,
          "Doença isquêmica do coração": 3,
          "AVC isquêmico": 2,
          "Doença cardíaca hipertensiva": 2,
          "Cólon e câncer de reto": 1,
        },
      },
      {
        text: "Não sei avaliar, mas tenho sinais de excesso de peso",
        scores: {
          "Diabetes mellitus tipo II": 3,
          "Doença isquêmica do coração": 2,
          "Doença cardíaca hipertensiva": 2,
        },
      },
    ],
  },

  {
    id: 7,
    text: "Você tem diabetes, glicose alta ou resistência à insulina?",
    answers: [
      {
        text: "Não",
        scores: {},
      },
      {
        text: "Não sei",
        scores: {
          "Diabetes mellitus tipo II": 2,
          "Doença isquêmica do coração": 1,
          "AVC isquêmico": 1,
        },
      },
      {
        text: "Tenho pré-diabetes ou glicose alterada",
        scores: {
          "Diabetes mellitus tipo II": 4,
          "Doença isquêmica do coração": 2,
          "AVC isquêmico": 2,
        },
      },
      {
        text: "Tenho diabetes tipo II",
        scores: {
          "Diabetes mellitus tipo II": 5,
          "Doença isquêmica do coração": 3,
          "AVC isquêmico": 3,
          "Doença cardíaca hipertensiva": 1,
        },
      },
    ],
  },

  {
    id: 8,
    text: "Você tem colesterol alto ou histórico familiar forte de problema no coração?",
    answers: [
      {
        text: "Não",
        scores: {},
      },
      {
        text: "Tenho histórico familiar",
        scores: {
          "Doença isquêmica do coração": 2,
          "AVC isquêmico": 1,
        },
      },
      {
        text: "Tenho colesterol alto",
        scores: {
          "Doença isquêmica do coração": 4,
          "AVC isquêmico": 2,
        },
      },
      {
        text: "Tenho os dois",
        scores: {
          "Doença isquêmica do coração": 5,
          "AVC isquêmico": 3,
          "Doença cardíaca hipertensiva": 1,
        },
      },
    ],
  },

  {
    id: 9,
    text: "Você vive ou trabalha em ambiente com fumaça, poeira, poluição ou produtos químicos?",
    answers: [
      {
        text: "Não",
        scores: {},
      },
      {
        text: "Às vezes",
        scores: {
          "Doença pulmonar obstrutiva crônica": 1,
          "Câncer de traqueia, brônquios e pulmão": 1,
          "Infeções de vias aéreas inferiores": 1,
        },
      },
      {
        text: "Com frequência",
        scores: {
          "Doença pulmonar obstrutiva crônica": 3,
          "Câncer de traqueia, brônquios e pulmão": 2,
          "Infeções de vias aéreas inferiores": 2,
        },
      },
      {
        text: "Todo dia, e sinto impacto na respiração",
        scores: {
          "Doença pulmonar obstrutiva crônica": 5,
          "Câncer de traqueia, brônquios e pulmão": 3,
          "Infeções de vias aéreas inferiores": 3,
        },
      },
    ],
  },

  {
    id: 10,
    text: "Você costuma ter infecções respiratórias, falta de ar ou tosse persistente?",
    answers: [
      {
        text: "Raramente",
        scores: {},
      },
      {
        text: "Às vezes",
        scores: {
          "Infeções de vias aéreas inferiores": 2,
          "Doença pulmonar obstrutiva crônica": 1,
        },
      },
      {
        text: "Com frequência",
        scores: {
          "Infeções de vias aéreas inferiores": 4,
          "Doença pulmonar obstrutiva crônica": 3,
        },
      },
      {
        text: "Tenho sintomas respiratórios crônicos",
        scores: {
          "Doença pulmonar obstrutiva crônica": 5,
          "Infeções de vias aéreas inferiores": 3,
          "Câncer de traqueia, brônquios e pulmão": 2,
        },
      },
    ],
  },

  {
    id: 11,
    text: "Como é sua exposição ao trânsito?",
    answers: [
      {
        text: "Baixa, quase não dirijo nem pego estrada",
        scores: {},
      },
      {
        text: "Moderada, rotina comum de deslocamento",
        scores: {
          "Acidente de trânsito com veículo motorizado": 1,
        },
      },
      {
        text: "Alta, dirijo ou pego trânsito todos os dias",
        scores: {
          "Acidente de trânsito com veículo motorizado": 3,
        },
      },
      {
        text: "Alta e com pressa, distração ou direção arriscada",
        scores: {
          "Acidente de trânsito com veículo motorizado": 5,
          "Quedas": 1,
        },
      },
    ],
  },

  {
    id: 12,
    text: "Você costuma fazer exames e acompanhamento de saúde?",
    answers: [
      {
        text: "Sim, faço acompanhamento regular",
        scores: {},
      },
      {
        text: "Faço só quando sinto algo",
        scores: {
          "Doença isquêmica do coração": 1,
          "Diabetes mellitus tipo II": 1,
          "Cólon e câncer de reto": 1,
          "Câncer de traqueia, brônquios e pulmão": 1,
        },
      },
      {
        text: "Quase nunca faço exames",
        scores: {
          "Doença isquêmica do coração": 2,
          "Diabetes mellitus tipo II": 2,
          "Doença cardíaca hipertensiva": 2,
          "Cólon e câncer de reto": 2,
          "Câncer de traqueia, brônquios e pulmão": 1,
        },
      },
      {
        text: "Evito médico mesmo quando tenho sinais claros",
        scores: {
          "Doença isquêmica do coração": 3,
          "Diabetes mellitus tipo II": 3,
          "Doença cardíaca hipertensiva": 3,
          "Cólon e câncer de reto": 2,
          "Câncer de traqueia, brônquios e pulmão": 2,
          "Infeções de vias aéreas inferiores": 2,
        },
      },
    ],
  },
];

export function calcularResultado(respostas) {
  const placar = {};

  respostas.forEach((resposta) => {
    Object.entries(resposta.scores || {}).forEach(([causa, pontos]) => {
      placar[causa] = (placar[causa] || 0) + pontos;
    });
  });

  return Object.entries(placar)
    .map(([causeName, score]) => {
      const info = causeInfo[causeName];

      return {
        causeName,
        score,
        label: info?.label ?? causeName,
        group: info?.group ?? "desconhecido",
        deaths: info?.deaths ?? 0,
        description: info?.description ?? "",
      };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return b.deaths - a.deaths;
    })
    .slice(0, 3);
}