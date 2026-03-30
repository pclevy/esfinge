//import { Routes, Route, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ProjetoEsfinge from "./ProjetoEsfinge";
//import ArquivoArbitro from "./ArquivoArbitro";

const AppRoutes = () => {
  return (
    <>
      <nav>
        {/* Rotas internas */}
        <br />
        {/* Links externos (usar <a>) */}

        <a href="https://xadrez.esfinge.org" target="_self">
          Projeto Esfinge
        </a>
        <br />
        <br />
        <a href="https://seashell-app-e8ntx.ondigitalocean.app" target="_self">
          Arquivo do Árbitro
        </a>
      </nav>

      <Routes>
        {/* Rotas internas corretas y*/}

        {/* rota padrão */}
        <Route path="/" element={<ProjetoEsfinge />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
