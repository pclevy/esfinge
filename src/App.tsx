import { BrowserRouter as Router } from "react-router-dom";
import esfingeLogo from "./assets/esfinge.png";
import "./App.css";
import AppRoutes from "./Routes";

function App() {
  return (
    <Router>
      <div>
        <img src={esfingeLogo} className="esfinge" alt="Esfinge Logo" />
        &nbsp;
        <span style={{ fontSize: "32px", fontWeight: "bold" }}>
          Projeto Esfinge
        </span>
        <br />
        <span style={{ fontSize: "22px", fontWeight: "bold" }}>
          Xadrez de Olho no Futuro
        </span>
      </div>

      <div>
        <div style={{ height: "8px" }}></div>
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>
          Futuro:
          <br />
        </span>
        <span style={{ fontSize: "18px" }}>
          -da <b>Juventude</b>; &nbsp; &nbsp; -da <b>Inclusão</b>; &nbsp; &nbsp;
          -do <b>Planeta</b>
        </span>
      </div>

      {/* Aqui entra o roteamento */}
      <AppRoutes />
    </Router>
  );
}

export default App;
