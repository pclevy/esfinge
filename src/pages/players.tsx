import axios from "axios";
import { useEffect, useRef, useState } from "react";

interface Player {
  reg: string;
  nome: string;
  clube: string;
  municipio: string;
  rating: string;
}

function Players() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [query, setQuery] = useState("");
  const timeoutRef = useRef<number | null>(null);

  const httpClient = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      "Content-Type": "application/json",
    },
  });

  function fetchPlayers() {
    httpClient
      .get("/")
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching players:", error);
      });
  }

  function findPlayer(search: string) {
    httpClient
      .post("/", {
        query: search,
      })
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching players:", error);
      });
  }

  useEffect(() => {
    fetchPlayers();
  }, []);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (query) {
      timeoutRef.current = window.setTimeout(() => {
        findPlayer(query);
      }, 2000);
    } else {
      fetchPlayers();
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [query]);

  return (
    <div style={{ textAlign: "left" }}>
      <h1>Jogadores</h1>

      <input
        type="text"
        placeholder="Buscar jogador..."
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {players.map((player) => {
          return <li>{player.nome}</li>;
        })}
      </ul>
    </div>
  );
}

export default Players;
