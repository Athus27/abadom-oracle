// ATHUS SILVA SOUZA 22.2.8079
import { Route, Routes, useNavigate } from "react-router-dom";

import { DeathAnimation } from "../components/DeathAnimation";
import SkullIcon from "./assets/icons/skull.svg";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Entrada } from "../pages/Entrada";
import { Sobre } from "../pages/Sobre";
import { Teste } from "../pages/Teste";
import { Dashboard } from "../components/Dashboard";

function App() {
	const navigate = useNavigate();

	return (
		<div className="app-shell">
			<div className="app-content">
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							<main className="home-hero">
								<div className="home-hero__copy">
									<p className="home-hero__eyebrow">Oráculo digital</p>
									<h1>Bem-vindo ao Abadom</h1>
									<h2>Qual será a possível causa da sua morte</h2>
									<p>Responda 10 perguntas e descubra o que o futuro pode reservar.</p>
									<div className="home-hero__actions">
										<button className="button button--primary"
											onClick={() => navigate("/Teste")}
										>
											<img src={SkullIcon} alt="" aria-hidden="true" />
											<span>Iniciar Teste</span>
										</button>
									</div>
								</div>
								<div className="home-hero__visual" aria-hidden="true">
									<DeathAnimation />
								</div>
							</main>
						}
					/>
					<Route path="/Sobre" element={<Sobre />} />
					<Route path="/Entrada" element={<Entrada />} />
					<Route path="/Dados" element={<Dashboard />} />
				</Routes>
			</div>
			<Footer/>
		</div>
	);
}
export default App;
