import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Quiz = ({ questions }) => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

	if (!questions || questions.length === 0) {
		return <p>Loading...</p>;
	}

	// Se já respondeu a todas as perguntas, podemos exibir uma tela de conclusão
	if (currentQuestionIndex >= questions.length) {
		return (
			<section className="panel test-panel">
				<h1>Quiz Finalizado!</h1>
				<Link className="text-link" to="/">
					Voltar ao início
				</Link>
			</section>
		);
	}

	const currentQuestion = questions[currentQuestionIndex];

	const handleAnswerClick = (answer) => {
		// Aqui você pode processar a resposta selecionada
		console.log("Resposta selecionada:", answer);

		// Avança para a próxima pergunta
		setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
	};

	return (
		<section className="panel test-panel">
			<div>
				<div className="progress" aria-label={`Progresso: pergunta ${currentQuestionIndex + 1} de ${questions.length}`}>
					<span
						style={{
							width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`
						}}
					/>
				</div>
				<p className="eyebrow">
					Pergunta {currentQuestionIndex + 1} de {questions.length}
				</p>
				<h1>{currentQuestion.text}</h1>
				<div className="answer-grid">
					{currentQuestion.answers.map((answer, answerIndex) => (
						<button className="answer" type="button" key={answerIndex} onClick={() => handleAnswerClick(answer)}>
							{answer.text}
						</button>
					))}
				</div>
			</div>
			<div className="flex justify-between ">
				<Link className="text-link button transition-transform duration-200 hover:scale-105" to="/">
					Voltar ao início
				</Link>
				{currentQuestionIndex > 0&& (<button className="button button--secondary transition-transform duration-200 hover:scale-105" onClick={() => setCurrentQuestionIndex((prevIndex) => Math.max(0, prevIndex - 1))}>
					Voltar uma pergunta
				</button>)}
			</div>
		</section>
	);
};
