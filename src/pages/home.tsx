import esfingeLogo from "../assets/esfinge.png";

function Home() {
  return (
    <>
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

      <nav>
        {/* Rotas internas */}
        <br />
        {/* Links externos (usar <a>) */}

        <a href="https://xadrez.esfinge.org" target="_self">
          Projeto Esfinge
        </a>
        <br />
        <br />
        {/* <a href="https://seashell-app-e8ntx.ondigitalocean.app" target="_self"> */}
        <a href="https://arquivodoarbitro.esfinge.org" target="_self">
          Arquivo do Árbitro
        </a>
      </nav>
    </>
  );
}

export default Home;
