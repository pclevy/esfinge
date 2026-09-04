//import esfingeLogo from "../assets/esfinge.png";
import AdSense from "../components/AdSense";

import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";

interface Player {
  reg: string;
  nome: string;
  clube: string;
  municipio: string;
  rating: string;
}
// reg, nome, sobrenome, genero, titulo, rating, clube, municipio, status

const httpClient = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

function Players() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [query, setQuery] = useState("");
  const timeoutRef = useRef<number | null>(null);

  const fetchPlayers = useCallback(() => {
    httpClient
      .get<Player[]>("/")
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching players:", error);
      });
  }, []);

  const findPlayer = useCallback((search: string) => {
    httpClient
      .post<Player[]>("/", {
        query: search,
      })
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching players:", error);
      });
  }, []);

  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

  useEffect(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    if (query.trim()) {
      timeoutRef.current = window.setTimeout(() => {
        findPlayer(query);
      }, 2000);
    } else {
      fetchPlayers();
    }

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [query, fetchPlayers, findPlayer]);

  return (
    <div style={{ textAlign: "left" }}>
      <h1>Jogadores</h1>

      <input
        type="text"
        value={query}
        placeholder="Buscar jogador..."
        onChange={(e) => setQuery(e.target.value)}
      />
	  
	  <AdSense adSlot="9948140848" />

      <ul>
        {players.map((player) => (
          <li key={player.reg}>{player.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default Players;
