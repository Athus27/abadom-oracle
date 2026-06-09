import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="site-header">
      <NavLink className="site-header__brand" to="/" aria-label="Abadom - página inicial">
        <span className="site-header__symbol" aria-hidden="true">💀</span>
        <span>ABADOM</span>
      </NavLink>
      <nav className="site-header__nav" aria-label="Navegação principal">
        <NavLink to="/" end>Início</NavLink>
        <NavLink to="/Sobre">Sobre</NavLink>
        <NavLink to="/Entrada">Entrada</NavLink>
      </nav>
    </header>
  );
};
