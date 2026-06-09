import { Link } from "react-router-dom";
import { Quiz } from "../components/Quiz";
import { oracleQuestions } from "../data/oracleQuestions.js";

export const Teste = () => {
	return (
		<main className="page">
      
			<Quiz questions={oracleQuestions} />
		</main>
	);
};
