import esfingeLogo from "../assets/esfinge.png";
import AdSense from "../components/AdSense";

function Home() {
  return (
    <>
      <div>
        <img
          src={esfingeLogo}
          className="esfinge"
          alt="Esfinge Logo"
        />

        &nbsp;

        <span
          style={{
            fontSize: "32px",
            fontWeight: "bold",
          }}
        >
          Projeto Esfinge
        </span>

        <br />

        <span
          style={{
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          Xadrez de Olho no Futuro
        </span>
      </div>

      <div>
        <div style={{ height: "8px" }}></div>

        <span
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Futuro:
          <br />
        </span>

        <span style={{ fontSize: "18px" }}>
          -da <b>Juventude</b>; &nbsp;&nbsp;
          -da <b>Inclusão</b>; &nbsp;&nbsp;
          -do <b>Planeta</b>
        </span>
      </div>

      {/* Anúncio Google AdSense */}
      <div style={{ margin: "20px 0" }}>
        <AdSense adSlot="3009255339" />
      </div>

      <nav>
        <br />

        <a
          href="https://xadrez.esfinge.org"
          target="_self"
        >
          Projeto Esfinge
        </a>

        <br />
        <br />

        <a
          href="https://arquivodoarbitro.esfinge.org"
          target="_self"
        >
          Arquivo do Árbitro
        </a>
      </nav>
    </>
  );
}

export default Home;