import React, { useState } from "react";
import { Link } from "react-router-dom";
import { calcularResultado } from "../data/oracleQuestions.js";

const melancholyPhrases = [
	"No fim, a vida raramente termina com estrondo; ela apenas se recolhe, como uma vela cansada do próprio fogo.",
	"Somos tempo emprestado tentando esquecer que toda certeza cabe dentro de uma despedida.",
	"A morte não interrompe a vida: apenas revela que tudo o que amamos sempre esteve de passagem.",
	"Cada escolha adia um silêncio, mas nenhum caminho convence a noite a não chegar.",
];

const getMelancholyPhrase = (causeName) => {
	const phraseIndex = Array.from(causeName).reduce((total, character) => total + character.charCodeAt(0), 0) % melancholyPhrases.length;

	return melancholyPhrases[phraseIndex];
};

export const Quiz = ({ questions }) => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedAnswers, setSelectedAnswers] = useState([]);

	if (!questions || questions.length === 0) {
		return <p>Loading...</p>;
	}

	if (currentQuestionIndex >= questions.length) {
		const [result, ...secondaryResults] = calcularResultado(selectedAnswers, 3);
		const phrase = getMelancholyPhrase(result.causeName);

		return (
			<section className="panel test-panel">
				<div className="result">
					<p className="eyebrow">O oráculo respondeu</p>
					<h1>{result.label}</h1>
					<p className="result__cause">{result.causeName}</p>
					<p className="result__meta">Sinal do quiz: {result.confidence}%</p>
					<p>{result.description}</p>
					{secondaryResults.length > 0 && (
						<div className="result__alternatives" aria-label="Outras causas possíveis">
							{secondaryResults.map((secondaryResult) => (
								<div className="result__alternative" key={secondaryResult.causeName}>
									<span>{secondaryResult.label}</span>
									<strong>{secondaryResult.confidence}%</strong>
								</div>
							))}
						</div>
					)}
					<blockquote>{phrase}</blockquote>
				</div>
				<div className="flex justify-between ">
					<Link className="text-link button transition-transform duration-200 hover:scale-105" to="/">
						Voltar ao início
					</Link>
					<button
						className="button button--secondary transition-transform duration-200 hover:scale-105"
						type="button"
						onClick={() => {
							setSelectedAnswers((prevAnswers) => prevAnswers.slice(0, -1));
							setCurrentQuestionIndex((prevIndex) => Math.max(0, prevIndex - 1));
						}}
					>
						Voltar uma pergunta
					</button>
				</div>
			</section>
		);
	}

	const currentQuestion = questions[currentQuestionIndex];

	const handleAnswerClick = (answer) => {
		console.log("Resposta selecionada:", answer);

		setSelectedAnswers((prevAnswers) => {
			const nextAnswers = prevAnswers.slice(0, currentQuestionIndex);
			nextAnswers[currentQuestionIndex] = answer;
			return nextAnswers;
		});
		setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
	};

	const handlePreviousQuestion = () => {
		setSelectedAnswers((prevAnswers) => prevAnswers.slice(0, -1));
		setCurrentQuestionIndex((prevIndex) => Math.max(0, prevIndex - 1));
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
				{currentQuestionIndex > 0&& (<button className="button button--secondary transition-transform duration-200 hover:scale-105" type="button" onClick={handlePreviousQuestion}>
					Voltar uma pergunta
				</button>)}
			</div>
		</section>
	);
};
